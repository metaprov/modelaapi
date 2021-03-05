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
	DatasourceInDb  DataSourceConditionType = "InDb"
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

type Table struct {
	// +kubebuilder:validation:MaxLength=64
	// +kubebuilder:validation:Pattern="[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*"
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// User provided description
	// +kubebuilder:default =""
	// +optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The actual query. this is required.
	// +optional
	Query *string `json:"query,omitempty" protobuf:"bytes,3,opt,name=query"`
	// Type of server
	// +optional
	ServerType *DatabaseServerType `json:"serverType,omitempty" protobuf:"bytes,4,opt,name=serverType"`
	// ConnectionString to connect to the database server
	// +kubebuilder:validation:MaxLength=128
	// +optional
	ConnectionString *string `json:"connectionString,omitempty" protobuf:"bytes,5,opt,name=connectionString"`
	// Connection refer to a connection object that point to secret
	// +optional
	Connection v1.ObjectReference `json:"connectionRef,omitempty" protobuf:"bytes,6,opt,name=connectionRef"`
	// The version of the server.
	// +optional
	ServerVersion *string `json:"serverVersion,omitempty" protobuf:"bytes,7,opt,name=serverVersion"`
}

// the data source type
// +kubebuilder:validation:Enum="flatfile";"table";
type DataSourceType string

const (
	FlatFileDataSource DataSourceType = "flatfile"
	TableDataSource    DataSourceType = "table"
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
	// +optional
	FileType *FlatFileType `json:"fileType,omitempty" protobuf:"bytes,4,opt,name=fileType"`
	// Refers to the character used to separate fields.
	// Default to comma
	// +optional
	Delimiter *Delimiter `json:"delimiter,omitempty" protobuf:"bytes,5,opt,name=delimiter"`
	//The quata char.
	// +optional
	QuoteChar QuoteChar `json:"quote,omitempty" protobuf:"bytes,6,opt,name=quote"`
	// the char used to escape the delimiter when quoting
	// +optional
	EscapeChar EscapeChar `json:"escapeChar,omitempty" protobuf:"bytes,7,opt,name=escapeChar"`
	//CommentCharacter(s) to split comments off the end of lines.
	// +optional
	CommentChars string `json:"commentChars,omitempty" protobuf:"bytes,8,opt,name=commentChars"`
	//Check if there is an header
	// +optional
	Header *bool `json:"header,omitempty" protobuf:"bytes,9,opt,name=header"`
	//The number of rows to skip
	// +optional
	SkipRows *int32 `json:"skipRows,omitempty" protobuf:"varint,10,opt,name=skipRows"`
	//NullValue	is a sequence of values to replace with NA.
	// +optional
	NullValues *string `json:"nullValues,omitempty" protobuf:"bytes,11,opt,name=nullValues"`
	//Encoding for Unicode (e.g., 'utf-8' for UTF-8 encoded text).
	// +optional
	Encoding *catalog.FileEncoding `json:"encoding,omitempty" protobuf:"bytes,12,opt,name=encoding"`
	//The maximum number of rows to read.
	// +optional
	MaxRows *int32 `json:"maxRows,omitempty" protobuf:"varint,13,opt,name=maxRows"`
	//If true, the import will fail if there is an error
	// +optional
	Strict *bool `json:"strict,omitempty" protobuf:"bytes,14,opt,name=strict"`
}

