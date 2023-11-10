package v1alpha1

import (
	"github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type (
	FileReaderType        string
	DatabaseReaderType    string
	WebReaderType         string
	NodeParserType        string
	SentenceTokenizerType string
	TextSplitterType      string
)

const (
	CSVFileReaderType     FileReaderType = "csv"
	ParquetFileReaderType FileReaderType = "parquet"
	PDFFileReaderType     FileReaderType = "pdf"

	SQLDatabaseReaderType   DatabaseReaderType = "sql"
	MongoDatabaseReaderType DatabaseReaderType = "mongo"

	URLWebReaderType WebReaderType = "url"

	HTMLNodeParserType           NodeParserType = "html"
	JSONNodeParserType           NodeParserType = "json"
	MarkdownNodeParserType       NodeParserType = "markdown"
	TextSplitterNodeParserType   NodeParserType = "text-splitter"
	SentenceWindowNodeParserType NodeParserType = "sentence-window"

	SentenceTextSplitterType TextSplitterType = "sentence"
	TokenTextSplitterType    TextSplitterType = "token"
	CodeTextSplitterType     TextSplitterType = "code"

	PunktSentenceTokenizerType     SentenceTokenizerType = "punkt"
	SeparatorSentenceTokenizerType SentenceTokenizerType = "separator"
	RegexSentenceTokenizerType     SentenceTokenizerType = "regex"
	PhraseSentenceTokenizerType    SentenceTokenizerType = "phrase"
)

// KnowledgeBaseConditionType is the condition type of the prediction pipeline
type KnowledgeBaseConditionType string

const (
	KnowledgeBaseSaved  KnowledgeBaseConditionType = "Saved"
	KnowledgeBaseSynced KnowledgeBaseConditionType = "Synced"
)

// +kubebuilder:subresource:status
// +kubebuilder:resource:path=knowledgebases,singular=knowledgebase,shortName=kb,categories={llm,modela}
// +kubebuilder:object:root=true
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Last Sync",type="date",JSONPath=".status.lastSyncAt",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// KnowledgeBase represents a collection of documents that can be queried with retrieval-augmented generation
type KnowledgeBase struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              KnowledgeBaseSpec   `json:"spec,omitempty" protobuf:"bytes,2,opt,name=spec"`
	Status            KnowledgeBaseStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

type KnowledgeBaseSpec struct {
	// Owner specifies the name of the Account which the object belongs to
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The user-provided description of the Knowledge Base
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// RefreshSchedule specifies the schedule for Modela to refresh all documents specified by the Knowledge Base
	RefreshSchedule *v1alpha1.RunSchedule `json:"refreshSchedule,omitempty" protobuf:"bytes,3,opt,name=refreshSchedule"`
	// MetadataDatabase specifies the location of a database table used to store document metadata and statuses.
	// When specified, any document metadata specified by Documents will be cleared and migrated to the table
	MetadataDatabase *v1alpha1.DatabaseLocation `json:"metadataDatabase,omitempty" protobuf:"bytes,4,opt,name=metadataDatabase"`
	// VectorStoreConnectionName specifies the name of a Connection resource that provides a vector database
	VectorStoreConnectionName string `json:"vectorStoreConnectionName,omitempty" protobuf:"bytes,5,opt,name=vectorStoreConnectionName"`
	// DocumentStoreConnectionName specifies the name of a Connection resource to use as a document store
	DocumentStoreConnectionName string `json:"documentStoreConnectionName,omitempty" protobuf:"bytes,6,opt,name=documentStoreConnectionName"`
	// EmbeddingModel specifies the embedding model to use when ingesting documents
	EmbeddingModel ModelSpec `json:"embeddingModel,omitempty" protobuf:"bytes,7,opt,name=embeddingModel"`
	// Documents specifies the collection of documents included in the Knowledge Base
	Documents []DocumentSpec `json:"documents,omitempty" protobuf:"bytes,8,opt,name=documents"`
	// NodeParser specifies the default node parser for all documents.
	// The node parser defines how to split up documents into individual chunks of text
	NodeParser NodeParserSpec `json:"nodeParser,omitempty" protobuf:"bytes,9,opt,name=nodeParser"`
}

// ModelSpec specifies the configuration for an LLM
type ModelSpec struct {
	// ConnectionName specifies the name of a connection to a foundational model provider
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,1,opt,name=connectionName"`
	// Model specifies the vendor-specific model type
	Model string `json:"model,omitempty" protobuf:"bytes,2,opt,name=connectionName"`
}

