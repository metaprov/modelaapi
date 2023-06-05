package main

import (
	"fmt"
	"go/ast"
	"go/parser"
	"go/token"
	"os"
	"path/filepath"
	"strings"
)

const FUNC_TEMPLATE = `
func (typeLower *type) SetStatus(status interface{}) {
	typeLower.Status = status.(statusType)
}
`

const TYPES_SUFFIX = "_types.go"
const LIFECYCLE_SUFFIX = "_lifecycle.go"

func processTypeFile(path string) ([]byte, error) {
	var output []byte
	var structNames []string
	var statusType string

	tree, err := parser.ParseFile(token.NewFileSet(), path, nil, parser.ParseComments)
	if err != nil {
		return nil, err
	}

	ast.Inspect(tree, func(n ast.Node) bool {
		if t, ok := n.(*ast.TypeSpec); ok {
			if str, ok := t.Type.(*ast.StructType); ok {
				var specFound, statusFound bool
				for _, field := range str.Fields.List {
					if len(field.Names) == 0 {
						continue
					}

					if field.Names[0].Name == "Spec" {
						specFound = true
					}

					if field.Names[0].Name == "Status" {
						ident, ok := field.Type.(*ast.Ident)
						if ok {
							statusFound = true
							statusType = ident.Name
						}
					}
				}

				if specFound && statusFound {
					structNames = append(structNames, t.Name.Name)
				}
			}
		}

		return true
	})

	for _, name := range structNames {
		var out = FUNC_TEMPLATE
		out = strings.Replace(out, "typeLower", strings.ToLower(name), -1)
		out = strings.Replace(out, "type", name, -1)
		out = strings.Replace(out, "statusType", statusType, -1)
		output = append(output, []byte(out)...)
	}

	return output, nil
}

func main() {
	path, err := filepath.Abs("./pkg/")
	if err != nil {
		panic(err)
	}

	err = filepath.Walk(path, func(path string, f os.FileInfo, err error) error {
		if len(path) < len(TYPES_SUFFIX) {
			return nil
		}

		if path[len(path)-len(TYPES_SUFFIX):len(path)] == TYPES_SUFFIX {
			lifeCyclePath := strings.Replace(path, TYPES_SUFFIX, LIFECYCLE_SUFFIX, -1)
			f, err := os.OpenFile(lifeCyclePath, os.O_RDWR|os.O_APPEND, 0666)
			if err != nil {
				fmt.Printf("path %s failed with error %v\n", path, err)
				return nil
			}

			lifeCyclePath = strings.Replace(lifeCyclePath, "/pkg/", "/pkg_test/", -1)
			os.MkdirAll(filepath.Dir(lifeCyclePath), 0700)
			os.Create(lifeCyclePath)

			output, err := processTypeFile(path)
			if err != nil {
				fmt.Printf("path %s failed with error %v\n", path, err)
				return nil
			}

			_, err = f.Write(output)
			f.Close()
		}

		return nil
	})

	if err != nil {
		panic(err)
	}
}
