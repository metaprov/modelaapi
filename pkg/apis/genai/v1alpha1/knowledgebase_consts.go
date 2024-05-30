package v1alpha1

type FileReaderType string

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
)

type DatabaseReaderType string

const (
	SQLDatabaseReaderType   DatabaseReaderType = "sql"
	MongoDatabaseReaderType DatabaseReaderType = "mongo"
)

type WebReaderType string

const (
	GoogleSheetsWebReaderType WebReaderType = "google-sheets"
)

type RepositoryReaderType string

const (
	GithubRepositoryReaderType RepositoryReaderType = "github"
	S3RepositoryReaderType     RepositoryReaderType = "s3"
)

type NodeParserType string

const (
	HTMLNodeParserType           NodeParserType = "html"
	JSONNodeParserType           NodeParserType = "json"
	MarkdownNodeParserType       NodeParserType = "markdown"
	TextSplitterNodeParserType   NodeParserType = "text-splitter"
	SentenceWindowNodeParserType NodeParserType = "sentence-window"
)

type TextSplitterType string

const (
	SentenceTextSplitterType TextSplitterType = "sentence"
	TokenTextSplitterType    TextSplitterType = "token"
	CodeTextSplitterType     TextSplitterType = "code"
)

type SentenceTokenizerType string

const (
	PunktSentenceTokenizerType     SentenceTokenizerType = "punkt"
	SeparatorSentenceTokenizerType SentenceTokenizerType = "separator"
	RegexSentenceTokenizerType     SentenceTokenizerType = "regex"
	PhraseSentenceTokenizerType    SentenceTokenizerType = "phrase"
)

type KeywordTableIndexMode string

const (
	LLMKeywordTableIndexMode    KeywordTableIndexMode = "llm"
	RAKEKeywordTableIndexMode   KeywordTableIndexMode = "rake"
	SimpleKeywordTableIndexMode KeywordTableIndexMode = "simple"
)
