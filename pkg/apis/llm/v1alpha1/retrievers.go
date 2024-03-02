package v1alpha1

// +kubebuilder:validation:Enum="embedding";"llm"
type DocumentSummaryRetrieverMode string

const (
	EmbeddingDocumentSummaryRetrieverMode DocumentSummaryRetrieverMode = "embedding"
	LLMDocumentSummaryRetrieverMode       DocumentSummaryRetrieverMode = "llm"
)

// ConcreteRetrieverSpec defines a retriever, which collects text chunks relevant to a query.
// A concrete retriever may not utilize other retrievers
type ConcreteRetrieverSpec struct {
	// Vector retrieves nodes from a vector index
	Vector *VectorRetrieverSpec `json:"vector,omitempty" protobuf:"bytes,1,opt,name=vector"`

	// DocumentSummary retrieves nodes from a document summary index
	DocumentSummary *DocumentSummaryIndexSpec `json:"documentSummary,omitempty" protobuf:"bytes,2,opt,name=documentSummary"`
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
	// Indicates if automatic query generation is enabled
	Enabled bool `json:"enabled" protobuf:"varint,1,opt,name=enabled"`
	// The LLM to use when generating queries. If unspecified, use the default provided by the parent specification
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
	// The maximum top K allowed. The top K set by the LLM will be clamped to this value
	MaxTopK *int `json:"maxTopK,omitempty" protobuf:"bytes,3,opt,name=maxTopK"`
	// The collection of metadata key info, which the LLM will use to infer metadata filters
	MetadataInfo []MetadataKeyInfo `json:"metadataInfo,omitempty" protobuf:"bytes,4,opt,name=metadataInfo"`
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
	// Indicates if auto-merging of parent and child nodes will be enabled. Auto-merging should only be enabled
	// on indexes that were constructed using a hierarchical node parser. If unspecified, default to false
	AutoMerging *bool `json:"autoMerging,omitempty" protobuf:"bytes,5,opt,name=autoMerging"`
	// The specification to automatically configure queries to the vector index
	Auto *AutoVectorRetrieverSpec `json:"auto,omitempty" protobuf:"bytes,6,opt,name=auto"`
}

// DocumentSummaryRetrieverSpec defines a retriever for a document summary index
type DocumentSummaryRetrieverSpec struct {
	// The reference to the vector store index
	Index IndexReference `json:"index" protobuf:"bytes,1,opt,name=index"`
	// The embedding or large language model to use
	Model ModelSpec `json:"embeddingModel,omitempty" protobuf:"bytes,2,opt,name=embeddingModel"`
	// The top K nodes to retrieve. If unspecified, default to 1
	TopK *int `json:"topK,omitempty" protobuf:"bytes,3,opt,name=topK"`
	// The retriever mode. If unspecified, default to embedding
	Mode *DocumentSummaryRetrieverMode `json:"mode,omitempty" protobuf:"bytes,4,opt,name=mode"`
}

// RetrieverSpec defines a retriever, which collects text chunks relevant to a query
type RetrieverSpec struct {
	ConcreteRetrieverSpec `json:",inline" protobuf:"bytes,1,opt,name=concreteRetrieverSpec"`

	// Router chooses one or more retriever(s) to route requests to
	Router *RouterRetrieverSpec `json:"router,omitempty" protobuf:"bytes,2,opt,name=router"`

	// Fusion combines the results of one or more retriever(s)
	Fusion *FusionRetrieverSpec `json:"fusion,omitempty" protobuf:"bytes,3,opt,name=fusion"`
}

// FusionRetrieverSpec defines a retriever which can combine the results from multiple concrete retrievers
type FusionRetrieverSpec struct {
	// The collection of retrievers
	Retrievers []ConcreteRetrieverSpec `json:"retrievers,omitempty" protobuf:"bytes,1,opt,name=retrievers"`
	// The number of queries to generate for the input query. If unspecified, default to 4
	Queries *int `json:"queries,omitempty" protobuf:"bytes,2,opt,name=queries"`
	// Indicates if reciprocal rank fusion will be applied. If indicates, a simple technique will be used instead
	ReciprocalRank *bool `json:"reciprocalRank,omitempty" protobuf:"varint,3,opt,name=reciprocalRank"`
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
