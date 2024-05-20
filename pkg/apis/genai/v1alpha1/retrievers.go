package v1alpha1

// +kubebuilder:validation:Enum="embedding";"llm"
type DocumentSummaryRetrieverMode string

const (
	EmbeddingDocumentSummaryRetrieverMode DocumentSummaryRetrieverMode = "embedding"
	LLMDocumentSummaryRetrieverMode       DocumentSummaryRetrieverMode = "llm"
)

// +kubebuilder:validation:Enum="reciprocal-rerank";"relative-score";"distance-based-score";"simple"
type FusionRetrieverMode string

const (
	ReciprocalRankFusionRetrieverMode     = "reciprocal-rerank"
	RelativeScoreFusionRetrieverMode      = "relative-score"
	DistanceBasedScoreFusionRetrieverMode = "distance-based-score"
	SimpleFusionRetrieverMode             = "simple"
)

type MetadataKeyInfo struct {
	// The name of the key
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
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
	// The LLM to use when generating queries. If unspecified, use the default provided by model server
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
	// The embedding or large language model to use. If unspecified, use the default provided by model server
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
	// The top K nodes to retrieve. If unspecified, default to 1
	TopK *int `json:"topK,omitempty" protobuf:"bytes,3,opt,name=topK"`
	// The retriever mode. If unspecified, default to embedding
	Mode *DocumentSummaryRetrieverMode `json:"mode,omitempty" protobuf:"bytes,4,opt,name=mode"`
}

// FusionRetrieverSpec defines a retriever which can combine the results from multiple concrete retrievers
type FusionRetrieverSpec struct {
	// The collection of retriever names
	Retrievers []string `json:"retrievers,omitempty" protobuf:"bytes,1,opt,name=retrievers"`
	// The embedding or large language model to use when generating questions.
	// If unspecified, use the default provided by model server
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
	// The number of queries to generate for the input query. If unspecified, default to 4
	Queries *int `json:"queries,omitempty" protobuf:"bytes,3,opt,name=queries"`
	// The top K nodes to retrieve. If unspecified, default to 1
	TopK *int `json:"topK,omitempty" protobuf:"bytes,4,opt,name=topK"`
	// The fusion retriever mode. If unspecified, default to simple
	Mode *FusionRetrieverMode `json:"mode,omitempty" protobuf:"varint,5,opt,name=mode"`
}

type RetrieverToolSpec struct {
	// The name of the retriever
	Retriever string `json:"retriever,omitempty" protobuf:"bytes,1,opt,name=retriever"`
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

// RetrieverSpec defines a retriever, which collects text chunks relevant to a query.
// A retriever may also route queries to other retrievers
type RetrieverSpec struct {
	// The unique name of the retriever
	// +kubebuilder:validation:Required
	// +required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`

	// Vector retrieves nodes from a vector index
	Vector *VectorRetrieverSpec `json:"vector,omitempty" protobuf:"bytes,2,opt,name=vector"`

	// DocumentSummary retrieves nodes from a document summary index
	DocumentSummary *DocumentSummaryRetrieverSpec `json:"documentSummary,omitempty" protobuf:"bytes,3,opt,name=documentSummary"`

	// Router chooses one or more retriever(s) to route requests to
	Router *RouterRetrieverSpec `json:"router,omitempty" protobuf:"bytes,4,opt,name=router"`

	// Fusion combines the results of one or more retriever(s)
	Fusion *FusionRetrieverSpec `json:"fusion,omitempty" protobuf:"bytes,5,opt,name=fusion"`
}
