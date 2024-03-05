package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type (
	FileReaderType        string
	DatabaseReaderType    string
	WebReaderType         string
	RepositoryReaderType  string
	NodeParserType        string
	SentenceTokenizerType string
	TextSplitterType      string
)

const (
	DefaultFileReaderType    FileReaderType = "default"
	FlatFileReaderType       FileReaderType = "flat"
	PDFFileReaderType        FileReaderType = "pdf"
	DocxFileReaderType       FileReaderType = "docx"
	PowerPointFileReaderType FileReaderType = "powerpoint"
	AudioFileReaderType      FileReaderType = "audio"
	CSVFileReaderType        FileReaderType = "csv"
	EpubFileReaderType       FileReaderType = "epub"
	MarkdownFileReaderType   FileReaderType = "markdown"
	NotebookFileReaderType   FileReaderType = "notebook"
	JSONFileReaderType       FileReaderType = "json"

	SQLDatabaseReaderType   DatabaseReaderType = "sql"
	MongoDatabaseReaderType DatabaseReaderType = "mongo"

	GoogleSheetsWebReaderType WebReaderType = "google-sheets"

	GithubRepositoryReaderType RepositoryReaderType = "github"
	S3RepositoryReaderType     RepositoryReaderType = "s3"

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

type KnowledgeBaseConditionType string

const (
	KnowledgeBaseSaved     KnowledgeBaseConditionType = "Saved"
	KnowledgeBaseRefreshed KnowledgeBaseConditionType = "Refreshed"
)

const (
	RefreshingReason = "Refreshing"
)

// +k8s:openapi-gen=true
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=knowledgebases,singular=knowledgebase,shortName=kb,categories={genai,modela}
// +kubebuilder:object:root=true
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Last Sync",type="date",JSONPath=".status.lastSyncAt",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// KnowledgeBase represents a collection of documents that are stored in one or more indexes
type KnowledgeBase struct {
	metav1.TypeMeta `json:",inline"`
	// +k8s:openapi-gen=false
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              KnowledgeBaseSpec   `json:"spec,omitempty" protobuf:"bytes,2,opt,name=spec"`
	Status            KnowledgeBaseStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// KnowledgeBaseList contains a list of KnowledgeBases
type KnowledgeBaseList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []KnowledgeBase `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// +k8s:openapi-gen=true
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
	RefreshSchedule *catalog.RunSchedule `json:"refreshSchedule,omitempty" protobuf:"bytes,3,opt,name=refreshSchedule"`
	// The name of the Virtual Bucket where artifacts generated by the Knowledge Base will be stored.
	// If empty, default to the Data Product's default artifact bucket
	// +kubebuilder:validation:Optional
	ArtifactBucketName *string `json:"artifactBucketName,omitempty" protobuf:"bytes,4,opt,name=artifactBucketName"`
	// The name of the Lab under which Jobs created by the Knowledge Base will be executed.
	// If empty, default to the Data Product's default Lab
	// +kubebuilder:validation:Optional
	LabName *string `json:"labName,omitempty" protobuf:"bytes,5,opt,name=labName"`
	// Resources specifies the resource requirements that will be allocated for refresh jobs
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,6,opt,name=resources"`
	// MetadataDatabaseConnectionName specifies a connection to a database used to store document metadata and statuses.
	// When specified, any document metadata specified by Documents will be cleared and migrated to the table
	MetadataDatabaseConnectionName *string `json:"metadataDatabaseConnectionName,omitempty" protobuf:"bytes,7,opt,name=metadataDatabaseConnectionName"`
	// DocumentStoreConnectionName specifies the name of a Connection resource to use as a document store
	DocumentStoreConnectionName string `json:"documentStoreConnectionName,omitempty" protobuf:"bytes,9,opt,name=documentStoreConnectionName"`
	// Indexes specifies the collection of indexes that the documents will be added to
	Indexes []IndexSpec `json:"indexes,omitempty" protobuf:"bytes,10,opt,name=indexes"`
	// Documents specifies the collection of documents included in the Knowledge Base
	Documents []DocumentSpec `json:"documents,omitempty" protobuf:"bytes,11,opt,name=documents"`
	// NodeParser defines the collection of node parsers available to documents prior to indexing.
	// The node parsers define how to split up documents into individual chunks of text.
	// If empty, the default node parser will be used
	NodeParsers []NodeParserSpec `json:"nodeParsers,omitempty" protobuf:"bytes,12,opt,name=nodeParsers"`
	// DefaultNodeParser specifies the name of the default node parser to use.
	// If unspecified, the first node parser defined in NodeParsers will be used
	DefaultNodeParser *string `json:"defaultNodeParser,omitempty" protobuf:"bytes,13,opt,name=defaultNodeParser"`
}

// VectorIndexSpec specifies the configuration for a vector store index
type VectorIndexSpec struct {
	// DatabaseConnectionName specifies the name of a Connection resource that provides a vector database
	DatabaseConnectionName string `json:"databaseConnectionName,omitempty" protobuf:"bytes,1,opt,name=databaseConnectionName"`
	// EmbeddingModel specifies the embedding model to use when ingesting documents
	EmbeddingModel ModelSpec `json:"embeddingModel,omitempty" protobuf:"bytes,2,opt,name=embeddingModel"`
}

// DocumentSummaryIndexSpec specifies the configuration for a document summary index
type DocumentSummaryIndexSpec struct {
	// The response synthesizer to use when summarizing documents
	ResponseSynthesizer ResponseSynthesizerSpec `json:"responseSynthesizer,omitempty" protobuf:"bytes,1,opt,name=responseSynthesizer"`
	// The configuration to optionally embed summarized documents
	Embedding *VectorIndexSpec `json:"embedding,omitempty" protobuf:"bytes,2,opt,name=embedding"`
}

// IndexSpec specifies the configuration for a document index
type IndexSpec struct {
	// Name specifies the name of the index
	// +kubebuilder:validation:Required
	// +required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Vector stores documents with vector embeddings
	Vector *VectorIndexSpec `json:"vector,omitempty" protobuf:"bytes,2,opt,name=vector"`
	// DocumentSummary stores documents by their summaries
	DocumentSummary *DocumentSummaryIndexSpec `json:"documentSummary,omitempty" protobuf:"bytes,3,opt,name=documentSummary"`
}

// NodeParserSpec defines how to break up a document into individual chunks of text
type NodeParserSpec struct {
	// The name of the node parser
	// +kubebuilder:validation:Required
	// +required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Indicate if previous/next relationships should be included between nodes. When unspecified, default to true
	IncludeOrderRelationship *bool `json:"includeOrderRelationship,omitempty" protobuf:"bytes,2,opt,name=includeOrderRelationship"`
	// Indicate if metadata should be included in the nodes. When unspecified, default to true
	IncludeMetadata *bool `json:"includeMetadata,omitempty" protobuf:"bytes,3,opt,name=includeMetadata"`
	// The type of node parser. When a specification for a text or sentence window node parser is provided, this field
	// may be omitted. When not provided, the defaults for the specified node parser type will be used.
	// When unspecified, default to sentence window
	Type *NodeParserType `json:"type,omitempty" protobuf:"bytes,4,opt,name=type"`
	// The specification for the text splitter to use as a node parser
	Text *TextSplitterSpec `json:"text,omitempty" protobuf:"bytes,5,opt,name=text"`
	// The specification for the sentence window node parser
	Sentence *SentenceWindowNodeParserSpec `json:"sentence,omitempty" protobuf:"bytes,6,opt,name=sentence"`
	// The specification for a mixed node parser, which will change depending on the document being processed
	Mixed *MixedNodeParserSpec `json:"mixed,omitempty" protobuf:"bytes,7,opt,name=mixed"`
}

type ExtensionFilter struct {
	// File extensions to include
	Include []string `json:"include,omitempty" protobuf:"bytes,1,opt,name=include"`
	// File extensions to exclude. All extensions excluding the collection will be matched
	Exclude []string `json:"exclude,omitempty" protobuf:"bytes,2,opt,name=exclude"`
}

type LengthFilter struct {
	// Match if the document length is greater than the specified value
	GreaterThan uint32 `json:"greaterThan,omitempty" protobuf:"varint,1,opt,name=greaterThan"`
	// Match if the document length is less than the specified value
	LessThan uint32 `json:"lessThan,omitempty" protobuf:"varint,2,opt,name=lessThan"`
}

type NameFilter struct {
	// Match documents whose name contains the specified string
	Contains *string `json:"contains,omitempty" protobuf:"bytes,1,opt,name=contains"`
	// Match documents whose name equals the specified string
	Equals *string `json:"equals,omitempty" protobuf:"bytes,2,opt,name=equals"`
}

// FilteredNodeParser specifies a node parser and optional filters
type FilteredNodeParser struct {
	// Filter documents by their file extension
	Extension *ExtensionFilter `json:"extension,omitempty" protobuf:"bytes,1,opt,name=extension"`
	// Filter documents by their length
	Length *LengthFilter `json:"length,omitempty" protobuf:"bytes,2,opt,name=length"`
	// Filter documents by their name
	Name *NameFilter `json:"name,omitempty" protobuf:"bytes,3,opt,name=name"`
	// Filter documents by their metadata
	Metadata map[string]string `json:"metadata,omitempty" protobuf:"bytes,4,opt,name=metadata"`
	// The name of the node parser to use
	NodeParser string `json:"nodeParser,omitempty" protobuf:"bytes,5,opt,name=nodeParser"`
}

// MixedNodeParserSpec defines a node parser that changes based on the document being parsed
type MixedNodeParserSpec struct {
	// The collection of filtered node parsers, with each containing one or more filters and a parser definition.
	// Each parser is matched sequentially in the order that they are listed
	Parsers []FilteredNodeParser `json:"parsers,omitempty" protobuf:"bytes,1,opt,name=parsers"`
	// The node parser to use for documents that are not matched to any of the parsers specified in Parsers
	FallbackNodeParser *string `json:"fallbackNodeParser,omitempty" protobuf:"bytes,2,opt,name=fallbackNodeParser"`
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
	// may be omitted. When not provided, the defaults for the specified text splitter type will be used.
	// When unspecified, default to the sentence splitter
	Type *TextSplitterType `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// Sentence splits the document by sentence
	Sentence *SentenceSplitterSpec `json:"sentence,omitempty" protobuf:"bytes,2,opt,name=sentence"`
	// Token splits the document by tokens
	Token *TokenSplitterSpec `json:"token,omitempty" protobuf:"bytes,3,opt,name=token"`
	// Code splits code documents
	Code *CodeSplitterSpec `json:"code,omitempty" protobuf:"bytes,4,opt,name=code"`
}

// HierarchicalSplitterSpec defines how to split text documents into a recursive hierarchy of nodes
type HierarchicalSplitterSpec struct {
	// Indicates if hierarchical splitting is enabled
	Enabled bool `json:"enabled" protobuf:"varint,1,opt,name=enabled"`
	// The chunk sizes for each level in the hierarchy. When unspecified, default to 2048, 512, and 128
	ChunkSizes []int `json:"chunkSizes,omitempty" protobuf:"bytes,4,opt,name=chunkSizes"`
}

// TokenSplitterSpec splits text documents by their tokens
type TokenSplitterSpec struct {
	// The chunk size, in tokens, for each chunk. When unspecified, default to 1024
	ChunkSize *int32 `json:"chunkSize,omitempty" protobuf:"bytes,1,opt,name=chunkSize"`
	// The amount of tokens that will be captured on each side of the node. When unspecified, default to 200
	ChunkOverlap *int32 `json:"chunkOverlap,omitempty" protobuf:"bytes,2,opt,name=chunkOverlap"`
	// The separator character for words. When unspecified, default to the space character
	WordSeparator *string `json:"wordSeparator,omitempty" protobuf:"bytes,3,opt,name=wordSeparator"`
	// The configuration for hierarchical splitting. When unspecified, hierarchical splitting is disabled
	Hierarchical *HierarchicalSplitterSpec `json:"hierarchical,omitempty" protobuf:"bytes,4,opt,name=hierarchical"`
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
	// The configuration for hierarchical splitting. When unspecified, hierarchical splitting is disabled
	Hierarchical *HierarchicalSplitterSpec `json:"hierarchical,omitempty" protobuf:"bytes,6,opt,name=hierarchical"`
}

// CodeSplitterSpec splits code documents by their syntax trees
type CodeSplitterSpec struct {
	// The language of the document(s). When set to `infer`, the language of the document
	// will be inferred using the extension of the original file. Documents that
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

// SentenceTokenizerSpec defines a function to split text into sentences
type SentenceTokenizerSpec struct {
	Type SentenceTokenizerType `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// The separator character or regex pattern, required when the tokenizer type is `regex` or `separator`
	Separator *string `json:"separator,omitempty" protobuf:"bytes,2,opt,name=separator"`
}

// DocumentSpec defines the specification of a single document
type DocumentSpec struct {
	// The unique name of the document
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Description specifies an optional description for the document
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// Metadata contains user-specified metadata about the document
	Metadata map[string]string `json:"metadata,omitempty" protobuf:"bytes,3,opt,name=metadata"`
	// RefreshPeriod specifies the period, in seconds, at which the document must be refreshed
	// If unspecified or zero, the document will be refreshed on each sync.
	// When set to -1, the document will only refresh once
	RefreshPeriod *int32 `json:"refreshPeriod,omitempty" protobuf:"bytes,4,opt,name=refreshPeriod"`
	// Indexes specifies the collection of indexes that the document will be added to.
	// If empty, the document will be added to all indexes defined by the Knowledge Base
	Indexes []string `json:"indexes,omitempty" protobuf:"bytes,5,opt,name=indexes"`
	// NodeParser specifies the name of the document-specific node parser to use
	NodeParser *string `json:"nodeParser,omitempty" protobuf:"bytes,6,opt,name=nodeParser"`
	// EmbeddingModel specifies a document-specific embedding model
	EmbeddingModel *ModelSpec `json:"embeddingModel,omitempty" protobuf:"bytes,7,opt,name=embeddingModel"`
	// File specifies the configuration to read text from an external file
	File *FileLocationReaderSpec `json:"file,omitempty" protobuf:"bytes,8,opt,name=file"`
	// Database specifies the configuration to read text from a database query
	Database *DatabaseReaderSpec `json:"database,omitempty" protobuf:"bytes,9,opt,name=database"`
	// Web specifies the configuration to read text from an external web-based source
	Web *WebReaderSpec `json:"web,omitempty" protobuf:"bytes,10,opt,name=web"`
	// Repository specifies the configuration to read many files from a repository,
	Repository *RepositoryReaderSpec `json:"repository,omitempty" protobuf:"bytes,11,opt,name=repository"`
}

type FileReaderSpec struct {
	// The type of file reader
	// +kubebuilder:default:="default"
	Type FileReaderType `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// Reader-specific options
	Options map[string]string `json:"options,omitempty" protobuf:"bytes,4,opt,name=options"`
}

type FileLocationReaderSpec struct {
	FileReaderSpec `json:",inline" protobuf:"bytes,4,opt,name=fileReaderSpec"`
	// The location of the file
	Location *catalog.FileLocation `json:"location,omitempty" protobuf:"bytes,2,opt,name=location"`
	// The URL to download the file
	Url *string `json:"url,omitempty" protobuf:"bytes,3,opt,name=url"`
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

type RepositoryFileReader struct {
	// The file extension supported by the reader. Only one of Extension or Extensions may be specified
	Extension *string `json:"extension,omitempty" protobuf:"bytes,1,opt,name=extension"`
	// The collection of extensions supported by the reader
	//+kubebuilder:validation:Optional
	Extensions []string `json:"extensions,omitempty" protobuf:"bytes,2,opt,name=extensions"`
	// The file reader to use for the specified extensions
	Reader FileReaderSpec `json:"reader,omitempty" protobuf:"bytes,3,opt,name=reader"`
}

type RepositoryReaderSpec struct {
	// The type of repository reader
	Type RepositoryReaderType `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// The name of the connection that provides authorization details for the repository
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,2,opt,name=connectionName"`
	// The collection of supported file extensions to read. File extensions supported by Modela will
	// automatically be read by their supported reader, if not already mapped to a reader in Readers.
	// Unsupported extensions will be read as plain-text
	Extensions []string `json:"extensions,omitempty" protobuf:"bytes,3,opt,name=extensions"`
	// The readers to use for individual file extensions
	//+kubebuilder:validation:Optional
	Readers []RepositoryFileReader `json:"readers,omitempty" protobuf:"bytes,4,opt,name=readers"`
	// Reader-specific options
	Options map[string]string `json:"options,omitempty" protobuf:"bytes,5,opt,name=options"`
}

type DocumentStatus struct {
	// The unique name of the document
	// +kubebuilder:validation:Required
	// +required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The number of nodes created for the document
	Nodes int32 `json:"nodes,omitempty" protobuf:"varint,2,opt,name=nodes"`
	// The last error that occurred while processing the document
	LastError *string `json:"lastError,omitempty" protobuf:"bytes,3,opt,name=lastError"`
	// Indicates if the document is manually flagged for refresh
	Flagged *bool `json:"flagged,omitempty" protobuf:"bytes,4,opt,name=flagged"`
	// The time at which the document was last refreshed
	LastRefreshAt *metav1.Time `json:"lastRefreshAt,omitempty" protobuf:"bytes,5,opt,name=lastRefreshAt"`
}

type KnowledgeBaseStatus struct {
	// ObservedGeneration specifies the last generation that was reconciled
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// LastRefreshAt specifies the time at which the last refresh job was executed
	LastRefreshAt *metav1.Time `json:"lastRefreshAt,omitempty" protobuf:"bytes,2,opt,name=lastRefreshAt"`
	// LastCompletionAt specifies the time at which the last refresh job was completed
	LastCompletionAt *metav1.Time `json:"lastCompletionAt,omitempty" protobuf:"bytes,3,opt,name=lastCompletionAt"`
	// Logs contains the location of the logs produced by the last refresh job
	// +kubebuilder:validation:Optional
	Logs catalog.Logs `json:"logs" protobuf:"bytes,4,opt,name=logs"`
	// Documents contains the collection of statuses for each document defined by the Knowledge Base.
	// In the case that a metadata database is defined, the collection will be empty
	Documents []DocumentStatus `json:"documents,omitempty" protobuf:"bytes,5,opt,name=documents"`
	// The last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,6,opt,name=updatedAt"`
	// +kubebuilder:validation:Optional
	// +patchMergeKey=type
	// +patchStrategy=merge
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,7,rep,name=conditions"`
}
