package v1alpha1

// +kubebuilder:validation:Enum="embedding";"llm"
type SelectorMode string

const (
	EmbeddingSelectorMode SelectorMode = "embedding"
	LLMSelectorMode       SelectorMode = "llm"
)

// QueryEngineSpec defines a query engine, which is used to retrieve context for a query
// and synthesize a response. A query engine may also route queries to other query engines
type QueryEngineSpec struct {
	// The unique name of the query engine
	// +kubebuilder:validation:Required
	// +required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`

	// Retriever augments a query with context from a retriever
	Retriever *RetrieverQueryEngineSpec `json:"retriever,omitempty" protobuf:"bytes,2,opt,name=retriever"`

	// Router chooses one or more query engine(s) to route requests to
	Router *RouterQueryEngineSpec `json:"router,omitempty" protobuf:"bytes,3,opt,name=router"`

	// SubQuestion routes sub-questions generated for a query to one or more query engine(s)
	SubQuestion *SubQuestionQueryEngineSpec `json:"subQuestion,omitempty" protobuf:"bytes,4,opt,name=subQuestion"`
}

type SelectorSpec struct {
	// The selection mode. If unspecified, default to `genai`
	Mode *SelectorMode `json:"mode,omitempty" protobuf:"bytes,1,opt,name=mode"`
	// The LLM or embedding model that will be used to determine the selections.
	// If unspecified, use the default LLM provided by the model server
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
	// Indicates if multiple options may be selected
	Multi *bool `json:"multi,omitempty" protobuf:"bytes,3,opt,name=multi"`
}

type QueryEngineToolSpec struct {
	// The name of the query engine
	QueryEngine string `json:"queryEngine,omitempty" protobuf:"bytes,1,opt,name=queryEngine"`
	// The name of the query engine
	Name string `json:"name,omitempty" protobuf:"bytes,2,opt,name=name"`
	// The description of the query engine
	Description string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
}

// RouterQueryEngineSpec routes requests to one or more query engines
type RouterQueryEngineSpec struct {
	// The query engines to route requests to
	Tools []QueryEngineToolSpec `json:"tools,omitempty" protobuf:"bytes,1,opt,name=tools"`
	// The selector to use when choosing query engine(s)
	Selector *SelectorSpec `json:"selector,omitempty" protobuf:"bytes,2,opt,name=selector"`
}

// SubQuestionQueryEngineSpec breaks down a query into sub-questions that can be routed to other query engines
type SubQuestionQueryEngineSpec struct {
	// The query engines to route requests to
	Tools []QueryEngineToolSpec `json:"tools,omitempty" protobuf:"bytes,1,opt,name=tools"`
	// The response synthesizer to use when generating responses
	ResponseSynthesizer *ResponseSynthesizerSpec `json:"responseSynthesizer,omitempty" protobuf:"bytes,2,opt,name=responseSynthesizer"`
	// The model to use when generating questions
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,3,opt,name=model"`
}

// RetrieverQueryEngineSpec augments a query with a retriever
type RetrieverQueryEngineSpec struct {
	// The response synthesizer to use when generating responses
	ResponseSynthesizer *ResponseSynthesizerSpec `json:"responseSynthesizer,omitempty" protobuf:"bytes,1,opt,name=responseSynthesizer"`
	// The name of the retriever to use when retrieving context
	Retriever string `json:"retriever,omitempty" protobuf:"bytes,2,opt,name=retriever"`
	// The collection of node postprocessors
	NodePostProcessors []NodePostProcessor `json:"nodePostProcessors,omitempty" protobuf:"bytes,3,opt,name=nodePostProcessors"`
}

// KnowledgeGraphQueryEngine augments a query with information from a knowledge graph
type KnowledgeGraphQueryEngine struct{}
