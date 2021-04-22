package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

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

type TableSpec struct {
	// The actual query. this is required.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Query *string `json:"query,omitempty" protobuf:"bytes,1,opt,name=query"`
	// TableName refer to whole table
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	TableName *string `json:"tableName,omitempty" protobuf:"bytes,2,opt,name=tableName"`
	// Connection refer to a connection object that point to secret
	// +kubebuilder:validation:Optional
	Connection v1.ObjectReference `json:"connectionRef,omitempty" protobuf:"bytes,3,opt,name=connectionRef"`
}

type StreamSpec struct {
	// Topic is the stream topic
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Topic *string `json:"topic,omitempty" protobuf:"bytes,1,opt,name=topic"`
	// Connection refer to a connection object that point to secret
	// +kubebuilder:validation:Optional
	Connection v1.ObjectReference `json:"connectionRef,omitempty" protobuf:"bytes,2,opt,name=connectionRef"`
}

type ApiSpec struct {
	// URI is the uri of the api
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	URI *string `json:"topic,omitempty" protobuf:"bytes,1,opt,name=topic"`
	// Connection refer to a connection object that point to secret
	// +kubebuilder:validation:Optional
	Connection v1.ObjectReference `json:"connectionRef,omitempty" protobuf:"bytes,2,opt,name=connectionRef"`
}

// the data source type
// +kubebuilder:validation:Enum="flatfile";"table";"stream";"api"
type DataSourceType string

const (
	FlatFileDataSource DataSourceType = "flatfile"
	TableDataSource    DataSourceType = "table"
	StreamDataSource   DataSourceType = "stream"
	ApiDataSource      DataSourceType = "api"
)

// +kubebuilder:validation:Enum="double-quote";"single-quote";
type QuoteChar string

const (
	SingleQuote QuoteChar = "double-quote"
	DoubleQuote QuoteChar = "single-quote"
)

type EscapeChar string

