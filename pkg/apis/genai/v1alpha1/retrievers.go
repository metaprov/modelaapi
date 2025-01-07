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
	ReciprocalRankFusionRetrieverMode     FusionRetrieverMode = "reciprocal-rerank"
	RelativeScoreFusionRetrieverMode      FusionRetrieverMode = "relative-score"
	DistanceBasedScoreFusionRetrieverMode FusionRetrieverMode = "distance-based-score"
	SimpleFusionRetrieverMode             FusionRetrieverMode = "simple"
)

// +kubebuilder:validation:Enum="select-leaf";"select-leaf-embedding";"root";"all-leaf"
type TreeRetrieverMode string

const (
	SelectLeafTreeRetrieverMode          TreeRetrieverMode = "select-leaf"
	SelectLeafEmbeddingTreeRetrieverMode TreeRetrieverMode = "select-leaf-embedding"
	RootTreeRetrieverMode                TreeRetrieverMode = "root"
	AllLeafTreeRetrieverMode             TreeRetrieverMode = "all-leaf"
)

// +kubebuilder:validation:Enum="simple";"embedding";"llm"
type ListRetrieverMode string

const (
	SimpleListRetrieverMode    ListRetrieverMode = "simple"
	EmbeddingListRetrieverMode ListRetrieverMode = "embedding"
	LLMListRetrieverMode       ListRetrieverMode = "llm"
)

// +kubebuilder:validation:Enum="simple";"llm";"rake"
type KeywordTableRetrieverMode string

const (
	SimpleKeywordTableRetrieverMode KeywordTableRetrieverMode = "simple"
	LLMKeywordTableRetrieverMode    KeywordTableRetrieverMode = "llm"
	RAKEKeywordTableRetrieverMode   KeywordTableRetrieverMode = "rake"
)

type MetadataKeyInfo struct {
	// The name of the key
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The key type (integer, string, float, etc.)
	Type string `json:"type,omitempty" protobuf:"bytes,2,opt,name=type"`
	// The key description
	Description string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
}

// AutoVectorRetrieverSpec defines a vector retriever which automatically configures the request to a vector index
// (top K, metadata filters, query embedding) through an LLM
type AutoVectorRetrieverSpec struct {
	// Indicates if automatic query generation is enabled
	Enabled bool `json:"enabled" protobuf:"varint,1,opt,name=enabled"`
	// The LLM to use when generating queries. If unspecified, use the default provided by the endpoint
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
	// The maximum top K allowed. The top K set by the LLM will be clamped to this value
	MaxTopK *int64 `json:"maxTopK,omitempty" protobuf:"bytes,3,opt,name=maxTopK"`
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
	TopK *int64 `json:"topK,omitempty" protobuf:"bytes,3,opt,name=topK"`
	// Metadata key-value pairs that must be matched on retrieved nodes
	MatchMetadata map[string]string `json:"matchMetadata,omitempty" protobuf:"bytes,4,opt,name=matchMetadata"`
	// Indicates if auto-merging of parent and child nodes will be enabled. Auto-merging should only be enabled
	// on indexes that were constructed using a hierarchical node parser. If unspecified, default to false
	AutoMerging *bool `json:"autoMerging,omitempty" protobuf:"bytes,5,opt,name=autoMerging"`
	// The specification to automatically configure queries to the vector index
	Auto *AutoVectorRetrieverSpec `json:"auto,omitempty" protobuf:"bytes,6,opt,name=auto"`
}

func (x *VectorRetrieverSpec) IndexReference() IndexReference {
	return x.Index
}

// DocumentSummaryRetrieverSpec defines a retriever for a document summary index
type DocumentSummaryRetrieverSpec struct {
	// The reference to the vector store index
	Index IndexReference `json:"index" protobuf:"bytes,1,opt,name=index"`
	// The embedding or large language model to use. If unspecified, use the default provided by the endpoint
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
	// The top K nodes to retrieve. If unspecified, default to 1
	TopK *int64 `json:"topK,omitempty" protobuf:"bytes,3,opt,name=topK"`
	// The retriever mode. If unspecified, default to embedding
	Mode *DocumentSummaryRetrieverMode `json:"mode,omitempty" protobuf:"bytes,4,opt,name=mode"`
}

func (x *DocumentSummaryRetrieverSpec) IndexReference() IndexReference {
	return x.Index
}

