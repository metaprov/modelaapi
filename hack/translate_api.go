package main

import (
	"fmt"
	"go/ast"
	"os"
	"path/filepath"
	"regexp"
	"strings"

	//"go/doc"
	"go/parser"
	"go/token"
)

const EnumTemplate = `
class %s(Enum):
%s
`

const ImportTemplate = "from github.com.metaprov.modelaapi.pkg.apis.DIRECTORY.v1alpha1.generated_pb2 import %s as MD%s\n"

const ClassTemplate = `
@dataclass
class %s(Configuration):
%s

    def to_message(self) -> MD%s:
        return self.set_parent(MD%s()).parent

    
%s
`

var TypeMap = map[string]string{
	"float64": "float",
	"bool":    "bool",
	"string":  "str",
	"int64":   "int",
	"int32":   "int",
	"int":     "int",
	"true":    "True",
	"false":   "False",
}

var enumMap = map[string]map[string]string{}
var enumOutput = map[string]string{}
var enumUsed = map[string]bool{}

func parseComments(comments *ast.CommentGroup) (bool, string) {
	if comments == nil {
		return false, ""
	}
	var optional bool
	var defval string
	var reg = regexp.MustCompile(`default:=(.*?)$`)
	for _, comment := range comments.List {
		text := strings.ReplaceAll(comment.Text, " ", "")
		if strings.Contains(text, "validation:Optional") {
			optional = true
		}
		matches := reg.FindStringSubmatch(text)
		if len(matches) > 0 {
			defval = strings.TrimSpace(matches[1])
		}
	}
	return optional, defval
}

func generateEnum(decl *ast.GenDecl) string {
	if len(decl.Specs) == 0 {
		return ""
	}
	var name string = decl.Specs[0].(*ast.ValueSpec).Type.(*ast.Ident).Name
	var out string
	enumMap[name] = make(map[string]string)
	for _, spec := range decl.Specs {
		value := spec.(*ast.ValueSpec)
		nm, val := strings.Replace(value.Names[0].Name, name, "", -1), value.Values[0].(*ast.BasicLit).Value
		if nm == "None" {
			nm = "Nothing"
		}
		out += fmt.Sprintf("\t%s = %s\n", nm, val)
		enumMap[name][strings.ReplaceAll(val, "\"", "")] = nm
	}
	enumOutput[name] = fmt.Sprintf(EnumTemplate, name, out)
	return fmt.Sprintf(EnumTemplate, name, out)
}

func getDefaultValue(name string, defval string) string {
	switch TypeMap[name] {
	case "str":
		if defval == "" {
			defval = "\"\""
		}
	case "bool":
		if defval == "" {
			defval = "False"
		} else {
			defval = TypeMap[defval]
		}
	case "float":
		fallthrough
	case "int":
		if defval == "" {
			defval = "0"
		}
	default:
		if enum, ok := enumMap[name]; ok {
			if val, found := enum[strings.ReplaceAll(defval, "\"", "")]; found {
				enumUsed[name] = true
				defval = fmt.Sprintf("%s.%s", name, val)
			} else {
				defval = "None"
			}
		} else {
			defval = "None"
		}
	}
	return fmt.Sprintf(" = %s", defval)
}

