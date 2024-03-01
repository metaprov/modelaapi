package v1alpha1

// NodePostProcessor defines a node post-processor, which mutates the nodes retrieved
// by a query engine prior to synthesizing a response
type NodePostProcessor struct {
	// Exclude nodes below a similarity threshold
	Similarity *SimilarityPostProcessorSpec `json:"similarity,omitempty" protobuf:"bytes,1,opt,name=similarity"`
	// Exclude nodes based on keywords present in their content
	Keyword *KeywordPostProcessorSpec `json:"keyword,omitempty" protobuf:"bytes,2,opt,name=keyword"`
	// Re-order nodes by their score, placing the most relevant nodes at the beginning of the context
	Reorder *LongContextReorderSpec `json:"reorder,omitempty" protobuf:"bytes,3,opt,name=reorder"`
	// Optimize the content of nodes by extracting the most relevant sentences
	EmbeddingOptimizer *SentenceEmbeddingOptimizerSpec `json:"embeddingOptimizer,omitempty" protobuf:"bytes,4,opt,name=embeddingOptimizer"`
	// Rerank the nodes through an LLM
	LLMRerank *LLMRerankSpec `json:"llmRerank,omitempty" protobuf:"bytes,5,opt,name=llmRerank"`
	// Rerank the nodes through a specialized Cohere model
	CohereRerank *CohereRerankSpec `json:"cohereRerank,omitempty" protobuf:"bytes,6,opt,name=cohereRerank"`
	// Choose the top K nodes sorted by date
	FixedRecency *FixedRecencyPostProcessorSpec `json:"fixedRecency,omitempty" protobuf:"bytes,7,opt,name=fixedRecency"`
	// Sort by date and remove similar nodes that are older than newer ones
	EmbeddingRecency *EmbeddingRecencyPostProcessorSpec `json:"embeddingRecency,omitempty" protobuf:"bytes,8,opt,name=embeddingRecency"`
	// Choose the top K nodes after applying a time-weighted rerank (by creation date or last access)
	TimeWeightedRecency *TimeWeightedRecencyPostProcessorSpec `json:"timeWeightedRecency,omitempty" protobuf:"bytes,9,opt,name=timeWeightedRecency"`
}

type SimilarityPostProcessorSpec struct {
	// The threshold cutoff for similarity
	Cutoff float32 `json:"cutoff,omitempty" protobuf:"bytes,3,opt,name=cutoff"`
}

type KeywordPostProcessorSpec struct {
	// The collection of keywords that must be present in the node content
	Include []string `json:"include,omitempty" protobuf:"bytes,1,opt,name=include"`
	// The collection of keywords which must not be present in the node content. Matching nodes will be excluded
	Exclude []string `json:"exclude,omitempty" protobuf:"bytes,2,opt,name=exclude"`
}

type LongContextReorderSpec struct{}

type SentenceEmbeddingOptimizerSpec struct {
	// The embedding model to use
	EmbeddingModel ModelSpec `json:"embeddingModel,omitempty" protobuf:"bytes,1,opt,name=embeddingModel"`
	// The percentile cutoff, determining how many top K sentences are selected. If unspecified, the percentile cutoff will be disabled
	PercentileCutoff *float32 `json:"similarityCutoff,omitempty" protobuf:"bytes,2,opt,name=similarityCutoff"`
	// The threshold cutoff for similarity. If unspecified, the threshold cutoff will be disabled
	ThresholdCutoff *float32 `json:"thresholdCutoff,omitempty" protobuf:"bytes,3,opt,name=thresholdCutoff"`
}

type LLMRerankSpec struct {
	// The top number of nodes to return. If unspecified, default to 10
	TopN *int `json:"topN,omitempty" protobuf:"bytes,1,opt,name=topN"`
	// The LLM to use for re-ranking. If unspecified, use the default provided by the parent specification
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
	// Indicates if the RankGPT technique for re-ranking will be used
	RankGPT *bool `json:"rankGPT,omitempty" protobuf:"bytes,3,opt,name=rankGPT"`
}

type CohereRerankSpec struct {
	// The connection to Cohere
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,1,opt,name=connectionName"`
	// The top number of nodes to return. If unspecified, default to 2
	TopN *int `json:"topN,omitempty" protobuf:"bytes,2,opt,name=topN"`
}

type FixedRecencyPostProcessorSpec struct {
	// The top most recent nodes to return. If unspecified, default to 1
	TopK *int `json:"topK,omitempty" protobuf:"bytes,1,opt,name=topK"`
}

type EmbeddingRecencyPostProcessorSpec struct {
	// The embedding model to use
	EmbeddingModel ModelSpec `json:"embeddingModel,omitempty" protobuf:"bytes,1,opt,name=embeddingModel"`
	// The similarity cutoff. If unspecified, default to 0.7
	SimilarityCutoff *float32 `json:"similarityCutoff,omitempty" protobuf:"bytes,2,opt,name=similarityCutoff"`
}

type TimeWeightedRecencyPostProcessorSpec struct {
	// The top most recent nodes to return. If unspecified, default to 1
	TopK *int `json:"topN,omitempty" protobuf:"bytes,1,opt,name=topN"`
	// The rate at which the time similarity of a node decays. If unspecified, default 0.1
	TimeDecay *float32 `json:"timeDecay,omitempty" protobuf:"bytes,2,opt,name=timeDecay"`
	// Indicates if the time of last access will be weighted instead of the time of creation.
	// Documents that have not been queried will be favored when enabled
	LastAccess *bool `json:"lastAccess,omitempty" protobuf:"bytes,3,opt,name=lastAccess"`
}
