package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type MultiDatasetValidationName string

const (
	MultiDatasetValidationNameSameNumberOfRows  MultiDatasetValidationName = "same-number-of-rows"
	MultiDatasetValidationNameOuterJoinEmpty    MultiDatasetValidationName = "outer-join-empty"
	MultiDatasetValidationNameOuterJoinNotEmpty MultiDatasetValidationName = "outer-join-not-empty"
	MultiDatasetValidationNameInnerJoinEmpty    MultiDatasetValidationName = "inner-join-empty"
	MultiDatasetValidationNameInnerJoinNotEmpty MultiDatasetValidationName = "inner-join-not-empty"
	MultiDatasetValidationNameLeftJoinEmpty     MultiDatasetValidationName = "left-join-empty"
	MultiDatasetValidationNameLeftJoinNotEmpty  MultiDatasetValidationName = "left-join-not-empty"
	MultiDatasetValidationNameRightJoinEmpty    MultiDatasetValidationName = "right-join-empty"
	MultiDatasetValidationNameRightJoinNotEmpty MultiDatasetValidationName = "right-join-not-empty"
)

type MultiDatasetValidation struct {
	// +kubebuilder:validation:Optional
	Type *MultiDatasetValidationName `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// +kubebuilder:validation:Optional
	Datasets []string `json:"datasets,omitempty" protobuf:"bytes,2,rep,name=datasets"`
	// Generated indicate weather this validation rule was automatically generated
	// +kubebuilder:validation:Optional
	Generated *bool `json:"generated,omitempty" protobuf:"varint,3,rep,name=generated"`
}

type DatasetValidationName string

const (
	DatasetValidationNameColumnsCountEqual    DatasetValidationName = "columns-count-equal"
	DatasetValidationNameColumnsNameInSet     DatasetValidationName = "columns-in-set"
	DatasetValidationNameColumnsInOrderedList DatasetValidationName = "columns-in-ordered-list"
	DatasetValidationNameRowCountBetween      DatasetValidationName = "row-count-between"
	DatasetValidationNameNameNotEmpty         DatasetValidationName = "dataset-not-empty"
	DatasetValidationNameNameEmpty            DatasetValidationName = "dataset-empty"
)

type DatasetValidation struct {
	// +kubebuilder:validation:Optional
	Type *DatasetValidationName `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Type=number
	// +kubebuilder:validation:Optional
	Value *float64 `json:"value,omitempty" protobuf:"bytes,2,opt,name=value"`
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Type=number
	// +kubebuilder:validation:Optional
	Min *float64 `json:"min,omitempty" protobuf:"bytes,3,opt,name=min"`
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Type=number
	// +kubebuilder:validation:Optional
	Max *float64 `json:"max,omitempty" protobuf:"bytes,4,opt,name=max"`
	// +kubebuilder:validation:Optional
	ValueSet []string `json:"valueSet,omitempty" protobuf:"bytes,5,rep,name=valueSet"`
	// +kubebuilder:validation:Optional
	StrictMin *bool `json:"strictMin,omitempty" protobuf:"varint,6,opt,name=strictMin"`
	// +kubebuilder:validation:Optional
	StrictMax *bool `json:"strictMax,omitempty" protobuf:"varint,7,opt,name=strictMax"`
	// Generated indicate weather this validation rule was automatically generated
	// +kubebuilder:validation:Optional
	Generated *bool `json:"generated,omitempty" protobuf:"varint,8,rep,name=generated"`
}

const (
	MultiColumnCorr MultiColumnValidationName = "multi-column-corr"
)

type MultiColumnValidationName string