func generateClass(decl *ast.GenDecl) (out string, imports string) {
	var name string = decl.Specs[0].(*ast.TypeSpec).Name.String()
	if strings.Contains(name, "List") {
		{
			return "", ""
		}
	}
	var outFields, postInit string
	var tagReg = regexp.MustCompile(`name=(.*?)($|,|")`)
	for _, field := range decl.Specs[0].(*ast.TypeSpec).Type.(*ast.StructType).Fields.List {
		if len(field.Names) == 0 {
			continue
		}
		name := strings.Title(tagReg.FindStringSubmatch(field.Tag.Value)[1])
		_, defval := parseComments(field.Doc)
		switch ty := field.Type.(type) {
		case *ast.StarExpr:
			switch expr := ty.X.(type) {
			case *ast.SelectorExpr:
				var defaultValue string
				//if optional {
				defaultValue = getDefaultValue(expr.Sel.Name, defval)

				//}
				typ, ok := TypeMap[expr.Sel.Name]
				if !ok {
					typ = expr.Sel.Name
					enumUsed[expr.Sel.Name] = true
				}
				outFields += fmt.Sprintf("\t%s: %s%s\n",
					name, typ, defaultValue)

			case *ast.Ident:
				var defaultValue string
				//if optional {
				defaultValue = getDefaultValue(expr.Name, defval)
				//}
				typ, ok := TypeMap[expr.Name]
				if !ok {
					typ = expr.Name
					enumUsed[expr.Name] = true
				}
				outFields += fmt.Sprintf("\t%s: %s%s\n",
					name, typ, defaultValue)

			}
		case *ast.ArrayType:
			var exprName string
			switch outType := ty.Elt.(type) {
			case *ast.SelectorExpr:
				exprName = outType.Sel.Name
			case *ast.Ident:
				exprName = outType.Name
			}
			var init string
			//if optional {
			init = " = field(default_factory=lambda: [])"
			//}
			typ, ok := TypeMap[exprName]
			if !ok {
				typ = exprName
				enumUsed[exprName] = true
			}

			outFields += fmt.Sprintf("\t%s: List[%s]%s\n",
				name, typ, init)
			//postInit += fmt.Sprintf("\t\tself.%s = TrackedList(self.%s, self, \"%s\")\n", name, name, name)
		case *ast.Ident:
			var defaultValue string
			//if optional {
			defaultValue = getDefaultValue(ty.Name, defval)

			//}
			typ, ok := TypeMap[ty.Name]
			if !ok {
				typ = ty.Name
				enumUsed[ty.Name] = true
			}
			outFields += fmt.Sprintf("\t%s: %s%s\n",
				name, typ, defaultValue)

		case *ast.SelectorExpr:
			var defaultValue string
			//if optional {
			defaultValue = getDefaultValue(ty.Sel.Name, defval)

			//}
			typ, ok := TypeMap[ty.Sel.Name]
			if !ok {
				typ = ty.Sel.Name
				enumUsed[ty.Sel.Name] = true
			}
			outFields += fmt.Sprintf("\t%s: %s%s\n",
				name, typ, defaultValue)
		}
	}
	if postInit != "" {
		//postInit = "\tdef __post_init__(self):\n" + postInit
	}

	return fmt.Sprintf(ClassTemplate, name, outFields, name, name, postInit), fmt.Sprintf(ImportTemplate, name, name)
}

var outEnums = ""
var outClasses = ""
var imports = ""

func readFile(location string) {
	dirs := strings.Split(location, "\\")
	loc := dirs[len(dirs)-3]
	fset := token.NewFileSet() // positions are relative to fset
	p, err := parser.ParseFile(fset, location, nil, parser.ParseComments)
	if err != nil {
		fmt.Println(err)
		return
	}

	for _, decl := range p.Decls { // Generate Enums
		if gen, ok := decl.(*ast.GenDecl); ok {
			if gen.Tok == token.CONST {
				generateEnum(gen)
			}

		}
	}
	for _, decl := range p.Decls { // Generate Classes
		if gen, ok := decl.(*ast.GenDecl); ok {
			if gen.Tok == token.TYPE {
				if _, ok := gen.Specs[0].(*ast.TypeSpec).Type.(*ast.StructType); ok {
					out, imp := generateClass(gen)
					outClasses += out
					imports += strings.Replace(imp, "DIRECTORY", loc, -1)
				}
			}
		}
	}
	outClasses = imports + "\n" + outClasses

}

func main() {
	readFile("C:\\Users\\liamm\\modelaapi\\modelaapi\\pkg\\apis\\catalog\\v1alpha1\\common_types.go")
	readFile("C:\\Users\\liamm\\modelaapi\\modelaapi\\pkg\\apis\\common\\rbac.go")
	//readFile("C:\\Users\\liamm\\modelaapi\\modelaapi\\pkg\\apis\\inference\\v1alpha1\\predictor_types.go")

	for enum, _ := range enumUsed {
		outEnums += enumOutput[enum] + "\n"
	}
	var cwd, _ = os.Getwd()
	file, _ := os.OpenFile(filepath.Join(cwd, "hack/trans_out/models.py"), os.O_CREATE|os.O_RDWR, 0644)
	file.Truncate(0)
	file.Seek(0, 0)
	file.Write([]byte(outClasses))
	file.Close()
	file, _ = os.OpenFile(filepath.Join(cwd, "hack/trans_out/common.py"), os.O_CREATE|os.O_RDWR, 0644)
	file.Truncate(0)
	file.Seek(0, 0)
	file.Write([]byte(outEnums))
	file.Close()
}
