package v1alpha1

import catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"

// +kubebuilder:validation:Enum="linear";"logistic";"flat"
type GrowthMode string

const (
	Linear   GrowthMode = "linear"
	Logistic GrowthMode = "logistic"
	Flat     GrowthMode = "flat"
)

// Define the seasonality for a period (yearly / monthly / daily)
type PeriodSeasonalitySpec struct {
	// Is this seasonality enabled
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// If enabled, the number of data points in the interval
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Periods *int32 `json:"periods,omitempty" protobuf:"varint,2,opt,name=periods"`
	// +kubebuilder:default:="auto"
	// +kubebuilder:validation:Optional
	Mode *catalog.SeasonalityMode `json:"mode,omitempty" protobuf:"bytes,3,opt,name=mode"`
}

// SeasonalitySpec defines the custom seasonality
type CustomSeasonalitySpec struct {
	// The name of the custom seasonality
	// +kubebuilder:validation:Required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The name of the custom seasonality
	// +kubebuilder:validation:Required
	Period float64 `json:"period,omitempty" protobuf:"bytes,2,opt,name=period"`
	// +kubebuilder:validation:Optional
	FourierOrder *int32 `json:"fourierOrder,omitempty" protobuf:"varint,3,opt,name=fourierOrder"`
}

type ChangePointSpec struct {
	// number of change points
	// +kubebuilder:default = 25
	// +kubebuilder:validation:Optional
	N *int32 `json:"N,omitempty" protobuf:"varint,1,opt,name=N"`
	// Change point range
	// +kubebuilder:default = 0.8
	// +kubebuilder:validation:Optional
	Range *float64 `json:"range,omitempty" protobuf:"bytes,2,opt,name=range"`
}

// Define a range of time series data points
type PeriodSpec struct {
	// The period interval
	// +kubebuilder:validation:Optional
	Interval *catalog.Freq `json:"interval,omitempty" protobuf:"bytes,1,opt,name=interval"`
	// The number of intervals to start
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Start *int32 `json:"start,omitempty" protobuf:"varint,2,opt,name=start"`
	// The windows end day
	// +kubebuilder:validation:Optional
	Length *int32 `json:"length,omitempty" protobuf:"varint,3,opt,name=length"`
}

type RegressorSpec struct {
	// The Name of the regressor
	// +kubebuilder:validation:Optional
	Name *string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The Name of the regressor
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	PriorScale *float64 `json:"priorScale,omitempty" protobuf:"bytes,2,opt,name=priorScale"`
	// The Name of the regressor
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Standardize *bool `json:"standardize,omitempty" protobuf:"varint,3,opt,name=standardize"`
}

type HolidaySpec struct {
	// If true enable holidays
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The name of the holiday column. If the column is empty, no holiday
	// Column name of the first level of grouping
	// +kubebuilder:validation:Optional
	HolidayColumn *string `json:"holidayColumn,omitempty" protobuf:"bytes,2,opt,name=holidayColumn"`
	// +kubebuilder:validation:Optional
	Country *catalog.HolidayCountry `json:"country,omitempty" protobuf:"bytes,3,opt,name=country"`
	// For custom holiday use external dataset
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,4,opt,name=datasetName"`
}

// Define weather an hierarchy exists in the time series
type HierarchySpec struct {
	// If true enable
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// Column name of the first level of grouping
	// +kubebuilder:validation:Optional
	GroupColumn *string `json:"groupColumn,omitempty" protobuf:"bytes,2,opt,name=groupColumn"`
	// Column name of the second level of grouping
	// +kubebuilder:validation:Optional
	SubGroupColumn *string `json:"subGroupColumn,omitempty" protobuf:"bytes,3,opt,name=subGroupColumn"`
	// Column name of the third level of grouping
	// +kubebuilder:validation:Optional
	SubSubGroupColumn *string `json:"subSubGroupColumn,omitempty" protobuf:"bytes,4,opt,name=subSubGroupColumn"`
}