// TreeRetrieverSpec defines a retriever from a tree index
type TreeRetrieverSpec struct {
	// The reference to the tree index
	Index IndexReference `json:"index" protobuf:"bytes,1,opt,name=index"`
	// The language model to use, if applicable. If unspecified, use the default provided by the endpoint
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
	// The retriever mode. If unspecified, default to select leaf
	Mode *TreeRetrieverMode `json:"mode,omitempty" protobuf:"bytes,3,opt,name=mode"`
	// The number of child nodes to consider traversing at each level of the tree, if applicable
	ChildBranchFactor *int64 `json:"childBranchFactor,omitempty" protobuf:"bytes,4,opt,name=childBranchFactor"`
}

func (x *TreeRetrieverSpec) IndexReference() IndexReference {
	return x.Index
}

type KeywordTableRetrieverSpec struct {
	// The reference to the tree index
	Index IndexReference `json:"index" protobuf:"bytes,1,opt,name=index"`
	// The language model to use, if using the LLM mode. If unspecified, use the default provided by the endpoint
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
	// The retriever mode. If unspecified, default to RAKE
	Mode *KeywordTableRetrieverMode `json:"mode,omitempty" protobuf:"bytes,3,opt,name=mode"`
	// The maximum number of keywords to consider per query. If unspecified, default to 10
	KeywordsPerQuery *int64 `json:"keywordsPerQuery,omitempty" protobuf:"bytes,4,opt,name=keywordsPerQuery"`
	// The maximum number of chunks to retrieve per query. If unspecified, default to 10
	ChunksPerQuery *int64 `json:"chunksPerQuery,omitempty" protobuf:"bytes,5,opt,name=chunksPerQuery"`
}

func (x *KeywordTableRetrieverSpec) IndexReference() IndexReference {
	return x.Index
}

// ListRetrieverSpec defines a retriever from a list index
type ListRetrieverSpec struct {
	// The reference to the tree index
	Index IndexReference `json:"index" protobuf:"bytes,1,opt,name=index"`
	// The large language or embedding model to use, if applicable. If unspecified, use the default provided by the endpoint
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
	// The top K nodes to retrieve when using the embedding or LLM mode. If unspecified, default to 1
	TopK *int64 `json:"topK,omitempty" protobuf:"bytes,3,opt,name=topK"`
	// The retriever mode. If unspecified, default to simple
	Mode *ListRetrieverMode `json:"mode,omitempty" protobuf:"bytes,4,opt,name=mode"`
}

func (x *ListRetrieverSpec) IndexReference() IndexReference {
	return x.Index
}

// FusionRetrieverSpec defines a retriever which can combine the results from multiple concrete retrievers
type FusionRetrieverSpec struct {
	// The collection of retriever names
	Retrievers []string `json:"retrievers,omitempty" protobuf:"bytes,1,opt,name=retrievers"`
	// The embedding or large language model to use when generating questions.
	// If unspecified, use the default provided by the endpoint
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
	// The number of queries to generate for the input query. If unspecified, default to 4
	Queries *int64 `json:"queries,omitempty" protobuf:"bytes,3,opt,name=queries"`
	// The top K nodes to retrieve. If unspecified, default to 1
	TopK *int64 `json:"topK,omitempty" protobuf:"bytes,4,opt,name=topK"`
	// The fusion retriever mode. If unspecified, default to simple
	Mode *FusionRetrieverMode `json:"mode,omitempty" protobuf:"varint,5,opt,name=mode"`
	// The default score for nodes which were retrieved without a score. If unspecified, default to 1
	DefaultScore *float32 `json:"defaultScore,omitempty" protobuf:"bytes,6,opt,name=defaultScore"`
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

	// Tree retrieves nodes from a tree index
	Tree *TreeRetrieverSpec `json:"tree,omitempty" protobuf:"bytes,4,opt,name=tree"`

	// KeywordTable retrieves nodes from a keyword table index
	KeywordTable *KeywordTableRetrieverSpec `json:"keywordTable,omitempty" protobuf:"bytes,5,opt,name=keywordTable"`

	// List retrievers nodes from a list index
	List *ListRetrieverSpec `json:"list,omitempty" protobuf:"bytes,6,opt,name=list"`

	// Router chooses one or more retriever(s) to route requests to
	Router *RouterRetrieverSpec `json:"router,omitempty" protobuf:"bytes,7,opt,name=router"`

	// Fusion combines the results of one or more retriever(s)
	Fusion *FusionRetrieverSpec `json:"fusion,omitempty" protobuf:"bytes,8,opt,name=fusion"`
}

func (r *RetrieverSpec) KnowledgeBases() []string {
	var names []string
	for _, ret := range []interface{ IndexReference() IndexReference }{
		r.Vector, r.DocumentSummary, r.Tree, r.KeywordTable, r.List} {
		if ret != nil {
			names = append(names, ret.IndexReference().KnowledgeBaseName)
		}
	}

	return names
}