type MultiColumnValidation struct {
	// +kubebuilder:validation:Optional
	Type *MultiColumnValidationName `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// +kubebuilder:validation:Optional
	Columns []string `json:"columns,omitempty" protobuf:"bytes,2,rep,name=columns"`
	// For validation that need a single value
	// +kubebuilder:validation:Optional
	Value *float64 `json:"value,omitempty" protobuf:"bytes,3,opt,name=value"`
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Type=number
	// +kubebuilder:validation:Optional
	Min *float64 `json:"min,omitempty" protobuf:"bytes,4,opt,name=min"`
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Type=number
	// +kubebuilder:validation:Optional
	Max *float64 `json:"max,omitempty" protobuf:"bytes,5,opt,name=max"`
	// +kubebuilder:validation:Optional
	ValueSet []string `json:"valueSet,omitempty" protobuf:"bytes,6,rep,name=valueSet"`
	// +kubebuilder:validation:Optional
	StrictMin *bool `json:"strictMin,omitempty" protobuf:"varint,7,opt,name=strictMin"`
	// +kubebuilder:validation:Optional
	StrictMax *bool `json:"strictMax,omitempty" protobuf:"varint,8,opt,name=strictMax"`
	// Generated indicate weather this validation rule was automatically generated
	// +kubebuilder:validation:Optional
	Generated *bool `json:"generated,omitempty" protobuf:"varint,9,rep,name=generated"`
}

type ColumnValidationName string

const (
	ColumnValidationNameColumnExist      ColumnValidationName = "column-exist"
	ColumnValidationNameColumnHaveValues ColumnValidationName = "have-values"
	ColumnValidationNameColumnHasNoValue ColumnValidationName = "has-no-values"
	ColumnValidationNameColumnHaveNulls  ColumnValidationName = "value-have-nulls"
	ColumnValidationNameColumnHasNoNull  ColumnValidationName = "value-has-no-nulls"
	ColumnValidationNameColumnOfType     ColumnValidationName = "value-of-type"
	ColumnValidationNameInSet            ColumnValidationName = "values-in-set"
	ColumnValidationNameIncreasing       ColumnValidationName = "values-increasing"
	ColumnValidationNameDecreasing       ColumnValidationName = "values-decreasing"
	ColumnValidationNameLengthBetween    ColumnValidationName = "value-length-between"
	ColumnValidationNameMatchRegex       ColumnValidationName = "value-match-regex"
	ColumnValidationNameIsDate           ColumnValidationName = "value-is-date"
	ColumnValidationNameIsJson           ColumnValidationName = "value-is-json"
	ColumnValidationInDomain             ColumnValidationName = "value-in-domain"
	// Count
	ColumnValidationNameUniqueValueCountBetween   ColumnValidationName = "unique-value-count-between"
	ColumnValidationNameOutlierValueUniqueBetween ColumnValidationName = "outlier-value-count-between"
	ColumnValidationNameValidValueUniqueBetween   ColumnValidationName = "valid-values-count-between"
	ColumnValidationNameMismatchValueBetween      ColumnValidationName = "mismatch-values-between"
	// Stat
	ColumnValidationNameMinBetween           ColumnValidationName = "min-between"
	ColumnValidationNameLowerQuartileBetween ColumnValidationName = "lower-quartile-between"
	ColumnValidationNameMedianBetween        ColumnValidationName = "median-between"
	ColumnValidationNameAvgBetween           ColumnValidationName = "average-between"
	ColumnValidationNameUpperQuartileBetween ColumnValidationName = "upper-quartile-between"
	ColumnValidationNameMaxBetween           ColumnValidationName = "max-between"
	ColumnValidationStddevBetween            ColumnValidationName = "stddev-between"
	ColumnValidationChiSquarePValueBetween   ColumnValidationName = "chi-square-p-value-between"
	ColumnValidationPairCramersBetween       ColumnValidationName = "pair-cramers-between"
)

type FileValidationName string

const (
	FileSizeBetween            FileValidationName = "file-size-between"
	FileExist                  FileValidationName = "file-exist"
	FileRegexMatchCountBetween FileValidationName = "file-regex-match-count-between"
	FileValidJson              FileValidationName = "file-valid-json"
	FileValidCsv               FileValidationName = "file-valid-csv"
)

type ColumnValidation struct {
	// +kubebuilder:validation:Optional
	Type *ColumnValidationName `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// +kubebuilder:validation:Optional
	Column *string `json:"column,omitempty" protobuf:"bytes,2,opt,name=column"`
	// For validation that need a single value
	// +kubebuilder:validation:Optional
	Value *float64 `json:"value,omitempty" protobuf:"bytes,3,opt,name=value"`
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Type=number
	// +kubebuilder:validation:Optional
	Min *float64 `json:"min,omitempty" protobuf:"bytes,4,opt,name=min"`
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Type=number
	// +kubebuilder:validation:Optional
	Max *float64 `json:"max,omitempty" protobuf:"bytes,5,opt,name=max"`
	// +kubebuilder:validation:Optional
	ValueSet []string `json:"valueSet,omitempty" protobuf:"bytes,6,rep,name=valueSet"`
	// +kubebuilder:validation:Optional
	StrictMin *bool `json:"strictMin,omitempty" protobuf:"varint,7,opt,name=strictMin"`
	// +kubebuilder:validation:Optional
	StrictMax *bool `json:"strictMax,omitempty" protobuf:"varint,8,opt,name=strictMax"`
	// Generated indicate weather this validation rule was automatically generated
	// +kubebuilder:validation:Optional
	Generated *bool `json:"generated,omitempty" protobuf:"varint,9,rep,name=generated"`
}

