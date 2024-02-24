package v1alpha1

// IndexReference defines a reference to a single index within a Knowledge Base
type IndexReference struct {
	// The name of the Knowledge Base
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The name of the index. If unspecified, default to the first index defined by the Knowledge Base
	Index *string `json:"index,omitempty" protobuf:"bytes,2,opt,name=index"`
}

// ModelSpec specifies the configuration for an LLM or embedding model
type ModelSpec struct {
	// ConnectionName specifies the name of a connection to a foundational model provider
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,1,opt,name=connectionName"`
	// Model specifies the vendor-specific model type
	Model string `json:"model,omitempty" protobuf:"bytes,2,opt,name=model"`
}
