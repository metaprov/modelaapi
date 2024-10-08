package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// RecipeConditionType is the condition on the Recipe
type RecipeConditionType string

// / RecipeName Condition
const (
	RecipeReady = "Ready"
	RecipeSaved = "Saved"
)

// +kubebuilder:object:root=true
// +kubebuilder:resource:path=recipes,shortName=rc,singular=recipe,categories={data,modela,all}
// +kubebuilder:storageversion
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Description",type="string",JSONPath=".spec.description"
// +kubebuilder:printcolumn:name="Last Run",type="date",JSONPath=".status.lastRun.at",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// Recipe represents a single batch of data
type Recipe struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              RecipeSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status RecipeStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// RecipeList contains a list of Recipes
// +kubebuilder:object:root=true
type RecipeList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Recipe `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// RecipeSpec defines the desired state of a dataset
type RecipeSpec struct {
	// Owner is the owner of the recipe
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// VersionName is the data product version of the recipe
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=63
	// required.
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// Description is the user provided description
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// Input is the input recipe spec
	Input RecipeInputSpec `json:"input,omitempty" protobuf:"bytes,4,opt,name=input"`
	// Steps are the list of recipe steps
	Steps []RecipeStep `json:"steps,omitempty" protobuf:"bytes,5,rep,name=steps"`
	// Output is the desired output
	Output RecipeOutputSpec `json:"output,omitempty" protobuf:"bytes,6,opt,name=output"`
	// Sample specify the sampling paramters when viewing the recipe
	// +kubebuilder:validation:Optional
	Sample SampleSpec `json:"sample,omitempty" protobuf:"bytes,7,opt,name=sample"`
	// Resource define the resource requirements to run the recipe
	// +kubebuilder:validation:Optional
	Resources catalog.ResourceSpec `json:"resources,omitempty" protobuf:"bytes,8,opt,name=resources"`
	// Timeout is the deadline setup on jobs for this recipe.
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Optional
	Timeout *int64 `json:"timeout,omitempty" protobuf:"varint,10,opt,name=timeout"`
	// TTL.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	TTL *int32 `json:"ttl,omitempty" protobuf:"varint,11,opt,name=ttl"`
	// Unit tests templates operating on the recipe run.
	// +kubebuilder:validation:Optional
	UnitTestsTemplate catalog.TestSuite `json:"unitTestsTemplate,omitempty" protobuf:"bytes,12,opt,name=unitTestsTemplate"`
}

// RecipeStatus defines the observed state of Recipe
type RecipeStatus struct {
	//ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Last run is the last time a data pipeline run was created
	//+kubebuilder:validation:Optional
	LastRun catalog.LastRunStatus `json:"lastRun,omitempty" protobuf:"bytes,2,opt,name=lastRun"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,4,opt,name=updatedAt"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []metav1.Condition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,7,rep,name=conditions"`
}

// RecipeStep defines one step in the recipe
type RecipeStep struct {
	Op         RecipeStepOperation `json:"op,omitempty" protobuf:"bytes,1,opt,name=op"`
	Parameters []*RecipeStepParam  `json:"parameters,omitempty" protobuf:"bytes,2,rep,name=parameters"`
}

// RecipeStepParam is a key value parameter of the recipe
type RecipeStepParam struct {
	Name  string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	Value string `json:"value,omitempty" protobuf:"bytes,2,opt,name=value"`
}

// RecipeStepOperation is the operation name of one step in the recipe
type RecipeStepOperation string

const (

	// Aggregate function
	AnyStepOp                   RecipeStepOperation = "any"
	AnyIfStepOp                 RecipeStepOperation = "any-if"
	ApproximateMedianStepOp     RecipeStepOperation = "approximate-median"
	ApproximatePercentileStepOp RecipeStepOperation = "approximate-percentile"
	ApproximateQuartileStepOp   RecipeStepOperation = "approximate-quartile"
	AverageStepOp               RecipeStepOperation = "average"
	AverageIfStepOp             RecipeStepOperation = "average-if"
	CorrelStepOp                RecipeStepOperation = "correl"
	CountAStepOp                RecipeStepOperation = "counta"
	CountAIfStepOp              RecipeStepOperation = "counta-if"
	CountDistinctStepOp         RecipeStepOperation = "counta-distinct"
	CountDistinctIfStepOp       RecipeStepOperation = "counta-distinct-if"
	CountStepOp                 RecipeStepOperation = "count"
	CountIfStepOp               RecipeStepOperation = "count-if"
	CovarStepOp                 RecipeStepOperation = "covar"
	KthLargestStepOp            RecipeStepOperation = "kth-largest"
	KthLargestIfStepOp          RecipeStepOperation = "kth-largest-if"
	KthLargestUniqueStepOp      RecipeStepOperation = "kth-largest-unique"
	KthLargestUniqueIfStepOp    RecipeStepOperation = "kth-largest-unique-if"
	ListStepOp                  RecipeStepOperation = "list"
	ListIfStepOp                RecipeStepOperation = "list-if"
	MaxStepOp                   RecipeStepOperation = "max"
	MaxIfStepOp                 RecipeStepOperation = "max-if"
	MedianStepOp                RecipeStepOperation = "median"
	MinStepOp                   RecipeStepOperation = "min"
	MinIfStepOp                 RecipeStepOperation = "min-if"
	ModeStepOp                  RecipeStepOperation = "mode"
	ModeIfStepOp                RecipeStepOperation = "mode-if"
	PercentileStepOp            RecipeStepOperation = "percentile"
	QuartileStepOp              RecipeStepOperation = "quartile"
	StdDevStepOp                RecipeStepOperation = "stddev"
	StdDevIfStepOp              RecipeStepOperation = "stddev-if"
	SumStepOp                   RecipeStepOperation = "sum"
	SumIfStepOp                 RecipeStepOperation = "sum-if"
	UniqueStepOp                RecipeStepOperation = "unique"
	VarStepOp                   RecipeStepOperation = "var"
	VarIfStepOp                 RecipeStepOperation = "var-if"

	// Logical functions
	OrStepOp  RecipeStepOperation = "or"
	AndStepOp RecipeStepOperation = "and"
	NotStepOp RecipeStepOperation = "not"

	// Comparison
	ComparisonStepOp       RecipeStepOperation = "comparison"
	IsEvenStepOp           RecipeStepOperation = "is-even"
	IsOddStepOp            RecipeStepOperation = "is-odd"
	InStepOp               RecipeStepOperation = "in"
	MatchesStepOp          RecipeStepOperation = "matches"
	EqualStepOp            RecipeStepOperation = "equal"
	NotEqualStepOp         RecipeStepOperation = "not-equal"
	GreaterThanStepOp      RecipeStepOperation = "greater-than"
	GreaterThanEqualStepOp RecipeStepOperation = "greater-than-equal"
	LessThanStepOp         RecipeStepOperation = "less-than"
	LessThanEqualOp        RecipeStepOperation = "less-than-equal"

	// Math
	AddStepOp           RecipeStepOperation = "add"
	SubstractStepOp     RecipeStepOperation = "subtract"
	MultiplyStepOp      RecipeStepOperation = "multiply"
	DivideOp            RecipeStepOperation = "divide"
	ModStepOp           RecipeStepOperation = "mod"
	NegateStepOp        RecipeStepOperation = "negate"
	SignStepOp          RecipeStepOperation = "sign"
	LcmStepOp           RecipeStepOperation = "lcm"
	AbsoluteStepOp      RecipeStepOperation = "absolute"
	ExponentStepOp      RecipeStepOperation = "exponent"
	LogStepOp           RecipeStepOperation = "log"
	LnStepOp            RecipeStepOperation = "ln"
	PowerStepOp         RecipeStepOperation = "power"
	SquareRootStepOp    RecipeStepOperation = "sqr"
	CeilingStepOp       RecipeStepOperation = "ceiling"
	FloorStepOp         RecipeStepOperation = "floor"
	RoundStepOp         RecipeStepOperation = "round"
	TruncStepOp         RecipeStepOperation = "trunc"
	PIStepOp            RecipeStepOperation = "pi"
	RandomStepOp        RecipeStepOperation = "random"
	RandomBetweenStepOp RecipeStepOperation = "random-between"

	// Trig
	SinStepOp     RecipeStepOperation = "sin"
	CosStepOp     RecipeStepOperation = "cos"
	TanStepOp     RecipeStepOperation = "tan"
	ASinStepOp    RecipeStepOperation = "asin"
	ACosStepOp    RecipeStepOperation = "acos"
	ATanStepOp    RecipeStepOperation = "atan"
	SinHStepOp    RecipeStepOperation = "sinh"
	CosHStepOp    RecipeStepOperation = "cosh"
	TanHStepOp    RecipeStepOperation = "tanh"
	ASinHStepOp   RecipeStepOperation = "asinh"
	ACosHStepOp   RecipeStepOperation = "acosh"
	ATanHStepOp   RecipeStepOperation = "atanh"
	DegreesOp     RecipeStepOperation = "degrees"
	RadiansStepOp RecipeStepOperation = "radians"

	// Date and time functions
	DateStepOp                   RecipeStepOperation = "date"
	TimeStepOp                   RecipeStepOperation = "time"
	DateTimeStepOp               RecipeStepOperation = "date-time"
	DateAddStepOp                RecipeStepOperation = "date-add"
	DateDiffStepOp               RecipeStepOperation = "date-diff"
	DateFormatStepOp             RecipeStepOperation = "date-format"
	UnixTimeFormatStepOp         RecipeStepOperation = "unix-time-format"
	MonthStepOp                  RecipeStepOperation = "month"
	MonthNameStepOp              RecipeStepOperation = "month-name"
	YearStepOp                   RecipeStepOperation = "year"
	DayStepOp                    RecipeStepOperation = "day"
	WeekNumberStepOp             RecipeStepOperation = "week-number"
	WeekDayStepOp                RecipeStepOperation = "week-day"
	HourStepOp                   RecipeStepOperation = "hour"
	MinuteStepOp                 RecipeStepOperation = "minute"
	SecondStepOp                 RecipeStepOperation = "second"
	UnixTimeStepOp               RecipeStepOperation = "unix-time"
	NowStepOp                    RecipeStepOperation = "now"
	TodayStepOp                  RecipeStepOperation = "today"
	ParseDateStepOp              RecipeStepOperation = "parse-date"
	NetworkDaysStepOp            RecipeStepOperation = "network-days"
	NetworkDaysIntlStepOp        RecipeStepOperation = "network-days-intl"
	MinDateStepOp                RecipeStepOperation = "min-date"
	MaxDateStepOp                RecipeStepOperation = "max-date"
	ModeDateStepOp               RecipeStepOperation = "mode-date"
	WorkdayStepOp                RecipeStepOperation = "workday"
	WorkDayIntlStepOp            RecipeStepOperation = "workday-intl"
	ConvertFromUtcStepOp         RecipeStepOperation = "convert-from-utc"
	ConvertToUtcStepOp           RecipeStepOperation = "convert-to-utc"
	ConvertTimeZoneStepOp        RecipeStepOperation = "convert-time-zone"
	MinDateIfStepOp              RecipeStepOperation = "min-date-if"
	MaxDateIfStepOp              RecipeStepOperation = "max-date-if"
	ModeDateIfStepOp             RecipeStepOperation = "model-date-if"
	KthLargestDateStepOp         RecipeStepOperation = "kth-largest-date"
	KthLargestUniqueDateStepOp   RecipeStepOperation = "kth-largest-unique-date"
	KthLargestUniqueDateIfStepOp RecipeStepOperation = "kth-largest-unique-date-step"
	KthLargestDateIfStepOp       RecipeStepOperation = "kth-largest-date-if"
	WeekDayNameStepOp            RecipeStepOperation = "week-day-name"

	// String
	CharStepOp                   RecipeStepOperation = "char"
	UnicodeStepOp                RecipeStepOperation = "unicode"
	UpperStepOp                  RecipeStepOperation = "upper"
	LowerStepOp                  RecipeStepOperation = "lower"
	ProperStepOp                 RecipeStepOperation = "proper"
	TrimStepOp                   RecipeStepOperation = "trim"
	RemoveWhitespaceStepOp       RecipeStepOperation = "remove-white-spaces"
	RemoveSymbolsStepOp          RecipeStepOperation = "remove-symbols"
	LenStepOp                    RecipeStepOperation = "len"
	FindStepOp                   RecipeStepOperation = "find"
	RightFindStepOp              RecipeStepOperation = "right-find"
	SubstringStepOp              RecipeStepOperation = "substring"
	SubstitueStepOp              RecipeStepOperation = "substitute"
	LeftStepOp                   RecipeStepOperation = "left"
	RightStepOp                  RecipeStepOperation = "right"
	PadStepOp                    RecipeStepOperation = "pad"
	MergeStringStepOp            RecipeStepOperation = "merge-string"
	StartsWithStepOp             RecipeStepOperation = "starts-with"
	EndsWithStepOp               RecipeStepOperation = "ends-with"
	RepeatStepOp                 RecipeStepOperation = "repeat"
	ExactStepOp                  RecipeStepOperation = "exact"
	StringGreaterThanStepOp      RecipeStepOperation = "string-greater-than"
	StringGreaterThanEqualStepOp RecipeStepOperation = "string-greater-equal"
	StringLessThanStepOp         RecipeStepOperation = "string-less-than"
	StringLessThanEqualStepOp    RecipeStepOperation = "string-less-than-equal"
	DoubleMetaphoneStepOp        RecipeStepOperation = "double-metaphone"
	DoubleMetaphoneEqualsStepOp  RecipeStepOperation = "double-metaphone-equals"
	TransliterateStepOp          RecipeStepOperation = "transliterate"
	TrimQuotesStepOp             RecipeStepOperation = "trim-quotes"
	Base64EncodeStepOp           RecipeStepOperation = "base64-encode"
	Base64DecodeStepOp           RecipeStepOperation = "base64-decode"

	// Type functions
	IfMissingStepOp  RecipeStepOperation = "if-missing"
	IsMissingStepOp  RecipeStepOperation = "is-missing"
	ParseIntStepOp   RecipeStepOperation = "parse-int"
	ParseBoolStepOp  RecipeStepOperation = "parse-bool"
	ParseFloatStepOp RecipeStepOperation = "parse-float"

	// windows functions
	PrevStepOp                    RecipeStepOperation = "prev"
	NextStepOp                    RecipeStepOperation = "next"
	FillStepOp                    RecipeStepOperation = "fill"
	RankStepOp                    RecipeStepOperation = "rank"
	DenseRankStepOp               RecipeStepOperation = "dense-rank"
	RollingAvgStepOp              RecipeStepOperation = "rolling-avg"
	RollingModeStepOp             RecipeStepOperation = "rolling-mode"
	RollingMaxStepOp              RecipeStepOperation = "rolling-max"
	RollingMinStepOp              RecipeStepOperation = "rolling-min"
	RollingSumStepOp              RecipeStepOperation = "rolling-sum"
	RollingStdDevStepOp           RecipeStepOperation = "rolling-std-dev"
	RollingStdDevSampStepOp       RecipeStepOperation = "rolling-std-dev-samp"
	RollingVarianceStepOp         RecipeStepOperation = "rolling-variance"
	RollingVarianceSampStepOp     RecipeStepOperation = "rolling-variance-samp"
	RollingCountAStepOp           RecipeStepOperation = "rolling-counta"
	RollingKthLargestStepOp       RecipeStepOperation = "rolling-k-largest"
	RollingKthLargestUniqueStepOp RecipeStepOperation = "rolling-k-largest-unique"
	RollingListStepOp             RecipeStepOperation = "rolling-list"
	RowNumberStepOp               RecipeStepOperation = "row-number"
	SessionStepOp                 RecipeStepOperation = "session"

	// other functions
	IpToIntStepOp         RecipeStepOperation = "ip-to-int"
	IntToIpStepOp         RecipeStepOperation = "int-to-ip"
	UrlParamsStepOp       RecipeStepOperation = "url-params"
	COALESCEStepOp        RecipeStepOperation = "coalesce"
	SourceRowNumberStepOp RecipeStepOperation = "source-row-number"
	IfStepOp              RecipeStepOperation = "if"
	CaseStepOp            RecipeStepOperation = "case"
	RangeStepOp           RecipeStepOperation = "range"
	HostStepOp            RecipeStepOperation = "host"
	DomainStepOp          RecipeStepOperation = "domain"
	SubDomainStepOp       RecipeStepOperation = "subdomain"

	// Basic cleaning
	DeleteStep         RecipeStepOperation = "delete"
	DuplicateStep      RecipeStepOperation = "duplicate"
	MoveAfterStep      RecipeStepOperation = "move-after"
	MoveBeforeStep     RecipeStepOperation = "move-before"
	MoveToEndStep      RecipeStepOperation = "move-to-end"
	MoveToIndexStep    RecipeStepOperation = "move-to-index"
	MoveToStartStep    RecipeStepOperation = "move-to-start"
	RenameStep         RecipeStepOperation = "rename"
	ToBoolColumnStep   RecipeStepOperation = "to-boolean-column"
	ToDoubleColumnStep RecipeStepOperation = "to-double-column"
	ToNumberColumnStep RecipeStepOperation = "to-number-column"
	ToStringColumnStep RecipeStepOperation = "to-string-column"

	CapitalCaseStepOp              RecipeStepOperation = "capital-case"
	FormatDateStepOp               RecipeStepOperation = "format-date"
	AddDoubleQuotesStepOp          RecipeStepOperation = "add-double-quotes"
	AddPrefixStepOp                RecipeStepOperation = "add-prefix"
	AddSingleQuotesStepOp          RecipeStepOperation = "add-single-quotes"
	AddSuffixStepOp                RecipeStepOperation = "add-suffix"
	ExtractBetweenDelimitersStepOp RecipeStepOperation = "extract-between-delimiters"
	ExtractBetweenPositionsStepOp  RecipeStepOperation = "extract-between-position"
	ExtractPatternStepOp           RecipeStepOperation = "extract-pattern"
	RemoveCombinedStepOp           RecipeStepOperation = "remove-combined"
	ReplaceBetweenDelimitersStepOp RecipeStepOperation = "replace-between-delimiters"
	ReplaceBetweenPositionsStepOp  RecipeStepOperation = "replace-between-positions"
	ReplaceTextStepOp              RecipeStepOperation = "replace-text"

	FillWithAvgStepOp       RecipeStepOperation = "fill-with-average"
	FillWithCustomStepOp    RecipeStepOperation = "fill-with-custom"
	FillWithEmptyStepOp     RecipeStepOperation = "fill-with-empty"
	FillWithLastValidStepOp RecipeStepOperation = "fill-with-last-valid"
	FillWithMedianStepOp    RecipeStepOperation = "fill-with-median"
	FillWithModeStepOp      RecipeStepOperation = "fill-with-mode"
	FillWithMostFreqStepOp  RecipeStepOperation = "fill-with-most-freq"
	FillWithNullStepOp      RecipeStepOperation = "fill-with-null"
	FillWithSumStepOp       RecipeStepOperation = "fill-with-sum"
	RemoveDuplicatesStepOp  RecipeStepOperation = "remove-duplicates"
	RemoveMissingStepOp     RecipeStepOperation = "remove-missing"
	// FeatureColumn Structure

	FlagColumnFromNullStepOp           RecipeStepOperation = "flag-column-from-null"
	FlagColumnFromPatternStepOp        RecipeStepOperation = "flag-column-from-pattern"
	MergeStepOp                        RecipeStepOperation = "merge"
	SplitColumnsBetweenDelimiterStepOp RecipeStepOperation = "split-columns-between-delimiter"
	SplitColumnsBetweenPositionsStepOp RecipeStepOperation = "split-columns-between-positions"
	SplitColumnsFromEndStepOp          RecipeStepOperation = "split-columns-from-end"
	SplitColumnsFromStartStepOp        RecipeStepOperation = "split-columns-from-start"
	SplitColumnMultipleDelimiterStepOp RecipeStepOperation = "split-column-multiple-delimiter"
	SplitColumnSingleDelimiterStepOp   RecipeStepOperation = "split-column-single-delimiter"
	SplitColumnWithIntervalsStepOp     RecipeStepOperation = "split-column-with-intervals"

	CatMappingStepOp   RecipeStepOperation = "category-mapping"
	GroupByStepOp      RecipeStepOperation = "group-by"
	JoinStepOp         RecipeStepOperation = "join"
	OneHotEncodeStepOp RecipeStepOperation = "one-hot-encode"
	PivotStepOp        RecipeStepOperation = "pivot"
	TokenizeStepOp     RecipeStepOperation = "tokenize"
	UnionStepOp        RecipeStepOperation = "union"
	UnpivotStepOp      RecipeStepOperation = "unpivot"
)

// SampleSpec specifies how the contents of a dataset should be sampled
type SampleSpec struct {
	// The type of sampling (stratified sampling, by default). Modela will
	// sample rows until their contents exceed a maximum of 1Mb
	// +kubebuilder:default:="stratified"
	// +kubebuilder:validation:Optional
	Type catalog.SamplingType `json:"type,omitempty" protobuf:"bytes,2,opt,name=type"`
	// The number of rows to sample (by default, 500)
	// +kubebuilder:default:=500
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=1000
	// +kubebuilder:validation:Optional
	Rows *int32 `json:"rows,omitempty" protobuf:"varint,3,opt,name=rows"`
	// The percentage of rows to sample
	// +kubebuilder:default:=100
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	Percent *int32 `json:"percent,omitempty" protobuf:"varint,4,opt,name=percent"`
	// The filter formula, applicable if the sample type is a filter
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Filter *string `json:"filter,omitempty" protobuf:"bytes,5,opt,name=filter"`
}

// RecipeInputSpec specify the input for a recipe
type RecipeInputSpec struct {
	// DatasetName is the name of the dataset
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// Location is the folder of the actual data resides, if not using dataset
	// +required.
	Location *catalog.DataLocation `json:"location,omitempty" protobuf:"bytes,2,opt,name=location"`
	// Format is the dataset format
	// +kubebuilder:default:=csv
	Format *FlatFileType `json:"format,omitempty" protobuf:"bytes,3,opt,name=format"`
}

// RecipeOutputSpec for the recipe output
type RecipeOutputSpec struct {
	// CreateDataset if true, create a new dataset when the recipe is done.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	CreateDataset *bool `json:"createDataset,omitempty" protobuf:"varint,1,opt,name=createDataset"`
	// DatasetName is the name of the dataset output to the recipe
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,2,opt,name=datasetName"`
	// Location is the data location folder of the actual data resides.
	// +kubebuilder:validation:Required
	// +required
	Location *catalog.DataLocation `json:"location,omitempty" protobuf:"bytes,3,opt,name=location"`
}
