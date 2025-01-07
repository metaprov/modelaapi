package v1alpha1

// +kubebuilder:validation:Enum="refine";"compact";"simple-summarize";"tree-summarize";"accumulate";"compact-accumulate"
type ResponseMode string

const (
	RefineResponseMode            ResponseMode = "refine"
	CompactResponseMode           ResponseMode = "compact"
	SimpleSummarizeResponseMode   ResponseMode = "simple-summarize"
	TreeSummarizeResponseMode     ResponseMode = "tree-summarize"
	AccumulateResponseMode        ResponseMode = "accumulate"
	CompactAccumulateResponseMode ResponseMode = "compact-accumulate"
)

// IndexReference defines a reference to a single index within a Knowledge Base
type IndexReference struct {
	// The name of the Knowledge Base
	KnowledgeBaseName string `json:"knowledgeBaseName,omitempty" protobuf:"bytes,1,opt,name=knowledgeBaseName"`
	// The name of the index. If unspecified, default to the first index defined by the Knowledge Base
	Index *string `json:"index,omitempty" protobuf:"bytes,2,opt,name=index"`
}

// ModelSpec specifies the configuration for a language or embedding model
type ModelSpec struct {
	// ConnectionName specifies the name of a connection to a foundational model provider
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,1,opt,name=connectionName"`
	// Model specifies the vendor-specific model type. If unspecified, the model provided by the
	// `model` option of the connection or the default model for the vendor will be used.
	Model *string `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
	// Parameters contains a mapping for model-specific parameters.
	// Common parameters for language models include `max_tokens`, `temperature`, `request_timeout` and `max_retries`
	Parameters map[string]string `json:"parameters,omitempty" protobuf:"bytes,3,opt,name=parameters"`
}

// ResponseSynthesizerSpec defines the configuration for a response synthesizer, which
// takes in a set of text chunks and formulates a response
type ResponseSynthesizerSpec struct {
	// The method to use when synthesizing responses. If unspecified, default to `refine`
	Mode *ResponseMode `json:"mode,omitempty" protobuf:"bytes,1,opt,name=mode"`
	// The LLM to use when synthesizing responses. If unspecified, use the default provided by the parent specification
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
	// Indicates if answer filtering is enabled. Compatible only with refine and compact response modes
	AnswerFiltering *bool `json:"answerFiltering,omitempty" protobuf:"bytes,3,opt,name=answerFiltering"`
}