// NodeParserSpec defines how to break up a document into individual chunks of text
type NodeParserSpec struct {
	// Indicate if previous/next relationships should be included between nodes. When unspecified, default to true
	IncludeOrderRelationship *bool `json:"includeOrderRelationship,omitempty" protobuf:"bytes,1,opt,name=includeOrderRelationship"`
	// Indicate if metadata should be included in the nodes. When unspecified, default to true
	IncludeMetadata *bool `json:"includeMetadata,omitempty" protobuf:"bytes,2,opt,name=includeMetadata"`
	// The type of node parser. When a specification for a text or sentence window node parser is provided, this field
	// may be omitted. When not provided, the defaults for the type of node parser will be used
	Type *NodeParserType `json:"type,omitempty" protobuf:"bytes,3,opt,name=type"`
	// The specification for the text splitter to use as a node parser
	Text *TextSplitterSpec `json:"text,omitempty" protobuf:"bytes,4,opt,name=text"`
	// The specification for the sentence window node parser
	Sentence *SentenceWindowNodeParserSpec `json:"sentence,omitempty" protobuf:"bytes,5,opt,name=sentence"`
}

type SentenceWindowNodeParserSpec struct {
	// The function to split documents into sentences. When unspecified, default to the Punkt tokenizer
	Splitter *SentenceTokenizerSpec `json:"splitter,omitempty" protobuf:"bytes,1,opt,name=splitter"`
	// The number of sentences to capture on each side of the node. When unspecified, default to 3
	WindowSize *int32 `json:"windowSize,omitempty" protobuf:"bytes,2,opt,name=windowSize"`
}

// TextSplitterSpec defines how to split a document into sentences using a text splitter
type TextSplitterSpec struct {
	// The type of text splitter. When a specification for a text splitter is provided, this field
	// may be omitted. When not provided, the defaults for the type of node parser will be used
	Type *TextSplitterType `json:"type,omitempty" protobuf:"bytes,3,opt,name=type"`
	// Sentence splits the document by sentence
	Sentence *SentenceSplitterSpec `json:"sentence,omitempty" protobuf:"bytes,1,opt,name=sentence"`
	// Token splits the document by tokens
	Token *TokenSplitterSpec `json:"token,omitempty" protobuf:"bytes,2,opt,name=token"`
	// Code splits code documents
	Code *CodeSplitterSpec `json:"code,omitempty" protobuf:"bytes,3,opt,name=code"`
}

// TokenSplitterSpec splits text documents by their tokens
type TokenSplitterSpec struct {
	// The chunk size, in tokens, for each chunk. When unspecified, default to 1024
	ChunkSize *int32 `json:"chunkSize,omitempty" protobuf:"bytes,1,opt,name=chunkSize"`
	// The amount of tokens that will be captured on each side of the node. When unspecified, default to 200
	ChunkOverlap *int32 `json:"chunkOverlap,omitempty" protobuf:"bytes,2,opt,name=chunkOverlap"`
	// The separator character for words. When unspecified, default to the space character
	WordSeparator *string `json:"wordSeparator,omitempty" protobuf:"bytes,3,opt,name=wordSeparator"`
}

// SentenceSplitterSpec splits text documents with a preference for complete sentences
type SentenceSplitterSpec struct {
	// The chunk size, in tokens, for each chunk. When unspecified, default to 1024
	ChunkSize *int32 `json:"chunkSize,omitempty" protobuf:"bytes,1,opt,name=chunkSize"`
	// The amount of tokens that will be captured on each side of the node. When unspecified, default to 200
	ChunkOverlap *int32 `json:"chunkOverlap,omitempty" protobuf:"bytes,2,opt,name=chunkOverlap"`
	// The separator character for words. When unspecified, default to the space character
	WordSeparator *string `json:"wordSeparator,omitempty" protobuf:"bytes,3,opt,name=wordSeparator"`
	// The separator character for paragraphs. When unspecified, default to newline
	ParagraphSeparator *string `json:"paragraphSeparator,omitempty" protobuf:"bytes,4,opt,name=paragraphSeparator"`
	// The function to split documents into sentences. When unspecified, default to the Punkt tokenizer
	Splitter *SentenceTokenizerSpec `json:"splitter,omitempty" protobuf:"bytes,5,opt,name=splitter"`
}

// CodeSplitterSpec splits code documents by their AST
type CodeSplitterSpec struct {
	// The language of the document(s). When set to `infer`, the language of the document
	// will be inferred using the name and extension of the original file. Documents that
	// cannot be parsed using the specified language will be skipped
	// +kubebuilder:validation:Required
	Language string `json:"language,omitempty" protobuf:"bytes,1,opt,name=language"`
	// The number of code lines in each chunk. When unspecified, default to 40
	ChunkLines *int32 `json:"chunkLines,omitempty" protobuf:"bytes,2,opt,name=chunkLines"`
	// The amount of code lines that will be captured on each side of the node. When unspecified, default to 15
	ChunkLinesOverlap *int32 `json:"chunkLinesOverlap,omitempty" protobuf:"bytes,3,opt,name=chunkLinesOverlap"`
	// The maximum amount of characters in each chunk. When unspecified, default to 1500
	MaxChars *int32 `json:"maxChars,omitempty" protobuf:"bytes,4,opt,name=maxChars"`
}

