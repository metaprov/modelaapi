package v1alpha1

import (
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
		schema.GroupKind{Group: "data.modela.ai", Kind: "KnowledgeBase"},
		kb.Name, allErrs)
}

func (kb *KnowledgeBase) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, kb.validateDocuments(fldPath.Child("documents"))...)
	allErrs = append(allErrs, kb.validateNodeParser(fldPath.Child("nodeParser"), kb.Spec.NodeParser)...)
	return allErrs
}

func (kb *KnowledgeBase) validateDocuments(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	var nameMap = make(map[string]bool)
	for _, doc := range kb.Spec.Documents {
		if _, ok := nameMap[doc.Name]; ok {
			allErrs = append(allErrs, field.Duplicate(fldPath, doc))
		}
		nameMap[doc.Name] = true
		var specCount = 0
		if doc.File != nil {
			specCount++
			if doc.File.Location != nil && doc.File.Url != nil {
				allErrs = append(allErrs, field.Invalid(fldPath.Key(doc.Name).Child("File"),
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
		if specCount > 1 {
			allErrs = append(allErrs, field.Invalid(fldPath.Key(doc.Name), doc, "Exactly one reader specification must be provided"))
		}
		if doc.NodeParser != nil {
			allErrs = append(allErrs, kb.validateNodeParser(fldPath.Child("nodeParser"), *doc.NodeParser)...)
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
	if spec.Mixed != nil && spec.Text != nil && spec.Sentence != nil {
		allErrs = append(allErrs, field.Invalid(fldPath, spec, "Multiple node parser specifications must not be provided"))
		return allErrs
	}

	if spec.Mixed != nil {
		allErrs = append(allErrs, kb.validateMixedNodeParser(fldPath.Child("mixed"), *spec.Mixed)...)
	} else {
		allErrs = append(allErrs, kb.validateConcreteNodeParser(fldPath, spec.ConcreteNodeParserSpec)...)
	}

	return allErrs
}

func (kb *KnowledgeBase) validateConcreteNodeParser(fldPath *field.Path, spec ConcreteNodeParserSpec) field.ErrorList {
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
	if spec.Fallback != nil {
		allErrs = append(allErrs, kb.validateConcreteNodeParser(fldPath, *spec.Fallback)...)
	}
	for i, parser := range spec.Parsers {
		if parser.Extension != nil {
			if len(parser.Extension.Exclude) > 0 && len(parser.Extension.Include) > 0 {
				allErrs = append(allErrs, field.Invalid(fldPath.Index(i).Child("extension"), parser.Extension,
					"Only one of include or exclude may be specified"))
			}
		}
		if parser.Name != nil {
			if parser.Name.Contains != nil && parser.Name.Equals != nil {
				allErrs = append(allErrs, field.Invalid(fldPath.Index(i).Child("name"), parser.Extension,
					"Only one of contains or equals may be specified"))
			}
		}
		allErrs = append(allErrs, kb.validateConcreteNodeParser(fldPath, parser.Parser)...)
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
