package v1alpha1

// ConcreteRetrieverSpec defines a retriever, which collects text chunks relevant to a query.
// A concrete retriever may not utilize other retrievers
type ConcreteRetrieverSpec struct {
	// Vector retrieves nodes from a vector index
	Vector *VectorRetrieverSpec `json:"vector,omitempty" protobuf:"bytes,1,opt,name=vector"`
}

type MetadataKeyInfo struct {
	// The name of the key
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=model"`
	// The key type
	Type string `json:"type,omitempty" protobuf:"bytes,2,opt,name=type"`
	// The key description
	Description string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
}

// AutoVectorRetrieverSpec defines a vector retriever which automatically configures the request to a vector index
// (top K, metadata filters, query embedding) through an LLM
type AutoVectorRetrieverSpec struct {
	// The LLM to use when generating queries. If unspecified, use the default provided by the parent specification
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,1,opt,name=model"`
	// The maximum top K allowed. The top K set by the LLM will be clamped to this value
	MaxTopK *int `json:"maxTopK,omitempty" protobuf:"bytes,2,opt,name=maxTopK"`
	// The collection of metadata key info, which the LLM will use to infer metadata filters
	MetadataInfo []MetadataKeyInfo `json:"metadataInfo,omitempty" protobuf:"bytes,2,opt,name=metadataInfo"`
}

// VectorRetrieverSpec defines a retriever for a vector index
type VectorRetrieverSpec struct {
	// The reference to the vector store index
	Index IndexReference `json:"index" protobuf:"bytes,1,opt,name=index"`
	// The embedding model to use
	EmbeddingModel ModelSpec `json:"embeddingModel,omitempty" protobuf:"bytes,2,opt,name=embeddingModel"`
	// The top K nodes to retrieve. If unspecified, default to 10
	TopK *int `json:"topK,omitempty" protobuf:"bytes,3,opt,name=topK"`
	// Metadata key-value pairs that must be matched on retrieved nodes
	MatchMetadata map[string]string `json:"matchMetadata,omitempty" protobuf:"bytes,4,opt,name=matchMetadata"`
	// The specification to automatically configure queries to the vector index
	Auto *AutoVectorRetrieverSpec `json:"auto,omitempty" protobuf:"bytes,5,opt,name=auto"`
}

// RetrieverSpec defines a retriever, which collects text chunks relevant to a query
type RetrieverSpec struct {
	ConcreteRetrieverSpec `json:",inline" protobuf:"bytes,1,opt,name=concreteRetrieverSpec"`
}

// FusionRetrieverSpec defines a retriever which can combine the results from multiple concrete retrievers
type FusionRetrieverSpec struct {
	// The collection of retrievers
	Retrievers []ConcreteRetrieverSpec `json:"retrievers,omitempty" protobuf:"bytes,1,opt,name=retrievers"`
}

type RetrieverToolSpec struct {
	// The specification for the retriever
	Retriever ConcreteRetrieverSpec `json:"retriever,omitempty" protobuf:"bytes,1,opt,name=retriever"`
	// The name of the retriever
	Name *string `json:"name,omitempty" protobuf:"bytes,2,opt,name=name"`
	// The description of the retriever
	Description string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
}

type RouterRetrieverSpec struct {
	// The query engines to route requests to
	Tools []RetrieverToolSpec `json:"tools,omitempty" protobuf:"bytes,1,opt,name=tools"`
	// The selector to use when choosing retriever(s)
	Selector *SelectorSpec `json:"selector,omitempty" protobuf:"bytes,2,opt,name=selector"`
}