type FileValidation struct {
	// +kubebuilder:validation:Optional
	Type *FileValidationName `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// +kubebuilder:validation:Optional
	BucketName *string `json:"bucketName,omitempty" protobuf:"bytes,2,opt,name=bucketName"`
	// +kubebuilder:validation:Optional
	Path *string `json:"column,omitempty" protobuf:"bytes,3,opt,name=column"`
	// For validation that need a single value
	// +kubebuilder:validation:Optional
	Value *float64 `json:"value,omitempty" protobuf:"bytes,4,opt,name=value"`
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Type=number
	// +kubebuilder:validation:Optional
	Min *float64 `json:"min,omitempty" protobuf:"bytes,5,opt,name=min"`
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Type=number
	// +kubebuilder:validation:Optional
	Max *float64 `json:"max,omitempty" protobuf:"bytes,6,opt,name=max"`
	// +kubebuilder:validation:Optional
	ValueSet []string `json:"valueSet,omitempty" protobuf:"bytes,7,rep,name=valueSet"`
	// +kubebuilder:validation:Optional
	StrictMin *bool `json:"strictMin,omitempty" protobuf:"varint,8,opt,name=strictMin"`
	// +kubebuilder:validation:Optional
	StrictMax *bool `json:"strictMax,omitempty" protobuf:"varint,9,opt,name=strictMax"`
	// Generated indicate weather this validation rule was automatically generated
	// +kubebuilder:validation:Optional
	Generated *bool `json:"generated,omitempty" protobuf:"varint,10,rep,name=generated"`
}

// Condition on the dataset
type DataSourceConditionType string

/// Datastore Condition
const (
	// Regular state of the store.
	DatasourceReady DataSourceConditionType = "Ready"
	DatasourceSaved DataSourceConditionType = "Saved"
)

// DataSourceCondition describes the state of a datasource at a certain point.
type DataSourceCondition struct {
	// Type of condition.
	Type DataSourceConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=DataSourceConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition.
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
// +kubebuilder:validation:Enum="csv";"tsv";"excel";"fwf";"hdf";"html";"json";"pickle";"sas";"stata";"feather";
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

type CsvFileSpec struct {
	// Refers to the character used to separate fields.
	// +kubebuilder:default:="comma"
	// +kubebuilder:validation:Optional
	ColumnDelimiter *Delimiter `json:"columnDelimiter,omitempty" protobuf:"bytes,1,opt,name=columnDelimiter"`
	// The row delimiter
	// +kubebuilder:default:="crlf"
	// +kubebuilder:validation:Optional
	RowDelimiter *Delimiter `json:"rowDelimiter,omitempty" protobuf:"bytes,2,opt,name=rowDelimiter"`
	//The quote char.
	// +kubebuilder:default:="double-quote"
	// +kubebuilder:validation:Optional
	QuoteChar QuoteChar `json:"quote,omitempty" protobuf:"bytes,3,opt,name=quote"`
	// the char used to escape the delimiter when quoting
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	EscapeChar EscapeChar `json:"escapeChar,omitempty" protobuf:"bytes,4,opt,name=escapeChar"`
	//CommentCharacter(s) to split comments off the end of lines.
	// +kubebuilder:default:="#"
	// +kubebuilder:validation:Optional
	CommentChars *string `json:"commentChars,omitempty" protobuf:"bytes,5,opt,name=commentChars"`
	//Check if there is an header
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Header *bool `json:"header,omitempty" protobuf:"varint,6,opt,name=header"`
	//The number of rows to skip
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	SkipRows *int32 `json:"skipRows,omitempty" protobuf:"varint,7,opt,name=skipRows"`
	// NullValue is a sequence of values to replace with NA.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	NullValues *string `json:"nullValues,omitempty" protobuf:"bytes,8,opt,name=nullValues"`
	//Encoding for Unicode (e.g., 'utf-8' for UTF-8 encoded text).
	// +kubebuilder:default:="utf-8"
	// +kubebuilder:validation:Optional
	Encoding *catalog.FileEncoding `json:"encoding,omitempty" protobuf:"bytes,9,opt,name=encoding"`
	//The maximum number of rows to read.
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxRows *int32 `json:"maxRows,omitempty" protobuf:"varint,10,opt,name=maxRows"`
	//If true, the import will fail if there is an error
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Strict *bool `json:"strict,omitempty" protobuf:"varint,11,opt,name=strict"`
	// The compression type, if the file is compressed
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	Compression *string `json:"compression,omitempty" protobuf:"bytes,12,opt,name=compression"`
	// If true, the file contain an index column
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	HasIndexColumn *bool `json:"hasIndexColumn,omitempty" protobuf:"varint,13,opt,name=hasIndexColumn"`
	// If has index column.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	IndexColumn *int32 `json:"indexColumn,omitempty" protobuf:"varint,14,opt,name=indexColumn"`
}

type ExcelNotebookSpec struct {
	// Use first sheet with data
	// +kubebuilder:validation:Optional
	FirstSheetWithData *bool `json:"firstSheetWithData,omitempty" protobuf:"varint,1,opt,name=firstSheetWithData"`
	// Use sheet with name
	// +kubebuilder:validation:Optional
	SheetName *string `json:"sheetName,omitempty" protobuf:"bytes,2,opt,name=sheetName"`
	// The index of the sheet with the data.
	// +kubebuilder:validation:Optional
	SheetIndex *int32 `json:"sheetIndex,omitempty" protobuf:"varint,3,opt,name=sheetIndex"`
	// The rows number that contain column name
	// +kubebuilder:validation:Optional
	ColumnNamesRow *int32 `json:"columnNameRow,omitempty" protobuf:"varint,4,opt,name=columnNameRow"`
	// Data is the definition of excel data.
	// +kubebuilder:validation:Optional
	Data ExcelSheetArea `json:"data,omitempty" protobuf:"bytes,5,opt,name="`
}

type ExcelSheetArea struct {
	// If true, read the entire sheet.
	EntireSheet *bool `json:"entireSheet,omitempty" protobuf:"bytes,1,opt,name=entireSheet"`
	// If reading part of the excel sheet, start with this column
	FromColumn *int32 `json:"fromColumn,omitempty" protobuf:"varint,2,opt,name=fromColumn"`
	// If reading part of the excel sheet, end with this column
	ToColumn *int32 `json:"toColumn,omitempty" protobuf:"varint,3,opt,name=toColumn"`
	// If reading part of the excel sheet, start with row
	FromRow *int32 `json:"fromRow,omitempty" protobuf:"varint,4,opt,name=fromRow"`
	// If reading part of the excel sheet, end with this row
	ToRow *int32 `json:"toRow,omitempty" protobuf:"varint,5,opt,name=toRow"`
}

type ValidationSpec struct {
	// MultiDatasetValidation contains validations for multi datasets
	// +kubebuilder:validation:Optional
	MultiDatasetValidations []MultiDatasetValidation `json:"multiDatasetValidations,omitempty" protobuf:"bytes,1,opt,name=multiDatasetValidations"`
	// DatasetValidations contains validations for the whole dataset
	// +kubebuilder:validation:Optional
	DatasetValidations []DatasetValidation `json:"datasetValidations,omitempty" protobuf:"bytes,2,opt,name=datasetValidations"`
	// MultiColumnValidations defines validations for combined columns from the dataset
	// +kubebuilder:validation:Optional
	MultiColumnValidations []MultiColumnValidation `json:"multiColumnValidations,omitempty" protobuf:"bytes,3,opt,name=multiColumnValidations"`
	// Column Validations defines assertions for columns from the dataset
	// +kubebuilder:validation:Optional
	ColumnValidations []ColumnValidation `json:"columnValidations,omitempty" protobuf:"bytes,4,opt,name=columnValidations"`
	// File Validations defines assertions for actual files
	// +kubebuilder:validation:Optional
	FileValidations []FileValidation `json:"fileValidations,omitempty" protobuf:"bytes,5,opt,name=fileValidations"`
}

type Schema struct {
	// Time series schema. Set time series specific parameters.
	// +kubebuilder:validation:Optional
	TimeSeriesSchema *TimeSeriesSchema `json:"timeSeriesSchema,omitempty" protobuf:"bytes,1,opt,name=timeSeriesSchema"`
	// Recommendation schema. Used for recommendation task
	// +kubebuilder:validation:Optional
	RecommendationSchema *RecommendationSchema `json:"recommendationSchema,omitempty" protobuf:"bytes,2,opt,name=recommendationSchema"`
	// Columns
	Columns []Column `json:"columns,omitempty" protobuf:"bytes,3,rep,name=columns"`
	// Validation spec define the validation to perform on new datasets
	Validation *ValidationSpec `json:"validation,omitempty" protobuf:"bytes,4,opt,name=validation"`
}

type TimeSeriesSchema struct {
	// The time series frequency
	// required
	Freq catalog.Freq `json:"freq,omitempty" protobuf:"bytes,1,opt,name=freq"`
	// take holiday into account
	// required
	// default is US
	Country *catalog.HolidayCountry `json:"country,omitempty" protobuf:"bytes,2,opt,name=country"`
}

type RecommendationSchema struct {
	// The name of the user id column in the dataset
	// +kubebuilder:default:="user_id"
	// +kubebuilder:validation:Optional
	UserID *string `json:"userIDColumn,omitempty" protobuf:"bytes,1,opt,name=userIDColumn"`
	// The name of the item id column in the dataset
	// +kubebuilder:default:="item_id"
	// +kubebuilder:validation:Optional
	ItemID *string `json:"itemIDColumn,omitempty" protobuf:"bytes,2,opt,name=itemIDColumn"`
	// The rating column name
	// +kubebuilder:default:="rating"
	// +kubebuilder:validation:Optional
	Rating *string `json:"ratingColumn,omitempty" protobuf:"bytes,3,opt,name=ratingColumn"`
}

type Column struct {
	// Name is the name of the raw feature.
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:MinLength=1
	Name string `json:"name" protobuf:"bytes,1,opt,name=name"`
	// Display Name specify the name of the feature that should be used in reports. If empty, use the raw name
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Optional
	DisplayName *string `json:"displayName,omitempty" protobuf:"bytes,2,opt,name=displayName"`
	// Type specify the data type of the attribute
	// required
	DataType catalog.DataType `json:"datatype" protobuf:"bytes,3,opt,name=datatype"`
	// DataDomain is the domain of the column. A domain constrain the set of values.
	// +kubebuilder:validation:Optional
	Format *catalog.DataDomain `json:"format,omitempty" protobuf:"bytes,4,opt,name=format"`
	// Description is a description of the feature
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,5,opt,name=description"`
	// Ignore specify if the attribute should be ignored when building the model
	// default is false
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Ignore *bool `json:"ignore,omitempty" protobuf:"varint,6,opt,name=ignore"`
	// Label should be true if this attribute is the predictable target
	// Default is false
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Target *bool `json:"target,omitempty" protobuf:"varint,7,opt,name=target"`
	// Nullable indicates if a column can contain string
	// Default is false
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Nullable *bool `json:"nullable,omitempty" protobuf:"varint,8,opt,name=nullable"`
	// PrimaryKey denotes if this column is part of the table primary key
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	PK *bool `json:"pk,omitempty" protobuf:"varint,9,opt,name=pk"`
	// FK denotes if this column is part of a foreign  key to another table.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	FK *bool `json:"fk,omitempty" protobuf:"varint,10,opt,name=fk"`
	// MultipleOf
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MultipleOf *int32 `json:"multipleOf,omitempty" protobuf:"varint,11,opt,name=multipleOf"`
	// MaximumFloat
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Maximum *float64 `json:"maximum,omitempty" protobuf:"bytes,12,opt,name=maximum"`
	// ExclusiveMaximum
	// +kubebuilder:validation:Optional
	ExclusiveMaximum *bool `json:"exclusiveMaximum,omitempty" protobuf:"varint,13,opt,name=exclusiveMaximum"`
	// MinimumFloat
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Minimum *float64 `json:"minimum,omitempty" protobuf:"bytes,14,opt,name=minimum"`
	// ExclusiveMinimum
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ExclusiveMinimum *bool `json:"exclusiveMinimum,omitempty" protobuf:"varint,15,opt,name=exclusiveMinimum"`
	// MaxLength
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxLength *int32 `json:"maxLength,omitempty" protobuf:"varint,16,opt,name=maxLength"`
	// MinLength
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MinLength *int32 `json:"minLength,omitempty" protobuf:"varint,17,opt,name=minLength"`
	// Pattern
	// Default is empty
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Pattern *string `json:"pattern,omitempty" protobuf:"bytes,18,opt,name=pattern"`
	// Required
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Required *bool `json:"required,omitempty" protobuf:"varint,19,opt,name=required"`
	// Example
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Example *string `json:"example,omitempty" protobuf:"bytes,20,opt,name=example"`
	// External Docs
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ExternalDocs *string `json:"externalDocs,omitempty" protobuf:"bytes,21,opt,name=externalDocs"`
	// Enum contain the unique values for categorical feature.
	// +kubebuilder:validation:Optional
	Enum []string `json:"enum,omitempty" protobuf:"bytes,22,rep,name=enum"`
	// For categorical feature , set to true if this is an ordinal feature.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Ordinal *bool `json:"ordinal,omitempty" protobuf:"bytes,23,opt,name=ordinal"`
	// Max Items in the data in case of a list
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxItems *int32 `json:"maxItems,omitempty" protobuf:"varint,24,opt,name=maxItems"`
	// Min Items in the data in case of a list.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MinItems *int32 `json:"minItems,omitempty" protobuf:"varint,25,opt,name=minItems"`
	// Enforce that all the items in the list are unique
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	UniqueItems *bool `json:"uniqueItems,omitempty" protobuf:"varint,26,opt,name=uniqueItems"`
	// TimeColumn is true if this column is used as the time axis in time series forecast
	// Default is false.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	TimeColumn *bool `json:"timeColumn,omitempty" protobuf:"varint,27,opt,name=timeColumn"`
	// Personally Identifiable information
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	PII *bool `json:"pii,omitempty" protobuf:"varint,28,opt,name=pii"`
	// Personally Health information
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	PHI *bool `json:"phi,omitempty" protobuf:"varint,29,opt,name=phi"`
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	PersonalData *bool `json:"personalData,omitempty" protobuf:"varint,30,opt,name=personalData"`
	// Protected means that this feature is important for ethical AI / Fairness
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Protected *bool `json:"protected,omitempty" protobuf:"varint,31,opt,name=protected"`
	// The following attribute concern with syntatic data and validation
	// DefaultValueNum is the default value for numbers
	DefaultValueNum *float64 `json:"DefaultValueNum,omitempty" protobuf:"bytes,32,opt,name=defaultValueNum"`
	// Log if true, values from this column will be sampled on logaritmic scale
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
	// Skew treshold is the treshold for skew detection.
	// +kubebuilder:validation:Optional
	SkewTreshold *float64 `json:"skewThreshold,omitempty" protobuf:"bytes,36,opt,name=skewThreshold"`
	// Drift treshold is the treshold for drift detection.
	// +kubebuilder:validation:Optional
	DriftTreshold *float64 `json:"driftThreshold,omitempty" protobuf:"bytes,37,opt,name=driftThreshold"`
	// If True than this is an index column
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Index *bool `json:"index,omitempty" protobuf:"bytes,38,opt,name=index"`
	// If True than this columns holds folds values
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Fold *bool `json:"fold,omitempty" protobuf:"bytes,39,opt,name=fold"`
	// If True than this is a weight column
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Weight *bool `json:"weight,omitempty" protobuf:"bytes,40,opt,name=weight"`
	// If True indicate that this feature should always be used in training
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Reserved *bool `json:"reserved,omitempty" protobuf:"bytes,41,opt,name=reserved"`
	// The recommended imputer for a column.
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	Imputation *catalog.Imputation `json:"imputation,omitempty" protobuf:"bytes,42,opt,name=imputation"`
	// The recommended scaler for a column.
	// +kubebuilder:default:=auto
	// +kubebuilder:validation:Optional
	Scaling *catalog.Scaling `json:"scaling,omitempty" protobuf:"bytes,43,opt,name=scaling"`
	// If true this feature is generate
	// +kubebuilder:validation:Optionald.
	Generated bool `json:"generated,omitempty" protobuf:"varint,44,opt,name=generated"`
	// The formula used to generate  this column
	// +kubebuilder:validation:Optionald.
	Formula string `json:"formula,omitempty" protobuf:"bytes,45,opt,name=formula"`
	// This is updated from the data source. If true, the column is an id column
	// +kubebuilder:validation:Optional
	ID bool `json:"id,omitempty" protobuf:"varint,46,opt,name=id"`
	// Used in the dashboard.
	// +kubebuilder:default:=1
	// +kubebuilder:validation:Optional
	Step *float64 `json:"step,omitempty" protobuf:"bytes,47,opt,name=step"`
}

