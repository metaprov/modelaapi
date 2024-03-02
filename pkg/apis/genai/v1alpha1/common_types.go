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

// ModelSpec specifies the configuration for an LLM or embedding model
type ModelSpec struct {
	// ConnectionName specifies the name of a connection to a foundational model provider
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,1,opt,name=connectionName"`
	// Model specifies the vendor-specific model type. If unspecified, use the model provided by the
	// `model` option of the connection, or choose the default model for the vendor
	Model *string `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
}

// ResponseSynthesizerSpec defines the configuration for a response synthesizer, which
// takes in a set of text chunks and formulates a response
type ResponseSynthesizerSpec struct {
	// The method to use when synthesizing responses. If unspecified, default to `refine`
	Mode *ResponseMode `json:"mode,omitempty" protobuf:"bytes,1,opt,name=mode"`
	// The LLM to use when synthesizing responses. If unspecified, use the default provided by the parent specification
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
	// The specification for answer filtering. If unspecified, answer filtering will be disabled.
	// Compatible only with refine and compact response modes
	AnswerFiltering *AnswerFilteringSpec `json:"answerFiltering,omitempty" protobuf:"bytes,3,opt,name=answerFiltering"`
}

type AnswerFilteringSpec struct {
	// Indicates if answer filtering is enabled
	Enabled bool `json:"enabled" protobuf:"varint,1,opt,name=enabled"`
	// The LLM to use when filtering answers. If unspecified, default to the LLM defined
	// by the response synthesizer
	Model *ModelSpec `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
}
