package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

const (
	MultiDatasetSameNumberOfRows      catalog.AssertionType = "multi-dataset-same-number-of-rows"
	MultiDatasetOuterJoinEmpty        catalog.AssertionType = "multi-dataset-outer-join-empty"
	MultiDatasetOuterJoinNotEmpty     catalog.AssertionType = "multi-dataset-outer-join-not-empty"
	MultiDatasetInnerJoinEmpty        catalog.AssertionType = "multi-dataset-inner-join-empty"
	MultiDatasetInnerJoinNotEmpty     catalog.AssertionType = "multi-dataset-inner-join-not-empty"
	MultiDatasetLeftJoinEmpty         catalog.AssertionType = "multi-dataset-left-join-empty"
	MultiDatasetLeftJoinNotEmpty      catalog.AssertionType = "multi-dataset-left-join-not-empty"
	MultiDatasetRightJoinEmpty        catalog.AssertionType = "multi-dataset-right-join-empty"
	MultiDatasetRightJoinNotEmpty     catalog.AssertionType = "multi-dataset-right-join-not-empty"
	DatasetColumnsCountEqual          catalog.AssertionType = "dataset-columns-count-equal"
	DatasetColumnsNameInSet           catalog.AssertionType = "dataset-columns-in-set"
	DatasetColumnsInOrderedList       catalog.AssertionType = "dataset-columns-in-ordered-list"
	DatasetRowCountBetween            catalog.AssertionType = "dataset-row-count-between"
	DatasetNotEmpty                   catalog.AssertionType = "dataset-dataset-not-empty"
	DatasetTestNameNameEmpty          catalog.AssertionType = "dataset-empty"
	MultiColumnCorr                   catalog.AssertionType = "multi-column-corr"
	ColumnTestNameColumnExist         catalog.AssertionType = "column-exist"
	ColumnHaveValues                  catalog.AssertionType = "column-have-values"
	ColumnHasNoValue                  catalog.AssertionType = "column-has-no-values"
	ColumnHaveNulls                   catalog.AssertionType = "column-value-have-nulls"
	ColumnHasNoNull                   catalog.AssertionType = "column-value-has-no-nulls"
	ColumnOfType                      catalog.AssertionType = "column-of-type"
	ColumnValuesInSet                 catalog.AssertionType = "column-values-in-set"
	ColumnValuesIncreasing            catalog.AssertionType = "column-values-increasing"
	ColumnsValuesDecreasing           catalog.AssertionType = "column-values-decreasing"
	ColumnValueLengthBetween          catalog.AssertionType = "column-value-length-between"
	ColumnValueNameMatchRegex         catalog.AssertionType = "column-value-match-regex"
	ColumnValueIsDate                 catalog.AssertionType = "column-value-is-date"
	ColumnValueIsJson                 catalog.AssertionType = "column-value-is-json"
	ColumnValueInDomain               catalog.AssertionType = "column-value-in-domain"
	ColumnUniqueValueCountBetween     catalog.AssertionType = "column-unique-value-count-between"
	ColumnOutlierValueUniqueBetween   catalog.AssertionType = "column-outlier-value-count-between"
	ColumnValidValueUniqueBetween     catalog.AssertionType = "column-valid-values-count-between"
	ColumnMismatchValueBetween        catalog.AssertionType = "column-mismatch-values-between"
	ColumnValueMinBetween             catalog.AssertionType = "column-value-min-between"
	ColumnValueLowerQuartileBetween   catalog.AssertionType = "column-value-lower-quartile-between"
	ColumnValueMedianBetween          catalog.AssertionType = "column-value-median-between"
	ColumnValueAvgBetween             catalog.AssertionType = "column-value-average-between"
	ColumnValueUpperQuartileBetween   catalog.AssertionType = "column-value-upper-quartile-between"
	ColumnValueMaxBetween             catalog.AssertionType = "column-value-max-between"
	ColumnValueStddevBetween          catalog.AssertionType = "column-value-stddev-between"
	ColumnValueChiSquarePValueBetween catalog.AssertionType = "column-value-chi-square-p-value-between"
	ColumnValuePairCramersBetween     catalog.AssertionType = "column-value-pair-cramers-between"
	FileSizeBetween                   catalog.AssertionType = "file-size-between"
	FileExist                         catalog.AssertionType = "file-exist"
	FileRegexMatchCountBetween        catalog.AssertionType = "file-regex-match-count-between"
	FileValidJson                     catalog.AssertionType = "file-valid-json"
	FileValidCsv                      catalog.AssertionType = "file-valid-csv"
)