// DataSource represent source of the data in the system. The spec consist of schema
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

type DataSourceSpec struct {
	// The account name of the owner of this dataset
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The version of the flat file.
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// User provided description of the data source
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// The data source schema
	Schema *Schema `json:"schema,omitempty" protobuf:"bytes,4,opt,name=schema"`
	// The text file type
	// Default: csv
	// +kubebuilder:default:="csv"
	// +kubebuilder:validation:Optional
	FileType *FlatFileType `json:"fileType,omitempty" protobuf:"bytes,5,opt,name=fileType"`
	// FlatFile access specification
	// +kubebuilder:validation:Optional
	CsvFile *CsvFileSpec `json:"csvfile,omitempty" protobuf:"bytes,6,opt,name=csvfile"`
	// Excel Notebook is a notebook in excel
	// +kubebuilder:validation:Optional
	ExcelNotebook *ExcelNotebookSpec `json:"excelNotebook,omitempty" protobuf:"bytes,7,opt,name=excelNotebook"`
	// Type is the dataset type
	// +kubebuilder:default:="tabular"
	// +kubebuilder:validation:Optional
	DatasetType *catalog.DatasetType `json:"datasetType,omitempty" protobuf:"bytes,8,opt,name=datasetType"`
	// Sample spec defines how many rows to use for analysis for datasets from this datasource.
	Sample SampleSpec `json:"sample,omitempty" protobuf:"bytes,9,opt,name=sample"`
	// The default task for datasets from this data source. If null this will be setup to the data product task
	// +kubebuilder:validation:Optional
	Task *catalog.TaskName `json:"task,omitempty" protobuf:"bytes,10,opt,name=task"`
	// List of relationships to other data sources
	Relationships []RelationshipSpec `json:"relationships,omitempty" protobuf:"bytes,11,opt,name=relationships"`
}

