package v1alpha1

import catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"

// +kubebuilder:validation:Enum="linear";"logistic";"flat"
type GrowthMode string

const (
	Linear   GrowthMode = "linear"
	Logistic GrowthMode = "logistic"
	Flat     GrowthMode = "flat"
)

// SeasonalitySpec defines the custom seasonality
type SeasonalitySpec struct {
	// The name of the custom seasonality
	// +kubebuilder:validation:Required
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The name of the custom seasonality
	// +kubebuilder:validation:Required
	Period float64 `json:"period,omitempty" protobuf:"bytes,2,opt,name=period"`
	// +kubebuilder:validation:Optional
	FourierOrder *int32 `json:"fourierOrder,omitempty" protobuf:"bytes,3,opt,name=fourierOrder"`
}

// Define a range of time series data points
type PeriodSpec struct {
	// The period interval
	// +kubebuilder:validation:Optional
	Interval *catalog.Freq `json:"interval,omitempty" protobuf:"bytes,1,opt,name=interval"`
	// The window start day
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Start *int32 `json:"start,omitempty" protobuf:"varint,2,opt,name=start"`
	// The windows end day
	// +kubebuilder:validation:Optional
	End *int32 `json:"end,omitempty" protobuf:"varint,3,opt,name=end"`
}

type RegressorSpec struct {
	// The Name of the regressor
	// +kubebuilder:validation:Optional
	Name *string `json:"interval,omitempty" protobuf:"bytes,1,opt,name=interval"`
	// The Name of the regressor
	// +kubebuilder:validation:Optional
	PriorScale *float64 `json:"priorScale,omitempty" protobuf:"bytes,2,opt,name=priorScale"`
	// The Name of the regressor
	// +kubebuilder:validation:Optional
	Standardize *bool `json:"standardize,omitempty" protobuf:"bytes,3,opt,name=standardize"`
}

type TimeSeriesDataSpec struct {
	// General Forecast attributes:
	// The name of the time column
	// +kubebuilder:validation:Required
	TimeColumn *string `json:"timeColumn,omitempty" protobuf:"bytes,1,opt,name=timeColumn"`
	// The name of the column holding the value.
	// By default this is the target column from the dataset.
	// +kubebuilder:validation:Optional
	TargetColumn *string `json:"targetColumn,omitempty" protobuf:"bytes,2,opt,name=targetColumn"`
	// The format of the datetime column. Used default
	// +kubebuilder:validation:Optional
	DateTimeFormat *string `json:"datetimeFormat,omitempty" protobuf:"bytes,3,opt,name=datetimeFormat"`
	// Column name of the first level of grouping
	// +kubebuilder:validation:Optional
	Level1 *string `json:"level1,omitempty" protobuf:"bytes,4,rep,name=level1"`
	// Column name of the second level of grouping
	// +kubebuilder:validation:Optional
	Level2 *string `json:"level2,omitempty" protobuf:"bytes,5,rep,name=level2"`
	// Column name of the third level of grouping
	// +kubebuilder:validation:Optional
	Level3 *string `json:"level3,omitempty" protobuf:"bytes,6,rep,name=level3"`
	// The historical periods
	// +kubebuilder:validation:Optional
	HistoricalPeriod *PeriodSpec `json:"historical,omitempty" protobuf:"bytes,7,rep,name=historical"`
	// The forecast periods
	// +kubebuilder:validation:Optional
	ForecastPeriod *PeriodSpec `json:"forecast,omitempty" protobuf:"bytes,8,rep,name=forecast"`
	// +kubebuilder:validation:Optional
	YearlySeasonality *catalog.SeasonalityMode `json:"yearlySeasonality,omitempty" protobuf:"bytes,9,rep,name=yearlySeasonality"`
	// +kubebuilder:validation:Optional
	Growth *GrowthMode `json:"growth,omitempty" protobuf:"bytes,10,rep,name=growth"`
	// The list of additional regressors. The regresors are part of the time series data
	// +kubebuilder:validation:Optional
	Regressors []RegressorSpec `json:"regressors,omitempty" protobuf:"bytes,11,rep,name=regressors"`
	// The list of additional regressors. The regresors are part of the time series data
	// +kubebuilder:validation:Optional
	ExtraSeasonalities []SeasonalitySpec `json:"extraSeasonality,omitempty" protobuf:"bytes,12,rep,name=extraSeasonality"`
	// Set an holiday schedule for a country.
	//+optional
	CountryForHoliday *catalog.HolidayCountry `json:"countryForHoliday,omitempty" protobuf:"bytes,13,opt,name=countryForHoliday"`
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
	// Required, the freq of the time series (daily,weekly)
	// +kubebuilder:validation:Optional
	Data TimeSeriesDataSpec `json:"data,omitempty" protobuf:"bytes,1,opt,name=data"`
	// The confidence levels for the forecast, each level must be between 1-100.
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=0
	ConfidenceInterval *int32 `json:"confidenceIntervals,omitempty" protobuf:"varint,2,opt,name=confidenceInterval"`
	// The backtest specification, the system supports back testing with expanding windows.
	// +kubebuilder:validation:Optional
	Backtest BacktestSpec `json:"backtest,omitempty" protobuf:"bytes,3,opt,name=backtest"`
	// Post processing
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
	// +kubebuilder:validation:Optional
	Sliding *bool `json:"sliding,omitempty" protobuf:"varint,1,opt,name=sliding"`
	// The number of data points in each windows used for training.
	// +kubebuilder:default:=80
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	TrainingWindowSize *int32 `json:"trainingWindowsSize,omitempty" protobuf:"varint,2,opt,name=trainingWindowsSize"`
	// The number of data points to forecast on.
	// +kubebuilder:validation:Optional
	ForecastingWindowSize *int32 `json:"forecastingWindowsSize,omitempty" protobuf:"varint,3,opt,name=forecastingWindowsSize"`
	// The number of data points between each windows
	// +kubebuilder:validation:Optional
	SlidingSteps *int32 `json:"slidingSteps,omitempty" protobuf:"varint,4,opt,name=slidingSteps"`
}