type TimeSeriesDataSpec struct {
	// General Forecast attributes:
	// The name of the time column
	// +kubebuilder:validation:Required
	TimeColumn *string `json:"timeColumn,omitempty" protobuf:"bytes,1,opt,name=timeColumn"`
	// The name of the column holding the value.
	// By default this is the target column from the dataset.
	// +kubebuilder:validation:Required
	TargetColumn *string `json:"targetColumn,omitempty" protobuf:"bytes,2,opt,name=targetColumn"`
	// The format of the datetime column. Used default
	// +kubebuilder:validation:Optional
	DateTimeFormat *string `json:"datetimeFormat,omitempty" protobuf:"bytes,3,opt,name=datetimeFormat"`
	// The Hierarchy spec
	// +kubebuilder:validation:Optional
	Hierarchy HierarchySpec `json:"hierarchy,omitempty" protobuf:"bytes,4,opt,name=hierarchy"`
	// The spec for the holiday
	// +kubebuilder:validation:Optional
	Holiday HolidaySpec `json:"holiday,omitempty" protobuf:"bytes,5,opt,name=holiday"`
	// The historical periods
	// +kubebuilder:validation:Optional
	History PeriodSpec `json:"history,omitempty" protobuf:"bytes,6,opt,name=history"`
	// The forecast periods
	// +kubebuilder:validation:Optional
	Forecast PeriodSpec `json:"forecast,omitempty" protobuf:"bytes,7,opt,name=forecast"`
	// +kubebuilder:validation:Optional
	YearlySeasonality PeriodSeasonalitySpec `json:"yearlySeasonality,omitempty" protobuf:"bytes,8,opt,name=yearlySeasonality"`
	// +kubebuilder:validation:Optional
	WeeklySeasonality PeriodSeasonalitySpec `json:"weeklySeasonality,omitempty" protobuf:"bytes,9,opt,name=weeklySeasonality"`
	// +kubebuilder:validation:Optional
	DailySeasonality PeriodSeasonalitySpec `json:"dailySeasonality,omitempty" protobuf:"bytes,10,opt,name=dailySeasonality"`
	// +kubebuilder:default = "linear"
	// +kubebuilder:validation:Optional
	Growth *GrowthMode `json:"growth,omitempty" protobuf:"bytes,13,opt,name=growth"`
	// The list of additional regressors. The regresors are part of the time series data
	// +kubebuilder:validation:Optional
	Regressors []RegressorSpec `json:"regressors,omitempty" protobuf:"bytes,14,rep,name=regressors"`
	// The list of additional regressors. The regresors are part of the time series data
	// +kubebuilder:validation:Optional
	CustomSeasonalities []CustomSeasonalitySpec `json:"customSeasonalities,omitempty" protobuf:"bytes,15,rep,name=customSeasonalities"`
	// Set an holiday schedule for a country.
	// Change point specification
	// +kubebuilder:validation:Optional
	ChangePoints ChangePointSpec `json:"changepoints,omitempty" protobuf:"bytes,16,opt,name=changepoints"`
	// +kubebuilder:default = 0.8
	// +kubebuilder:validation:Optional
	IntervalWidth *float64 `json:"intevalWidth,omitempty" protobuf:"bytes,17,opt,name=intevalWidth"`
	// +kubebuilder:default = 1000
	// +kubebuilder:validation:Optional
	UncertaintySamples *int32 `json:"uncertaintySamples,omitempty" protobuf:"varint,18,opt,name=uncertaintySamples"`
	// The generate seasonality mode
	// +kubebuilder:default = "additive"
	// +kubebuilder:validation:Optional
	SeasonalityMode *catalog.SeasonalityMode `json:"seasonality,omitempty" protobuf:"bytes,19,opt,name=seasonality"`
}

// The Forecast storage spec specify where to store the forecast after prediction.
type ForecastPostProcessingSpec struct {
	// The name of the connection for a database the result of the forecast
	// If null, the system will insert the forecast in the database.
	// +kubebuilder:validation:Optional
	ConnectionName *string `json:"connectionName,omitempty" protobuf:"bytes,1,opt,name=connectionName"`
	// Specify if we should generate a forecast using the model
	// If true, the system will perform a forecast and update the forecast connection.
	// Default it true
	// +kubebuilder:validation:Optional
	Forecast *bool `json:"forecast,omitempty" protobuf:"varint,2,opt,name=forecast"`
}

// ForecastingSpec
type ForecastSpec struct {
	// Specification of the forecast data.
	// +kubebuilder:validation:Optional
	Data TimeSeriesDataSpec `json:"data,omitempty" protobuf:"bytes,1,opt,name=data"`
	// The confidence levels for the forecast, each level must be between 1-100.
	// +kubebuilder:default = 95
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=0
	ConfidenceInterval *int32 `json:"confidenceIntervals,omitempty" protobuf:"varint,2,opt,name=confidenceInterval"`
	// The backtest specification, the system supports back testing with expanding windows.
	// +kubebuilder:validation:Optional
	Backtest BacktestSpec `json:"backtest,omitempty" protobuf:"bytes,3,opt,name=backtest"`
	// Post processing
	// +kubebuilder:validation:Optional
	PostPrecessing ForecastPostProcessingSpec `json:"postProcessing,omitempty" protobuf:"bytes,4,opt,name=postProcessing"`
	// If true generate the plots
	// +kubebuilder:default = true
	// +kubebuilder:validation:Optional
	Plot *bool `json:"plot,omitempty" protobuf:"varint,5,opt,name=plot"`
	// +kubebuilder:default = true
	// +kubebuilder:validation:Optional
	PlotChangePoints *bool `json:"plotChangePoints,omitempty" protobuf:"varint,6,opt,name=plotChangePoints"`
}

// BacktestSpec specify the back test
type BacktestSpec struct {
	// If true, use sliding windows, else use expanding windows
	// +kubebuilder:default = false
	// +kubebuilder:validation:Optional
	Sliding *bool `json:"sliding,omitempty" protobuf:"varint,1,opt,name=sliding"`
	// Number of splits. Default is 5
	// +kubebuilder:default = 5
	// +kubebuilder:validation:Optional
	Splits *int32 `json:"splits,omitempty" protobuf:"varint,2,opt,name=splits"`
	// Max size for a single training set
	// +kubebuilder:default = 0
	// +kubebuilder:validation:Optional
	MaxTrainSize *int32 `json:"maxTrainSize,omitempty" protobuf:"varint,3,opt,name=maxTrainSize"`
	// The number of data points to forecast on.
	// +kubebuilder:default = 0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	TestSize *int32 `json:"Horizon,omitempty" protobuf:"varint,4,opt,name=Horizon"`
	// The number of data points between each windows
	// +kubebuilder:default = 0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	Gap *int32 `json:"gap,omitempty" protobuf:"varint,5,opt,name=gap"`
}