// FlatFileStatus defines the observed state of CsvFileSpec
type DataSourceStatus struct {
	// number of columns in the data source
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	Cols int32 `json:"cols,omitempty" protobuf:"varint,1,opt,name=cols"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,2,opt,name=observedGeneration"`
	// Last time an dataset from this datasource was created.
	//+kubebuilder:validation:Optional
	LastDatasetCreated *metav1.Time `json:"lastDatasetCreated,omitempty" protobuf:"bytes,3,opt,name=lastDatasetCreated"`
	// Last dataset name
	//+kubebuilder:validation:Optional
	LastDatasetName string `json:"lastDatasetName,omitempty" protobuf:"bytes,4,opt,name=lastDatasetName"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,5,opt,name=lastUpdated"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []DataSourceCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,6,rep,name=conditions"`
}

// +kubebuilder:object:root=true
// DataSourceList contain a list of DataSource objects
type DataSourceList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataSource `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type RelationshipSpec struct {
	// The name of the relationship
	// +kubebuilder:validation:Required
	// +required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=type"`
	// Local columns the holds the fk.
	Column string `json:"columns,omitempty" protobuf:"bytes,2,opt,name=column"`
	// The relationship arity
	Arity *catalog.RelationshipArity `json:"arity,omitempty" protobuf:"bytes,3,opt,name=arity"`
	// The name of the other datasource object
	// +kubebuilder:validation:Required
	// +required
	RelatesTo string `json:"relatesTo,omitempty" protobuf:"bytes,4,opt,name=relatesTo"`
}