// SentenceTokenizerSpec specifies a function to split text into sentences
type SentenceTokenizerSpec struct {
	Type SentenceTokenizerType `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// The separator character or regex pattern, required when the tokenizer type is `regex` or `separator`
	Separator *string `json:"separator,omitempty" protobuf:"bytes,2,opt,name=separator"`
}

// DocumentSpec defines the specification of a single document
type DocumentSpec struct {
	// The unique name of the document
	// +kubebuilder:validation:Required
	// +required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Description specifies an optional description for the document
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// Metadata contains user-specified metadata about the document
	Metadata map[string]string `json:"metadata,omitempty" protobuf:"bytes,3,opt,name=metadata"`
	// RefreshPeriod specifies the time, in seconds, at which the document must be refreshed
	// If unspecified or zero, the document will be refreshed on each sync.
	// When set to -1, the document will only refresh once
	RefreshPeriod *int32 `json:"refreshPeriod,omitempty" protobuf:"bytes,4,opt,name=refreshPeriod"`
	// NodeParser specifies document-specific options for breaking up the document into nodes
	NodeParser *NodeParserSpec `json:"nodeParser,omitempty" protobuf:"bytes,5,opt,name=nodeParser"`
	// EmbeddingModel specifies a document-specific embedding model
	EmbeddingModel *ModelSpec `json:"embeddingModel,omitempty" protobuf:"bytes,6,opt,name=embeddingModel"`
	// File specifies the configuration to read text from a file
	File *FileReaderSpec `json:"file,omitempty" protobuf:"bytes,7,opt,name=file"`
	// Database specifies the configuration to read text from a database query
	Database *DatabaseReaderSpec `json:"database,omitempty" protobuf:"bytes,8,opt,name=database"`
	// Web specifies the configuration to read text from an external web-based source
	Web *WebReaderSpec `json:"web,omitempty" protobuf:"bytes,9,opt,name=web"`
}

type FileReaderSpec struct {
	// The type of file reader
	Type FileReaderType `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// The location of the file
	Location v1alpha1.FileLocation `json:"location,omitempty" protobuf:"bytes,2,opt,name=location"`
	// Reader-specific options
	Options map[string]string `json:"options,omitempty" protobuf:"bytes,3,opt,name=options"`
}

type DatabaseReaderSpec struct {
	// The type of database reader
	Type DatabaseReaderType `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// The name of the connection to the database
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,2,opt,name=connectionName"`
	// The query to execute on the database
	Query string `json:"query,omitempty" protobuf:"bytes,3,opt,name=query"`
	// Reader-specific options
	Options map[string]string `json:"options,omitempty" protobuf:"bytes,4,opt,name=options"`
}

type WebReaderSpec struct {
	// The type of web reader
	Type FileReaderType `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// The name of the connection that provides authorization details to the reader, if applicable
	ConnectionName *string `json:"connectionName,omitempty" protobuf:"bytes,2,opt,name=connectionName"`
	// Reader-specific options
	Options map[string]string `json:"options,omitempty" protobuf:"bytes,3,opt,name=options"`
}

type DocumentStatus struct {
	// The unique name of the document
	// +kubebuilder:validation:Required
	// +required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The unique ID of the document (generated internally)
	UID string `json:"uid,omitempty" protobuf:"bytes,2,opt,name=uid"`
	// The number of nodes created for the document
	Nodes int32 `json:"nodes,omitempty" protobuf:"varint,3,opt,name=nodes"`
	// The time at which the document was last refreshed
	LastRefreshAt *metav1.Time `json:"lastRefreshAt,omitempty" protobuf:"bytes,4,opt,name=lastRefreshAt"`
}

type KnowledgeBaseStatus struct {
	// ObservedGeneration specifies the last generation that was reconciled
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// LastRefreshAt specifies the time at which the last refresh job was executed
	LastRefreshAt *metav1.Time `json:"lastRefreshAt,omitempty" protobuf:"bytes,2,opt,name=lastRefreshAt"`
	// Documents contains the collection of statuses for each document defined by the Knowledge Base.
	// In the case that a metadata database is defined, the collection will be empty
	Documents []DocumentStatus `json:"documents,omitempty" protobuf:"bytes,3,opt,name=documents"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,4,opt,name=updatedAt"`
	// +kubebuilder:validation:Optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,5,rep,name=conditions"`
}
