package v1alpha1

import (
	"fmt"
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

var _ webhook.Defaulter = &KnowledgeBase{}

func (kb *KnowledgeBase) Default() {
	if kb.ObjectMeta.Labels == nil {
		kb.ObjectMeta.Labels = make(map[string]string)
	}

	kb.ObjectMeta.Labels[catalog.VersionLabelKey] = "1"
}

var _ webhook.Validator = &KnowledgeBase{}

func (kb *KnowledgeBase) resolveNodeParser(name string) bool {
	for _, parser := range kb.Spec.NodeParsers {
		if parser.Name == name {
			return true
		}
	}
	return false
}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (kb *KnowledgeBase) ValidateCreate() error {
	return kb.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (kb *KnowledgeBase) ValidateUpdate(old runtime.Object) error {
	return kb.validate()
}

func (kb *KnowledgeBase) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, kb.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "genai.modela.ai", Kind: "KnowledgeBase"},
		kb.Name, allErrs)
}

func (kb *KnowledgeBase) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, kb.validateDocuments(fldPath.Child("documents"))...)
	allErrs = append(allErrs, kb.validateNodeParsers(fldPath.Child("nodeParsers"))...)
	return allErrs
}

func (kb *KnowledgeBase) validateNodeParsers(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	var nameMap = make(map[string]bool)
	for i, parser := range kb.Spec.NodeParsers {
		if _, ok := nameMap[parser.Name]; ok {
			allErrs = append(allErrs, field.Duplicate(fldPath.Index(i), parser))
		}
		nameMap[parser.Name] = true
		allErrs = append(allErrs, kb.validateNodeParser(fldPath.Child("nodeParsers").Index(i), parser)...)
	}
	return allErrs
}

func (kb *KnowledgeBase) validateDocuments(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	var nameMap = make(map[string]bool)
	for i, doc := range kb.Spec.Documents {
		pFldPath := fldPath.Key(doc.Name)
		if len(doc.Name) == 0 {
			allErrs = append(allErrs, field.Invalid(fldPath.Index(i).Child("name"), doc.Name, "A name is required"))
		}
		if _, ok := nameMap[doc.Name]; ok {
			allErrs = append(allErrs, field.Duplicate(pFldPath, doc))
		}
		nameMap[doc.Name] = true
		var specCount = 0
		if doc.File != nil {
			specCount++
			if doc.File.Location != nil && doc.File.Url != nil {
				allErrs = append(allErrs, field.Invalid(pFldPath.Child("file"),
					doc.File, "Only one of location or url must be specified for a file reader"))
			}
		}
		if doc.Database != nil {
			specCount++
		}
		if doc.Web != nil {
			specCount++
		}
		if doc.Repository != nil {
			specCount++
		}
		if specCount != 1 {
			allErrs = append(allErrs, field.Invalid(pFldPath, doc, "Exactly one reader specification must be provided"))
		}
		if doc.NodeParser != nil && !kb.resolveNodeParser(*doc.NodeParser) {
			allErrs = append(allErrs, field.Invalid(pFldPath.Child("nodeParser"), *doc.NodeParser,
				fmt.Sprintf("The reference to the node parser \"%s\" could not be resolved", *doc.NodeParser)))
		}
	}

	return allErrs
}

func (kb *KnowledgeBase) validateRepositoryReader(fldPath *field.Path, spec RepositoryReaderSpec) field.ErrorList {
	var allErrs field.ErrorList
	for i, reader := range spec.Readers {
		if reader.Extension != nil && len(reader.Extensions) > 0 {
			allErrs = append(allErrs, field.Invalid(fldPath.Child("readers").Index(i), reader,
				"Only one of extension or extensions may be specified"))
		}
	}
	return allErrs
}

func (kb *KnowledgeBase) validateNodeParser(fldPath *field.Path, spec NodeParserSpec) field.ErrorList {
	var allErrs field.ErrorList
	if len(spec.Name) == 0 {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("name"), spec.Name, "A name is required"))
	}

	if spec.Mixed != nil && spec.Text != nil && spec.Sentence != nil {
		allErrs = append(allErrs, field.Invalid(fldPath, spec, "Multiple node parser specifications must not be provided"))
		return allErrs
	}

	if spec.Mixed != nil {
		allErrs = append(allErrs, kb.validateMixedNodeParser(fldPath.Child("mixed"), *spec.Mixed)...)
	} else {
		allErrs = append(allErrs, kb.validateConcreteNodeParser(fldPath, spec)...)
	}

	return allErrs
}

func (kb *KnowledgeBase) validateConcreteNodeParser(fldPath *field.Path, spec NodeParserSpec) field.ErrorList {
	var allErrs field.ErrorList
	if spec.Text != nil && spec.Sentence != nil {
		allErrs = append(allErrs, field.Invalid(fldPath, spec, "Multiple node parser specifications must not be provided"))
		return allErrs
	}

	if spec.Text != nil {
		allErrs = append(allErrs, kb.validateTextSplitter(fldPath.Child("text"), *spec.Text)...)
	}
	return allErrs
}

func (kb *KnowledgeBase) validateMixedNodeParser(fldPath *field.Path, spec MixedNodeParserSpec) field.ErrorList {
	var allErrs field.ErrorList
	if spec.FallbackNodeParser != nil && !kb.resolveNodeParser(*spec.FallbackNodeParser) {
		allErrs = append(allErrs, field.Invalid(fldPath.Child("fallbackNodeParser"), *spec.FallbackNodeParser,
			fmt.Sprintf("The reference to the node parser \"%s\" could not be resolved", *spec.FallbackNodeParser)))
	}

	for i, parser := range spec.Parsers {
		pFldPath := fldPath.Child("parsers").Index(i)
		if parser.Extension != nil {
			if len(parser.Extension.Exclude) > 0 && len(parser.Extension.Include) > 0 {
				allErrs = append(allErrs, field.Invalid(pFldPath.Child("extension"), parser.Extension,
					"Only one of include or exclude may be specified"))
			}
		}
		if parser.Name != nil {
			if parser.Name.Contains != nil && parser.Name.Equals != nil {
				allErrs = append(allErrs, field.Invalid(pFldPath.Child("name"), parser.Name,
					"Only one of contains or equals may be specified"))
			}
		}
		if !kb.resolveNodeParser(parser.NodeParser) {
			allErrs = append(allErrs, field.Invalid(pFldPath.Child("nodeParser"), parser.NodeParser,
				fmt.Sprintf("The reference to the node parser \"%s\" could not be resolved", parser.NodeParser)))
		}
	}
	return allErrs
}

func (kb *KnowledgeBase) validateTextSplitter(fldPath *field.Path, spec TextSplitterSpec) field.ErrorList {
	var allErrs field.ErrorList
	var specCount = 0
	if spec.Sentence != nil {
		specCount++
	}
	if spec.Token != nil {
		specCount++
	}
	if spec.Code != nil {
		specCount++
	}
	if specCount > 1 {
		allErrs = append(allErrs, field.Invalid(fldPath, spec, "Multiple text splitter specifications must not be provided"))
		return allErrs
	}

	return allErrs
}

func (kb *KnowledgeBase) ValidateDelete() error {
	return nil
}