type Schema struct {
	// Time series schema. Set time series specific parameters.
	// +optional
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
	// +optional
	FeatureName *string `json:"featureName,omitempty" protobuf:"bytes,2,opt,name=featureName"`
	// Type specify the data type of the attribute
	// required
	DataType catalog.DataType `json:"datatype" protobuf:"bytes,3,opt,name=datatype"`
	// DataFormat is the domain of the column. A domain constrain the set of values.
	// +optional
	Format *catalog.DataFormat `json:"format,omitempty" protobuf:"bytes,4,opt,name=format"`
	// Description is a description of the feature
	// +kubebuilder:default =""
	// +kubebuilder:validation:MaxLength=63
	// +optional
	Description *string `json:"description,omitempty" protobuf:"bytes,5,opt,name=description"`
	// Ignore specify if the attribute should be ignored when building the model
	// default is false
	// +optional
	Ignore *bool `json:"ignore,omitempty" protobuf:"bytes,6,opt,name=ignore"`
	// Label should be true if this attribute is the predictable target
	// Default is false
	// +optional
	Label *bool `json:"label,omitempty" protobuf:"bytes,7,opt,name=label"`
	// Nullable indicates if a column can contain string
	// Default is false
	// +optional
	Nullable *bool `json:"nullable,omitempty" protobuf:"bytes,8,opt,name=nullable"`
	// PrimaryKey denotes if this column is part of the file key.
	// +optional
	PK *bool `json:"pk,omitempty" protobuf:"bytes,9,opt,name=pk"`
	// MultipleOf
	// +optional
	MultipleOf *int32 `json:"multipleOf,omitempty" protobuf:"varint,10,opt,name=multipleOf"`
	// MaximumFloat
	// +optional
	Maximum *float64 `json:"maximum,omitempty" protobuf:"bytes,11,opt,name=maximum"`
	// ExclusiveMaximum
	// +optional
	ExclusiveMaximum *bool `json:"exclusiveMaximum,omitempty" protobuf:"bytes,12,opt,name=exclusiveMaximum"`
	// MinimumFloat
	// +optional
	Minimum *float64 `json:"minimum,omitempty" protobuf:"bytes,13,opt,name=minimum"`
	// ExclusiveMinimum
	// +optional
	ExclusiveMinimum *bool `json:"exclusiveMinimum,omitempty" protobuf:"bytes,14,opt,name=exclusiveMinimum"`
	// MaxLength
	// +optional
	MaxLength *int32 `json:"maxLength,omitempty" protobuf:"varint,15,opt,name=maxLength"`
	// MinLength
	// +optional
	MinLength *int32 `json:"minLength,omitempty" protobuf:"varint,16,opt,name=minLength"`
	// Pattern
	// Default is empty
	// +optional
	Pattern *string `json:"pattern,omitempty" protobuf:"bytes,17,opt,name=pattern"`
	// Required
	// +optional
	Required *bool `json:"required,omitempty" protobuf:"bytes,18,opt,name=required"`
	// Title
	// +kubebuilder:validation:MaxLength=63
	// +optional
	Title *string `json:"title,omitempty" protobuf:"bytes,19,opt,name=title"`
	// Example
	// +optional
	Example *string `json:"example,omitempty" protobuf:"bytes,20,opt,name=example"`
	// External Docs
	// +optional
	ExternalDocs *string `json:"externalDocs,omitempty" protobuf:"bytes,21,opt,name=externalDocs"`
	// Enum
	// +optional
	Enum []string `json:"enum,omitempty" protobuf:"bytes,22,rep,name=enum"`
	// Preprocessor hint constrain the transformer
	// Default is empty
	// +optional
	TransformerHint *string `json:"transformerHint,omitempty" protobuf:"bytes,23,opt,name=transformerHint"`
	// Max Items in the data in case of a list
	// +optional
	MaxItems *int32 `json:"maxItems,omitempty" protobuf:"varint,24,opt,name=maxItems"`
	// Min Items in the data in case of a list.
	// +optional
	MinItems *int32 `json:"minItems,omitempty" protobuf:"varint,25,opt,name=minItems"`
	// Enforce that all the items in the list are unique
	// +optional
	UniqueItems *bool `json:"uniqueItems,omitempty" protobuf:"bytes,26,opt,name=uniqueItems"`
	// True if this column is used as the time axis in time series foreacst
	// Default is false.
	// +optional
	TimeColumn *bool `json:"timeColumn,omitempty" protobuf:"bytes,27,opt,name=timeColumn"`
}

func (in *Column) Validate() (bool, []metav1.StatusCause) {
	return false, nil
}

// DataSource represent source of the data in the system. The spec consist of schema
// +genclient
// +genclient:noStatus
// +k8s:openapi-gen=true
// +kubebuilder:object:root=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
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
	// +optional
	OwnerName *string `json:"ownerName,omitempty" protobuf:"bytes,1,opt,name=ownerName"`
	// The version of the flat file.
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:default:=""
	// +optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// User provided description of the data source
	// +kubebuilder:default =""
	// +kubebuilder:validation:MaxLength=512
	// +optional
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// The data source schema
	Schema *Schema `json:"schema,omitempty" protobuf:"bytes,4,rep,name=schema"`
	// The data source type.
	Type *DataSourceType `json:"type,omitempty" protobuf:"bytes,5,opt,name=type"`
	// FlatFile access specification
	// +optional
	FlatFile *FlatFileSpec `json:"file,omitempty" protobuf:"bytes,6,rep,name=file"`
	// Table access specification if the data source is a table
	// +optional
	Table *Table `json:"table,omitempty" protobuf:"bytes,7,rep,name=table"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,8,opt,name=owner"`
}

// FlatFileStatus defines the observed state of FlatFileSpec
type DataSourceStatus struct {
	//+optional
	Conditions []DataSourceCondition `json:"conditions,omitempty" protobuf:"bytes,2,rep,name=conditions"`
}

// +kubebuilder:object:root=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// DataSourceList contain a list of DataSource objects
type DataSourceList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataSource `json:"items" protobuf:"bytes,2,rep,name=items"`
}
