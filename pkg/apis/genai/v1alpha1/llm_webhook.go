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

func (llm *LLM) Default() {
	if llm.ObjectMeta.Labels == nil {
		llm.ObjectMeta.Labels = make(map[string]string)
	}

	llm.ObjectMeta.Labels[catalog.VersionLabelKey] = "1"
}

var _ webhook.Validator = &KnowledgeBase{}

func (llm *LLM) resolveQueryEngine(name string) bool {
	for _, engine := range llm.Spec.QueryEngines {
		if engine.Name == name {
			return true
		}
	}
	return false
}

func (llm *LLM) resolveRetriever(name string) bool {
	for _, retriever := range llm.Spec.Retrievers {
		if retriever.Name == name {
			return true
		}
	}
	return false
}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (llm *LLM) ValidateCreate() error {
	return llm.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (llm *LLM) ValidateUpdate(old runtime.Object) error {
	return llm.validate()
}

func (llm *LLM) validate() error {
	var allErrs field.ErrorList
	allErrs = append(allErrs, llm.validateSpec(field.NewPath("spec"))...)
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "genai.modela.ai", Kind: "LLM"},
		llm.Name, allErrs)
}

func (llm *LLM) validateSpec(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	allErrs = append(allErrs, llm.validateModels(fldPath.Child("models"))...)
	allErrs = append(allErrs, llm.validateQueryEngines(fldPath.Child("queryEngines"))...)
	allErrs = append(allErrs, llm.validateRetrievers(fldPath.Child("retrievers"))...)
	return allErrs
}

func (llm *LLM) validateModels(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	var nameMap = make(map[string]bool)
	for i, model := range llm.Spec.Models {
		if len(model.Name) == 0 {
			allErrs = append(allErrs, field.Invalid(fldPath.Index(i).Child("name"), model.Name, "A name is required"))
		}
		if _, ok := nameMap[model.Name]; ok {
			allErrs = append(allErrs, field.Duplicate(fldPath.Index(i), model))
		}
		nameMap[model.Name] = true
	}
	return allErrs
}

func (llm *LLM) validateQueryEngines(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	var nameMap = make(map[string]bool)
	for i, engine := range llm.Spec.QueryEngines {
		if len(engine.Name) == 0 {
			allErrs = append(allErrs, field.Invalid(fldPath.Index(i).Child("name"), engine.Name, "A name is required"))
		}
		pFldPath := fldPath.Key(engine.Name)
		if _, ok := nameMap[engine.Name]; ok {
			allErrs = append(allErrs, field.Duplicate(fldPath.Index(i), engine))
		}
		nameMap[engine.Name] = true
		var specCount = 0
		if engine.Retriever != nil {
			specCount++
			if !llm.resolveRetriever(engine.Retriever.Retriever) {
				allErrs = append(allErrs, field.Invalid(pFldPath.Child("retriever", "retriever"), engine.Retriever.Retriever,
					fmt.Sprintf("The reference to the retriever \"%s\" could not be resolved", engine.Retriever.Retriever)))
			}
			allErrs = append(allErrs, llm.validateNodePostProcessors(
				fldPath.Child("retriever", "postProcessors"), engine.Retriever.PostProcessors)...)
		}
		if engine.Router != nil {
			specCount++
			for i, tool := range engine.Router.Tools {
				tFldPath := pFldPath.Child("router", "tools").Index(i)
				if !llm.resolveQueryEngine(tool.QueryEngine) {
					allErrs = append(allErrs, field.Invalid(tFldPath.Child("queryEngine"), tool.QueryEngine,
						fmt.Sprintf("The reference to the query engine \"%s\" could not be resolved", tool.QueryEngine)))
				}
			}
		}
		if engine.SubQuestion != nil {
			specCount++
			for i, tool := range engine.SubQuestion.Tools {
				tFldPath := pFldPath.Child("subQuestion", "tools").Index(i)
				if !llm.resolveQueryEngine(tool.QueryEngine) {
					allErrs = append(allErrs, field.Invalid(tFldPath.Child("queryEngine"), tool.QueryEngine,
						fmt.Sprintf("The reference to the query engine \"%s\" could not be resolved", tool.QueryEngine)))
				}
			}
		}
		if specCount != 1 {
			allErrs = append(allErrs, field.Invalid(pFldPath, engine, "Exactly one query engine specification must be provided"))
		}
	}
	return allErrs
}

func (llm *LLM) validateNodePostProcessors(fldPath *field.Path, processors []NodePostProcessor) field.ErrorList {
	var allErrs field.ErrorList
	for i, processor := range processors {
		specs := []interface{}{
			processor.Similarity,
			processor.Keyword,
			processor.Reorder,
			processor.EmbeddingOptimizer,
			processor.LLMRerank,
			processor.CohereRerank,
			processor.FixedRecency,
			processor.EmbeddingRecency,
			processor.TimeWeightedRecency,
		}
		nonNilSpecs := (func() int {
			var count int
			for _, spec := range specs {
				if spec != nil {
					count++
				}
			}
			return count
		})()
		if nonNilSpecs != 1 {
			allErrs = append(allErrs, field.Invalid(fldPath.Index(i), processor, "Exactly one node post-processor specification must be provided"))
		}
	}
	return allErrs
}

func (llm *LLM) validateRetrievers(fldPath *field.Path) field.ErrorList {
	var allErrs field.ErrorList
	var nameMap = make(map[string]bool)
	for i, retriever := range llm.Spec.Retrievers {
		if len(retriever.Name) == 0 {
			allErrs = append(allErrs, field.Invalid(fldPath.Index(i).Child("name"), retriever.Name, "A name is required"))
		}
		pFldPath := fldPath.Key(retriever.Name)
		if _, ok := nameMap[retriever.Name]; ok {
			allErrs = append(allErrs, field.Duplicate(fldPath.Index(i), retriever))
		}
		nameMap[retriever.Name] = true
		var specCount = 0
		if retriever.Vector != nil {
			specCount++
		}
		if retriever.DocumentSummary != nil {
			specCount++
		}
		if retriever.Router != nil {
			specCount++
			for i, tool := range retriever.Router.Tools {
				tFldPath := pFldPath.Child("router", "tools").Index(i)
				if !llm.resolveRetriever(tool.Retriever) {
					allErrs = append(allErrs, field.Invalid(tFldPath.Child("retriever"), tool.Retriever,
						fmt.Sprintf("The reference to the retriever \"%s\" could not be resolved", tool.Retriever)))
				}
			}
		}
		if retriever.Fusion != nil {
			specCount++
			for i, tool := range retriever.Fusion.Retrievers {
				tFldPath := pFldPath.Child("fusion", "retrievers").Index(i)
				if !llm.resolveRetriever(tool) {
					allErrs = append(allErrs, field.Invalid(tFldPath, tool,
						fmt.Sprintf("The reference to the retriever \"%s\" could not be resolved", tool)))
				}
			}
		}
		if specCount != 1 {
			allErrs = append(allErrs, field.Invalid(pFldPath, retriever, "Exactly one retriever specification must be provided"))
		}
	}
	return allErrs
}

func (llm *LLM) ValidateDelete() error {
	return nil
}