// Condition on the dataset
type DataSourceConditionType string

/// Datastore Condition
const (
	// Regular state of the store.
	DatasourceReady DataSourceConditionType = "Ready"
	DatasourceSaved DataSourceConditionType = "Saved"
)

// DataSourceCondition describes the state of a DataSource at a certain point
type DataSourceCondition struct {
	// Type of condition.
	Type DataSourceConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=DataSourceConditionType"`
	// Status of the condition, one of True, False, or Unknown
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// +kubebuilder:validation:Enum="double-quote";"single-quote";
type QuoteChar string

const (
	SingleQuote QuoteChar = "single-quote"
	DoubleQuote QuoteChar = "double-quote"
)

// +kubebuilder:validation:Enum="single-quote";"double-quote";"tilda";"none"
type EscapeChar string

const (
	SingleEscapeChar EscapeChar = "single-quote"
	DoubleEscapeChar EscapeChar = "double-quote"
	TildaEscapeChar  EscapeChar = "tilda"
	NoneEscapeChar   EscapeChar = "none"
)

// Delimiter specify char or group of char
// +kubebuilder:validation:Enum="crlf";"cr";"lf";"semicolon";"colon";"comma";"tab";"space";"pipe"
type Delimiter string

const (
	DelimiterCRLF      Delimiter = "crlf"
	DelimiterCR        Delimiter = "cr"
	DelimiterLF        Delimiter = "lf"
	DelimiterSemicolon Delimiter = "semicolon"
	DelimiterColon     Delimiter = "colon"
	DelimiterComma     Delimiter = "comma"
	DelimiterTab       Delimiter = "tab"
	DelimiterSpace     Delimiter = "space"
	DelimiterPipe      Delimiter = "pipe"
)

// FlatFileType represent the type of the file
// +kubebuilder:validation:Enum="csv";"tsv";"excel";"fwf";"hdf";"html";"json";"pickle";"sas";"stata";"feather";"parquet";
type FlatFileType string

const (
	FlatFileTypeCsv     FlatFileType = "csv"
	FlatFileTypeTable   FlatFileType = "tsv"
	FlatFileTypeExcel   FlatFileType = "excel"
	FlatFileTypeFwf     FlatFileType = "fwf"
	FlatFileTypeHdf5    FlatFileType = "hdf"
	FlatFileTypeHtml    FlatFileType = "html"
	FlatFileTypeJson    FlatFileType = "json"
	FlatFileTypePickle  FlatFileType = "pickle"
	FlatFileTypeSas     FlatFileType = "sas"
	FlatFileTypeStata   FlatFileType = "stata"
	FlatFileTypeFeather FlatFileType = "feather"
	FlatFileTypeParquet FlatFileType = "parquet"
)

// DatabaseServerType is the type of the database server
// +kubebuilder:validation:Enum="sqlserver";"mysql";"postgress";"sqlite";"oracle";"presto";"redshift";"apache-hive";"snowflake";"sybase";"vertica";"cockroach-db";"elasticsearch";"informix";"sap-hana";"teradata";"gcp-spanner";"apache-spark";"clickhouse";"greenplum";"couchbase";"exasol"
type DatabaseServerType string

const (
	MsSqlServer    DatabaseServerType = "sqlserver"
	MySql          DatabaseServerType = "mysql"
	Postgres       DatabaseServerType = "postgres"
	SqlLite        DatabaseServerType = "sqlite"
	Oracle         DatabaseServerType = "oracle"
	Presto         DatabaseServerType = "presto"
	AmazonRedShift DatabaseServerType = "redshift"
	ApacheHive     DatabaseServerType = "apache-hive"
	Snowflake      DatabaseServerType = "snowflake"
	Sybase         DatabaseServerType = "sybase"
	Vertica        DatabaseServerType = "vertica"
	CockroachDB    DatabaseServerType = "cockroach-db"
	ElasticSearch  DatabaseServerType = "elasticsearch"
	Informix       DatabaseServerType = "informix"
	SAPHana        DatabaseServerType = "sap-hana"
	Teradata       DatabaseServerType = "teradata"
	GcpSpanner     DatabaseServerType = "gcp-spanner"
	ApacheSpark    DatabaseServerType = "apache-spark"
	ClickHouse     DatabaseServerType = "clickhouse"
	GreenPlum      DatabaseServerType = "greenplum"
	Couchbase      DatabaseServerType = "couchbase"
	Exasol         DatabaseServerType = "exasol"
)

// ParquetFileSpec specifies the format of a CSV (comma-separated values) file
type ParquetFileSpec struct {
	// The character used to separate fields (by default, a comma)
	// +kubebuilder:default:="auto"
	// +kubebuilder:validation:Optional
	Engine *string `json:"engine,omitempty" protobuf:"bytes,1,opt,name=engine"`
}

// CsvFileSpec specifies the format of a CSV (comma-separated values) file
type CsvFileSpec struct {
	// The character used to separate fields (by default, a comma)
	// +kubebuilder:default:="comma"
	// +kubebuilder:validation:Optional
	ColumnDelimiter *Delimiter `json:"columnDelimiter,omitempty" protobuf:"bytes,1,opt,name=columnDelimiter"`
	// The character used to signal the end of a row (by default, a newline \n)
	// +kubebuilder:default:="crlf"
	// +kubebuilder:validation:Optional
	RowDelimiter *Delimiter `json:"rowDelimiter,omitempty" protobuf:"bytes,2,opt,name=rowDelimiter"`
	// The charcter used for quotes (by default, a double quote ")
	// +kubebuilder:default:="double-quote"
	// +kubebuilder:validation:Optional
	QuoteChar QuoteChar `json:"quote,omitempty" protobuf:"bytes,3,opt,name=quote"`
	// The character used to escape the delimiter
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	EscapeChar EscapeChar `json:"escapeChar,omitempty" protobuf:"bytes,4,opt,name=escapeChar"`
	// The comment character used to split comments off the end of lines (by default, a hashtag #)
	// +kubebuilder:default:="#"
	// +kubebuilder:validation:Optional
	CommentChars *string `json:"commentChars,omitempty" protobuf:"bytes,5,opt,name=commentChars"`
	// Indicates if a header is present in the file
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Header *bool `json:"header,omitempty" protobuf:"varint,6,opt,name=header"`
	// The number of rows to skip from the top of the file
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	SkipRows *int32 `json:"skipRows,omitempty" protobuf:"varint,7,opt,name=skipRows"`
	// NullValues is a sequence of values to replace with NA.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	NullValues *string `json:"nullValues,omitempty" protobuf:"bytes,8,opt,name=nullValues"`
	// The unicode encoding of the file (e.g. 'utf-8' for UTF-8 encoded text)
	// +kubebuilder:default:="utf-8"
	// +kubebuilder:validation:Optional
	Encoding *catalog.FileEncoding `json:"encoding,omitempty" protobuf:"bytes,9,opt,name=encoding"`
	// The maximum number of rows to read
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxRows *int32 `json:"maxRows,omitempty" protobuf:"varint,10,opt,name=maxRows"`
	// Indicates if the read of the CSV file should fail if there are any errors
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Strict *bool `json:"strict,omitempty" protobuf:"varint,11,opt,name=strict"`
	// The compression type, if the file is compressed
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	Compression *string `json:"compression,omitempty" protobuf:"bytes,12,opt,name=compression"`
	// Indicates if the file contains an index column
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	HasIndexColumn *bool `json:"hasIndexColumn,omitempty" protobuf:"varint,13,opt,name=hasIndexColumn"`
	// The position of the index column
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	IndexColumn *int32 `json:"indexColumn,omitempty" protobuf:"varint,14,opt,name=indexColumn"`
}

// ExcelNotebookSpec specifies the format of an excel file
type ExcelNotebookSpec struct {
	// Indicates if the excel reader should use the first sheet that contains data
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	FirstSheetWithData *bool `json:"firstSheetWithData,omitempty" protobuf:"varint,1,opt,name=firstSheetWithData"`
	// The name of the sheet that exists in the excel file to read data from
	// +kubebuilder:validation:Optional
	SheetName *string `json:"sheetName,omitempty" protobuf:"bytes,2,opt,name=sheetName"`
	// The index of the sheet in the excel file to read data from
	// +kubebuilder:validation:Optional
	SheetIndex *int32 `json:"sheetIndex,omitempty" protobuf:"varint,3,opt,name=sheetIndex"`
	// The position of the row that contains the column names (i.e. the header)
	// +kubebuilder:validation:Optional
	ColumnNamesRow *int32 `json:"columnNameRow,omitempty" protobuf:"varint,4,opt,name=columnNameRow"`
	// The specification for the bounds of the data
	// +kubebuilder:validation:Optional
	Data ExcelSheetArea `json:"data,omitempty" protobuf:"bytes,5,opt,name=data"`
}

// ExcelSheetArea specifies the bounds of the data within an excel sheet
type ExcelSheetArea struct {
	// Indicates if the excel reader should read the entire sheet; if false, it will read only within the bounds
	// specified by the `To` and `From` fields of the ExcelSheetArea
	// +kubebuilder:default:=false
	EntireSheet *bool `json:"entireSheet,omitempty" protobuf:"varint,1,opt,name=entireSheet"`
	// If reading part of the excel sheet, start with the column in this position
	FromColumn *int32 `json:"fromColumn,omitempty" protobuf:"varint,2,opt,name=fromColumn"`
	// If reading part of the excel sheet, end with the column in this position
	ToColumn *int32 `json:"toColumn,omitempty" protobuf:"varint,3,opt,name=toColumn"`
	// If reading part of the excel sheet, start with the row in this position
	FromRow *int32 `json:"fromRow,omitempty" protobuf:"varint,4,opt,name=fromRow"`
	// If reading part of the excel sheet, end with the row in this position
	ToRow *int32 `json:"toRow,omitempty" protobuf:"varint,5,opt,name=toRow"`
}

type TestSpec struct {
	// MultiDatasetTest contains validations for multiple datasets
	// +kubebuilder:validation:Optional
	MultiDatasetSuite catalog.TestSuite `json:"multiDatasetSuite,omitempty" protobuf:"bytes,1,rep,name=multiDatasetSuite"`
	// DatasetTests contains validations for the whole dataset
	// +kubebuilder:validation:Optional
	DatasetSuite catalog.TestSuite `json:"datasetSuite,omitempty" protobuf:"bytes,2,rep,name=datasetSuite"`
	// MultiColumnTests defines validations for multiple columns from the dataset
	// +kubebuilder:validation:Optional
	MultiColumnSuite catalog.TestSuite `json:"multiColumnSuite,omitempty" protobuf:"bytes,3,rep,name=multiColumnSuite"`
	// ColumnTests defines assertions for columns from the dataset
	// +kubebuilder:validation:Optional
	ColumnSuite catalog.TestSuite `json:"columnSuite,omitempty" protobuf:"bytes,4,rep,name=columnSuite"`
	// FileTests defines assertions for the contents of the data file
	// +kubebuilder:validation:Optional
	FileSuite catalog.TestSuite `json:"fileSuite,omitempty" protobuf:"bytes,5,rep,name=fileSuite"`
}

// Schema defines the column-level format and validation rules for data associated with a DataSource
type Schema struct {
	// The time-series schema, which sets time-series specific parameters
	// +kubebuilder:validation:Optional
	TimeSeriesSchema TimeSeriesSchema `json:"timeSeriesSchema,omitempty" protobuf:"bytes,1,opt,name=timeSeriesSchema"`
	// The recommendation schema, which is used for the recommendation ML task
	// +kubebuilder:validation:Optional
	RecommendationSchema RecommendationSchema `json:"recommendationSchema,omitempty" protobuf:"bytes,2,opt,name=recommendationSchema"`
	// The collection of columns and their attributes
	Columns []Column `json:"columns,omitempty" protobuf:"bytes,3,rep,name=columns"`
	// The specification for validation rules which will be performed on new Datasets
	Tests TestSpec `json:"tests,omitempty" protobuf:"bytes,4,opt,name=tests"`
}

type TimeSeriesSchema struct {
	// The time series frequency
	Freq catalog.Freq `json:"freq,omitempty" protobuf:"bytes,1,opt,name=freq"`
	// The holiday which should be taken into account
	Country *catalog.HolidayCountry `json:"country,omitempty" protobuf:"bytes,2,opt,name=country"`
}

type RecommendationSchema struct {
	// The name of the column that specifies user IDs (i.e. the primary key)
	// +kubebuilder:default:="user_id"
	// +kubebuilder:validation:Optional
	UserID *string `json:"userIDColumn,omitempty" protobuf:"bytes,1,opt,name=userIDColumn"`
	// The name of the column that specifies item IDs
	// +kubebuilder:default:="item_id"
	// +kubebuilder:validation:Optional
	ItemID *string `json:"itemIDColumn,omitempty" protobuf:"bytes,2,opt,name=itemIDColumn"`
	// The name of the column that specifies ratings
	// +kubebuilder:default:="rating"
	// +kubebuilder:validation:Optional
	Rating *string `json:"ratingColumn,omitempty" protobuf:"bytes,3,opt,name=ratingColumn"`
}

// Column specifies the attribute of a single column in a dataset. The fields of the Column align with the
// JSON schema standard; you can view detailed documentation at https://json-schema.org/draft/2020-12/json-schema-validation.html
type Column struct {
	// The name of the column
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:MinLength=1
	Name string `json:"name" protobuf:"bytes,1,opt,name=name"`
	// The display name of the column, which is used in reports and other visual elements. If omitted, it will use the raw name
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Optional
	DisplayName *string `json:"displayName,omitempty" protobuf:"bytes,2,opt,name=displayName"`
	// The data type of the feature (e.g. number, string, boolean, etc.)
	DataType catalog.DataType `json:"datatype" protobuf:"bytes,3,opt,name=datatype"`
	// The data domain of the feature, which constrains the contents of the feature to a specific set of values
	// +kubebuilder:validation:Optional
	Format *catalog.DataDomain `json:"format,omitempty" protobuf:"bytes,4,opt,name=format"`
	// The user-specified description of the feature
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,5,opt,name=description"`
	// Indicates if the feature should be ignored when building models
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Ignore *bool `json:"ignore,omitempty" protobuf:"varint,6,opt,name=ignore"`
	// Indicates if the feature is the target feature of the model, and the feature which predictions will be made on
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Target *bool `json:"target,omitempty" protobuf:"varint,7,opt,name=target"`
	// Indicates if the column can contain null values
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Nullable *bool `json:"nullable,omitempty" protobuf:"varint,8,opt,name=nullable"`
	// Denotes if the column specifies a primary key of a database table (i.e. a users ID)
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	PK *bool `json:"pk,omitempty" protobuf:"varint,9,opt,name=pk"`
	// Denotes if the column specifies a foreign key of another database table
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	FK *bool `json:"fk,omitempty" protobuf:"varint,10,opt,name=fk"`
	// The integer value which the values of the column should be a multiple of
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MultipleOf *int32 `json:"multipleOf,omitempty" protobuf:"varint,11,opt,name=multipleOf"`
	// The maximum value of values all values in the column
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Maximum *float64 `json:"maximum,omitempty" protobuf:"bytes,12,opt,name=maximum"`
	// The exclusive upper limit of all values in the column, which does not include the maximum value
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ExclusiveMaximum *bool `json:"exclusiveMaximum,omitempty" protobuf:"varint,13,opt,name=exclusiveMaximum"`
	// The minimum value of values all values in the column
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Minimum *float64 `json:"minimum,omitempty" protobuf:"bytes,14,opt,name=minimum"`
	// The exclusive lower limit of all values in the column, which does not include the minimum value
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ExclusiveMinimum *bool `json:"exclusiveMinimum,omitempty" protobuf:"varint,15,opt,name=exclusiveMinimum"`
	// The maximum length of values in the column, if the column data type is a string
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxLength *int32 `json:"maxLength,omitempty" protobuf:"varint,16,opt,name=maxLength"`
	// The minimum length of values in the column, if the column data type is a string
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MinLength *int32 `json:"minLength,omitempty" protobuf:"varint,17,opt,name=minLength"`
	// The regex pattern which values in the column must adhere to
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Pattern *string `json:"pattern,omitempty" protobuf:"bytes,18,opt,name=pattern"`
	// Required
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Required *bool `json:"required,omitempty" protobuf:"varint,19,opt,name=required"`
	// A user-specified example value
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Example *string `json:"example,omitempty" protobuf:"bytes,20,opt,name=example"`
	// A link to user-specified external documentation
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ExternalDocs *string `json:"externalDocs,omitempty" protobuf:"bytes,21,opt,name=externalDocs"`
	// The collection of unique values for categorical features
	// +kubebuilder:validation:Optional
	Enum []string `json:"enum,omitempty" protobuf:"bytes,22,rep,name=enum"`
	// Indicates if the feature is ordinal, in the case of categorical features
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Ordinal *bool `json:"ordinal,omitempty" protobuf:"varint,23,opt,name=ordinal"`
	// The maximum number of items if the column is a list of values
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxItems *int32 `json:"maxItems,omitempty" protobuf:"varint,24,opt,name=maxItems"`
	// The minimum number of items if the column is a list of values
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MinItems *int32 `json:"minItems,omitempty" protobuf:"varint,25,opt,name=minItems"`
	// Enforce that all the items in the list are unique
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	UniqueItems *bool `json:"uniqueItems,omitempty" protobuf:"varint,26,opt,name=uniqueItems"`
	// Indicates if the column is used as the time axis in time series forecasting
	// Default is false.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	TimeColumn *bool `json:"timeColumn,omitempty" protobuf:"varint,27,opt,name=timeColumn"`
	// Indicates if the column contains personally identifiable information
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	PII *bool `json:"pii,omitempty" protobuf:"varint,28,opt,name=pii"`
	// Indicates if the column contains personal health information
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	PHI *bool `json:"phi,omitempty" protobuf:"varint,29,opt,name=phi"`
	// Indicates if the column contains any personal data
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	PersonalData *bool `json:"personalData,omitempty" protobuf:"varint,30,opt,name=personalData"`
	// Protected means that this feature is important for ethical AI / Fairness
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Protected *bool `json:"protected,omitempty" protobuf:"varint,31,opt,name=protected"`
	// The default value for number types; used internally for synthetic data and validation
	DefaultValueNum *float64 `json:"DefaultValueNum,omitempty" protobuf:"bytes,32,opt,name=defaultValueNum"`
	// Indicates if values from this column will be sampled on a logarithmic scale
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Log *bool `json:"log,omitempty" protobuf:"varint,33,opt,name=log"`
	// Mu is the mean of the normal distribution
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Mu *float64 `json:"mu,omitempty" protobuf:"bytes,34,opt,name=mu"`
	// Sigma is the standard deviation of the distribution
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Sigma *float64 `json:"sigma,omitempty" protobuf:"bytes,35,opt,name=sigma"`
	// The threshold skew for skew detection
	// +kubebuilder:validation:Optional
	Skewthreshold *float64 `json:"skewThreshold,omitempty" protobuf:"bytes,36,opt,name=skewThreshold"`
	// The threshold drift value for model drift detection.
	// +kubebuilder:validation:Optional
	Driftthreshold *float64 `json:"driftThreshold,omitempty" protobuf:"bytes,37,opt,name=driftThreshold"`
	// Indicates if the column is an index column
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	IndexColumn *bool `json:"indexColumn,omitempty" protobuf:"varint,38,opt,name=indexColumn"`
	// Indicates if the column holds fold values
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Fold *bool `json:"fold,omitempty" protobuf:"varint,39,opt,name=fold"`
	// If True than this is a weight column
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Weight *bool `json:"weight,omitempty" protobuf:"varint,40,opt,name=weight"`
	// Indicates that the feature should always be used in training
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Reserved *bool `json:"reserved,omitempty" protobuf:"varint,41,opt,name=reserved"`
	// The recommended imputation method for the column
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	Imputation *catalog.Imputation `json:"imputation,omitempty" protobuf:"bytes,42,opt,name=imputation"`
	// The recommended scaling method for the column
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	Scaling *catalog.Scaling `json:"scaling,omitempty" protobuf:"bytes,43,opt,name=scaling"`
	// Indicates if the feature was automatically generated
	// +kubebuilder:validation:Optional
	Generated bool `json:"generated,omitempty" protobuf:"varint,44,opt,name=generated"`
	// The formula used to generate the column
	// +kubebuilder:validation:Optional
	Formula string `json:"formula,omitempty" protobuf:"bytes,45,opt,name=formula"`
	// Indicates if the column is an ID column
	// +kubebuilder:validation:Optional
	ID bool `json:"id,omitempty" protobuf:"varint,46,opt,name=id"`
	// The step value if the column values are a sequence of numbers
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	Step *float64 `json:"step,omitempty" protobuf:"bytes,47,opt,name=step"`
	// Contain the Index for the column in the schema
	// +kubebuilder:validation:Optional
	Index int32 `json:"index,omitempty" protobuf:"varint,48,opt,name=index"`
}

// DataSource defines the specification for the file format and column-level schema of data to be used within Modela
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Format",type="string",JSONPath=".spec.fileType"
// +kubebuilder:printcolumn:name="Type",type="string",JSONPath=".spec.datasetType"
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=datasources,singular=datasource,shortName="dsrc",categories={data,modela,all}
type DataSource struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DataSourceSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status DataSourceStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// DataSourceSpec defines the desired state of the DataSource
type DataSourceSpec struct {
	// The name of the Account which created the object, which exists in the same tenant as the object
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The name of the DataProductVersion which describes the version of the resource
	// that exists in the same DataProduct namespace as the resource
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// User-provided description of the object
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// The type of dataset; currently, the only supported type is `tabular`
	// +kubebuilder:default:="tabular"
	// +kubebuilder:validation:Optional
	DatasetType *catalog.DatasetType `json:"datasetType,omitempty" protobuf:"bytes,4,opt,name=datasetType"`
	// The schema which will be used during the ingestion process of any Dataset resources which specify the DataSource
	Schema Schema `json:"schema,omitempty" protobuf:"bytes,5,opt,name=schema"`
	// Flat file spec define the paramter needed to read a flat file.
	// +kubebuilder:validation:Optional
	FlatFile *FlatFileFormatSpec `json:"flatfile,omitempty" protobuf:"bytes,6,opt,name=flatfile"`
	// If true, this datasource is for labeled data.
	// +kubebuilder:validation:Optional
	Labeled *bool `json:"labeled,omitempty" protobuf:"bytes,7,opt,name=labeled"`
	// The specification for how incoming data should be sampled (i.e. how many rows should be used). Applicable
	// primarily for very large datasets
	Sample SampleSpec `json:"sample,omitempty" protobuf:"bytes,9,opt,name=sample"`
	// The default task for Dataset resources created from the Data Source. If null, the task type will default to the
	// the default task type of the Data Product which contains the Data Source
	// +kubebuilder:validation:Optional
	Task *catalog.MLTask `json:"task,omitempty" protobuf:"bytes,10,opt,name=task"`
	// The machine learning subtask relevant to the primary task (text classification, image object detection, etc.)
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	SubTask *catalog.MLSubtask `json:"subtask,omitempty" protobuf:"bytes,11,opt,name=subtask"`
	// List of relationships to other data sources
	// +kubebuilder:validation:Optional
	Relationships []RelationshipSpec `json:"relationships,omitempty" protobuf:"bytes,12,rep,name=relationships"`
	// Labeling specificies how to automatically label the dataset using positive and negative rules
	// +kubebuilder:validation:Optional
	Labeling LabelingSpec `json:"labeling,omitempty" protobuf:"bytes,13,rep,name=labeling"`
	// InferredFrom specifies the location of the data that was used to generate the schema of the Data Source
	// +kubebuilder:validation:Optional
	InferredFrom *DataLocation `json:"inferredFrom,omitempty" protobuf:"bytes,14,opt,name=inferredFrom"`
}

// FlatFileFormatSpec defines the format for incoming flat-files to be parsed
type FlatFileFormatSpec struct {
	// The file type of incoming data which uses the DataSource (by default, a CSV file)
	// +kubebuilder:default:="csv"
	// +kubebuilder:validation:Optional
	FileType *FlatFileType `json:"fileType,omitempty" protobuf:"bytes,1,opt,name=fileType"`
	// The file format for CSV files, if applicable
	// +kubebuilder:validation:Optional
	Csv CsvFileSpec `json:"csv,omitempty" protobuf:"bytes,2,opt,name=csv"`
	// The file format for Excel files, if applicable
	// +kubebuilder:validation:Optional
	Excel ExcelNotebookSpec `json:"excel,omitempty" protobuf:"bytes,3,opt,name=excel"`
	// The file format for Parquet files, if applicable
	// +kubebuilder:validation:Optional
	Parquet ParquetFileSpec `json:"parquet,omitempty" protobuf:"bytes,4,opt,name=parquet"`
}

// DataSourceStatus defines the observed state of a DataSource object
type DataSourceStatus struct {
	// The number of columns determined to be present in the DataSource's schema
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	Cols int32 `json:"cols,omitempty" protobuf:"varint,1,opt,name=cols"`
	// ObservedGeneration is the last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,2,opt,name=observedGeneration"`
	// Last time the DataSource was used to create a Dataset
	//+kubebuilder:validation:Optional
	LastDatasetCreated *metav1.Time `json:"lastDatasetCreated,omitempty" protobuf:"bytes,3,opt,name=lastDatasetCreated"`
	// The name of the last Dataset created using the DataSource
	//+kubebuilder:validation:Optional
	LastDatasetName string `json:"lastDatasetName,omitempty" protobuf:"bytes,4,opt,name=lastDatasetName"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,5,opt,name=lastUpdated"`
	// In the case of failure, the DataSource resource controller will set this field with a failure reason
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,6,opt,name=failureReason"`
	// In the case of failure, the DataSource resource controller will set this field with a failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,7,opt,name=failureMessage"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []DataSourceCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,8,rep,name=conditions"`
}

// DataSourceList contains a list of DataSource objects
// +kubebuilder:object:root=true
type DataSourceList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataSource `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// RelationSpec defines a relationship between two DataSource objects
type RelationshipSpec struct {
	// The name of the relationship
	// +kubebuilder:validation:Required
	// +required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=type"`
	// The name of the columns that holds the foreign key
	Column string `json:"columns,omitempty" protobuf:"bytes,2,opt,name=column"`
	// The relationship arity
	Arity *catalog.RelationshipArity `json:"arity,omitempty" protobuf:"bytes,3,opt,name=arity"`
	// The name of the other DataSource object
	// +kubebuilder:validation:Required
	// +required
	RelatesTo string `json:"relatesTo,omitempty" protobuf:"bytes,4,opt,name=relatesTo"`
}

type LabelingSpec struct {
	// If true enable labeling.
	Enabled *bool `json:"enabled,omitempty" protobuf:"bytes,1,opt,name=enabled"`
	// The name of the column that will hold the result.
	ResultColumn string `json:"resultColumn,omitempty" protobuf:"bytes,2,opt,name=resultColumn"`
	// List of rules for positive rules.
	Positive []LabelingRule `json:"positive,omitempty" protobuf:"bytes,3,rep,name=positive"`
	// List of negative rules
	Negative []LabelingRule `json:"negative,omitempty" protobuf:"bytes,4,rep,name=negative"`
}

type LabelingRule struct {
	Column   string     `json:"column,omitempty" protobuf:"bytes,1,opt,name=column"`
	Operator catalog.Op `json:"operator,omitempty" protobuf:"bytes,2,opt,name=operator"`
	Value    string     `json:"value,omitempty" protobuf:"bytes,3,opt,name=value"`
}
