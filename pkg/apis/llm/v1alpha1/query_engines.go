package v1alpha1

// +kubebuilder:validation:Enum="embedding";"llm"
type SelectorMode string

const (
	EmbeddingSelectorMode SelectorMode = "embedding"
	LLMSelectorMode       SelectorMode = "llm"
)

// ConcreteQueryEngineSpec defines a query engine, which is used to retrieve context for a query
// and synthesize a response. A concrete query engine may not utilize other concrete query engines
type ConcreteQueryEngineSpec struct {
	// Retriever augments a query with context from a retriever
	Retriever *RetrieverQueryEngine `json:"retriever,omitempty" protobuf:"bytes,1,opt,name=retriever"`
}

// QueryEngineSpec defines a query engine, which is used to retrieve context for a query
// and synthesize a response, or routes the request to other query engines based on the query
type QueryEngineSpec struct {
	ConcreteQueryEngineSpec `json:",inline" protobuf:"bytes,1,opt,name=concreteQueryEngineSpec"`

	// Router chooses one or more query engine(s) to route requests to
	Router *RouterQueryEngineSpec `json:"router,omitempty" protobuf:"bytes,2,opt,name=router"`

	// SubQuestion routes sub-questions generated for a query to one or more query engine(s)
	SubQuestion *SubQuestionQueryEngineSpec `json:"subQuestion,omitempty" protobuf:"bytes,3,opt,name=subQuestion"`
}

type SelectorSpec struct {
	// The selection mode. If unspecified, default to `llm`
	Mode *SelectorMode `json:"mode,omitempty" protobuf:"bytes,1,opt,name=mode"`
	// The LLM or embedding model that will be used to determine the selections.
	// If unspecified, use the default LLM provided by the model server
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
	// Indicates if multiple options may be selected
	Multi *bool `json:"multi,omitempty" protobuf:"bytes,3,opt,name=multi"`
}

type QueryEngineToolSpec struct {
	// The specification for the query engine
	QueryEngine ConcreteQueryEngineSpec `json:"queryEngine,omitempty" protobuf:"bytes,1,opt,name=queryEngine"`
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
}

// RetrieverQueryEngine augments a query with a retriever
type RetrieverQueryEngine struct {
	// The response synthesizer to use when generating responses
	ResponseSynthesizer *ResponseSynthesizerSpec `json:"responseSynthesizer,omitempty" protobuf:"bytes,1,opt,name=responseSynthesizer"`
	// The retriever to use when generating responses
	Retriever RetrieverSpec `json:"retriever,omitempty" protobuf:"bytes,2,opt,name=retriever"`
	// The collection of node postprocessors
	PostProcessors []NodePostProcessor `json:"postProcessors,omitempty" protobuf:"bytes,3,opt,name=postProcessors"`
}

// KnowledgeGraphQueryEngine augments a query with information from a knowledge graph
type KnowledgeGraphQueryEngine struct{}