const (
	SingleEscapeChar EscapeChar = "double-quote"
	DoubleEscapeChar EscapeChar = "single-quote"
	Tilda            EscapeChar = "tilda"
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
// +kubebuilder:validation:Enum="sqlserver";"mysql";"postgress";"sqlite"
type DatabaseServerType string

const (
	MsSqlServer DatabaseServerType = "sqlserver"
	MySql       DatabaseServerType = "mysql"
	Postgress   DatabaseServerType = "postgress"
	SqlLite     DatabaseServerType = "sqlite"
)

type FlatFileSpec struct {
	// The text file type
	// Default: csv
	// +kubebuilder:default:="csv"
	// +kubebuilder:validation:Optional
	FileType *FlatFileType `json:"fileType,omitempty" protobuf:"bytes,4,opt,name=fileType"`
	// Refers to the character used to separate fields.
	// Default to comma
	// +kubebuilder:validation:Optional
	Delimiter *Delimiter `json:"delimiter,omitempty" protobuf:"bytes,5,opt,name=delimiter"`
	//The quata char.
	// +kubebuilder:validation:Optional
	QuoteChar QuoteChar `json:"quote,omitempty" protobuf:"bytes,6,opt,name=quote"`
	// the char used to escape the delimiter when quoting
	// +kubebuilder:validation:Optional
	EscapeChar EscapeChar `json:"escapeChar,omitempty" protobuf:"bytes,7,opt,name=escapeChar"`
	//CommentCharacter(s) to split comments off the end of lines.
	// +kubebuilder:validation:Optional
	CommentChars string `json:"commentChars,omitempty" protobuf:"bytes,8,opt,name=commentChars"`
	//Check if there is an header
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Header *bool `json:"header,omitempty" protobuf:"bytes,9,opt,name=header"`
	//The number of rows to skip
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	SkipRows *int32 `json:"skipRows,omitempty" protobuf:"varint,10,opt,name=skipRows"`
	// NullValue is a sequence of values to replace with NA.
	// +kubebuilder:validation:Optional
	NullValues *string `json:"nullValues,omitempty" protobuf:"bytes,11,opt,name=nullValues"`
	//Encoding for Unicode (e.g., 'utf-8' for UTF-8 encoded text).
	// +kubebuilder:default:="utf-8"
	// +kubebuilder:validation:Optional
	Encoding *catalog.FileEncoding `json:"encoding,omitempty" protobuf:"bytes,12,opt,name=encoding"`
	//The maximum number of rows to read.
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxRows *int32 `json:"maxRows,omitempty" protobuf:"varint,13,opt,name=maxRows"`
	//If true, the import will fail if there is an error
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Strict *bool `json:"strict,omitempty" protobuf:"bytes,14,opt,name=strict"`
}

type Schema struct {
	// Time series schema. Set time series specific parameters.
	// +kubebuilder:validation:Optional
	TimeSeriesSchema *TimeSeriesSchema `json:"tsSchema,omitempty" protobuf:"bytes,1,rep,name=tsSchema"`
	// Columns
	Columns []Column `json:"columns,omitempty" protobuf:"bytes,2,rep,name=columns"`
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

type Column struct {
	// FileName specify the name of the attribute
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:MinLength=1
	// required
	Name string `json:"name" protobuf:"bytes,1,opt,name=name"`
	// FileName specify the name of the feature, if this attribute comes from a feature
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Optional
	FeatureName *string `json:"featureName,omitempty" protobuf:"bytes,2,opt,name=featureName"`
	// Type specify the data type of the attribute
	// required
	DataType catalog.DataType `json:"datatype" protobuf:"bytes,3,opt,name=datatype"`
	// DataFormat is the domain of the column. A domain constrain the set of values.
	// +kubebuilder:validation:Optional
	Format *catalog.DataFormat `json:"format,omitempty" protobuf:"bytes,4,opt,name=format"`
	// Description is a description of the feature
	// +kubebuilder:default =""
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,5,opt,name=description"`
	// Ignore specify if the attribute should be ignored when building the model
	// default is false
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Ignore *bool `json:"ignore,omitempty" protobuf:"bytes,6,opt,name=ignore"`
	// Label should be true if this attribute is the predictable target
	// Default is false
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Label *bool `json:"label,omitempty" protobuf:"bytes,7,opt,name=label"`
	// Nullable indicates if a column can contain string
	// Default is false
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Nullable *bool `json:"nullable,omitempty" protobuf:"bytes,8,opt,name=nullable"`
	// PrimaryKey denotes if this column is part of the file key.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	PK *bool `json:"pk,omitempty" protobuf:"bytes,9,opt,name=pk"`
	// MultipleOf
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MultipleOf *int32 `json:"multipleOf,omitempty" protobuf:"varint,10,opt,name=multipleOf"`
	// MaximumFloat
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	Maximum *float64 `json:"maximum,omitempty" protobuf:"bytes,11,opt,name=maximum"`
	// ExclusiveMaximum
	// +kubebuilder:validation:Optional
	ExclusiveMaximum *bool `json:"exclusiveMaximum,omitempty" protobuf:"bytes,12,opt,name=exclusiveMaximum"`
	// MinimumFloat
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	Minimum *float64 `json:"minimum,omitempty" protobuf:"bytes,13,opt,name=minimum"`
	// ExclusiveMinimum
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ExclusiveMinimum *bool `json:"exclusiveMinimum,omitempty" protobuf:"bytes,14,opt,name=exclusiveMinimum"`
	// MaxLength
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxLength *int32 `json:"maxLength,omitempty" protobuf:"varint,15,opt,name=maxLength"`
	// MinLength
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MinLength *int32 `json:"minLength,omitempty" protobuf:"varint,16,opt,name=minLength"`
	// Pattern
	// Default is empty
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Pattern *string `json:"pattern,omitempty" protobuf:"bytes,17,opt,name=pattern"`
	// Required
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Required *bool `json:"required,omitempty" protobuf:"bytes,18,opt,name=required"`
	// Title
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Optional
	Title *string `json:"title,omitempty" protobuf:"bytes,19,opt,name=title"`
	// Example
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Example *string `json:"example,omitempty" protobuf:"bytes,20,opt,name=example"`
	// External Docs
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ExternalDocs *string `json:"externalDocs,omitempty" protobuf:"bytes,21,opt,name=externalDocs"`
	// Enum
	// +kubebuilder:validation:Optional
	Enum []string `json:"enum,omitempty" protobuf:"bytes,22,rep,name=enum"`
	// Preprocessor hint constrain the transformer
	// Default is empty
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	TransformerHint *string `json:"transformerHint,omitempty" protobuf:"bytes,23,opt,name=transformerHint"`
	// Max Items in the data in case of a list
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	MaxItems *int32 `json:"maxItems,omitempty" protobuf:"varint,24,opt,name=maxItems"`
	// Min Items in the data in case of a list.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	MinItems *int32 `json:"minItems,omitempty" protobuf:"varint,25,opt,name=minItems"`
	// Enforce that all the items in the list are unique
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	UniqueItems *bool `json:"uniqueItems,omitempty" protobuf:"bytes,26,opt,name=uniqueItems"`
	// TimeColumn is true if this column is used as the time axis in time series foreacst
	// Default is false.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	TimeColumn *bool `json:"timeColumn,omitempty" protobuf:"bytes,27,opt,name=timeColumn"`
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	// PreservePrivacy is true if the column content should not be exposed due to privacy concerns
	PreservePrivacy *bool `json:"preservePrivacy,omitempty" protobuf:"bytes,28,opt,name=preservePrivacy"`
}

func (in *Column) Validate() (bool, []metav1.StatusCause) {
	return false, nil
}

// DataSource represent source of the data in the system. The spec consist of schema
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Type",type="string",JSONPath=".spec.type"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=datasources,singular=datasource,categories={data,modeld,all}
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
	OwnerName *string `json:"ownerName,omitempty" protobuf:"bytes,1,opt,name=ownerName"`
	// The version of the flat file.
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// User provided description of the data source
	// +kubebuilder:default =""
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// The data source schema
	Schema *Schema `json:"schema,omitempty" protobuf:"bytes,4,rep,name=schema"`
	// The data source type.
	Type *DataSourceType `json:"type,omitempty" protobuf:"bytes,5,opt,name=type"`
	// FlatFile access specification
	// +kubebuilder:validation:Optional
	FlatFile *FlatFileSpec `json:"file,omitempty" protobuf:"bytes,6,rep,name=file"`
	// Table access specification if the data source is a table
	// +kubebuilder:validation:Optional
	Table *TableSpec `json:"table,omitempty" protobuf:"bytes,7,rep,name=table"`
	// Stream define the specification of the stream
	// +kubebuilder:validation:Optional
	Stream *StreamSpec `json:"stream,omitempty" protobuf:"bytes,8,rep,name=stream"`
	// Api define the specification of the api
	// +kubebuilder:validation:Optional
	Api *ApiSpec `json:"api,omitempty" protobuf:"bytes,9,rep,name=api"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,10,opt,name=owner"`
}

// FlatFileStatus defines the observed state of FlatFileSpec
type DataSourceStatus struct {
	// number of columns in the data source
	// +kubebuilder:validation:Optional
	Cols int32 `json:"cols,omitempty" protobuf:"varint,1,opt,name=cols"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,2,opt,name=observedGeneration"`
	//+optional
	Conditions []DataSourceCondition `json:"conditions,omitempty" protobuf:"bytes,3,rep,name=conditions"`
}

// +kubebuilder:object:root=true
// DataSourceList contain a list of DataSource objects
type DataSourceList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataSource `json:"items" protobuf:"bytes,2,rep,name=items"`
}
