package v1alpha1

type PageSpec struct {
	Rows []RowSpec `json:"rows,omitempty" protobuf:"bytes,1,rep,name=rows"`
}

type RowSpec struct {
	Cols []ColumnSpec `json:"cols,omitempty" protobuf:"bytes,1,rep,name=cols"`
}

// The spec for a column in the row. A column can span multiple grid based columns
type ColumnSpec struct {
	// If true this column is an empty spacer
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Spacer *bool `json:"spacer,omitempty" protobuf:"varint,1,opt,name=spacer"`
	// The width in columns, each row is divided into 12 columns
	// +kubebuilder:validation:Optional
	Width *int32 `json:"width,omitempty" protobuf:"varint,2,opt,name=width"`
	// The actual
	Content ComponentSpec `json:",omitempty" protobuf:"bytes,3,opt,name=content"`
}

type ComponentSpec struct {
	// +kubebuilder:validation:Optional
	Title *string `json:"title,omitempty" protobuf:"bytes,1,opt,name=title"`
	// +kubebuilder:validation:Optional
	SubTitle *string `json:"subtitle,omitempty" protobuf:"bytes,2,opt,name=subtitle"`
	// +kubebuilder:validation:Optional
	Footer        *string `json:"footer,omitempty" protobuf:"bytes,3,opt,name=footer"`
	ComponentView `json:",inline" protobuf:"bytes,4,opt,name=content"`
	// only one
}

// Represent the view part of a component. Only one part should be specified per component
type ComponentView struct {
	// +kubebuilder:validation:Optional
	Metric *MetricSpec `json:"metric,omitempty" protobuf:"bytes,1,opt,name=metric"`
	// +kubebuilder:validation:Optional
	Gauge *GaugeSpec `json:"gauge,omitempty" protobuf:"bytes,2,opt,name=gauge"`
	// +kubebuilder:validation:Optional
	Histogram *HistogramSpec `json:"histogram,omitempty" protobuf:"bytes,3,opt,name=histogram"`
	// +kubebuilder:validation:Optional
	Table *TableSpec `json:"table,omitempty" protobuf:"bytes,4,opt,name=table"`
	// +kubebuilder:validation:Optional
	LineChart *LineChartSpec `json:"lineChart,omitempty" protobuf:"bytes,5,opt,name=lineChart"`
	// +kubebuilder:validation:Optional
	BarChart *BarChartSpec `json:"barChart,omitempty" protobuf:"bytes,6,opt,name=barChart"`
	// +kubebuilder:validation:Optional
	ScatterChart *ScatterPlotSpec `json:"scatterPlot,omitempty" protobuf:"bytes,7,opt,name=scatterPlot"`
}

type MetricSpec struct {
	// Dataset is the name of the dataset
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// Column is the name of the column
	// +kubebuilder:validation:Optional
	Column *string `json:"column,omitempty" protobuf:"bytes,2,opt,name=column"`
	// Row is the row number
	// +kubebuilder:validation:Optional
	Row *int32 `json:"row,omitempty" protobuf:"varint,3,opt,name=row"`
	// Scalar the a const value
	// +kubebuilder:validation:Optional
	Scalar *string `json:"scalar,omitempty" protobuf:"bytes,4,opt,name=scalar"`
}

type GaugeSpec struct {
	// Dataset is the name of the dataset
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// Column is the name of the column
	// +kubebuilder:validation:Optional
	Column *string `json:"column,omitempty" protobuf:"bytes,2,opt,name=column"`
	// Row is the row number
	// +kubebuilder:validation:Optional
	Row *int32 `json:"row,omitempty" protobuf:"varint,3,opt,name=row"`
	// Scalar the a const value
	// +kubebuilder:validation:Optional
	Scalar *string `json:"scalar,omitempty" protobuf:"bytes,4,opt,name=scalar"`
}

type TableSpec struct {
	// Dataset is the name of the dataset
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// List of table columns, if empty use call the columns
	// +kubebuilder:validation:Optional
	Columns []string `json:"columns,omitempty" protobuf:"bytes,2,rep,name=columns"`
	// one or more filters
	// +kubebuilder:validation:Optional
	Filters []string `json:"filters,omitempty" protobuf:"bytes,3,rep,name=filters"`
	// GroupBy columns
	// +kubebuilder:validation:Optional
	GroupBy []string `json:"groupby,omitempty" protobuf:"bytes,4,rep,name=groupby"`
	// Row is the row number
	// +kubebuilder:validation:Optional
	Rows *int32 `json:"rows,omitempty" protobuf:"varint,5,opt,name=rows"`
	// Show index column
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ShowIndex *bool `json:"showIndex,omitempty" protobuf:"varint,6,opt,name=showIndex"`
	// Show borther
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Border *bool `json:"border,omitempty" protobuf:"varint,7,opt,name=border"`
}

type LineChartSpec struct {
	// Dataset is the name of the dataset
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// name of the X column
	// +kubebuilder:validation:Optional
	X *string `json:"x,omitempty" protobuf:"bytes,2,opt,name=x"`
	// Y column
	// +kubebuilder:validation:Optional
	Y *string `json:"y,omitempty" protobuf:"bytes,3,opt,name=y"`
	// Show borther
	// +kubebuilder:validation:Optional
	Legend *bool `json:"legend,omitempty" protobuf:"varint,4,opt,name=legend"`
}

// Bar Chart
type BarChartSpec struct {
	// Dataset is the name of the dataset
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// name of the X column
	// +kubebuilder:validation:Optional
	X *string `json:"x,omitempty" protobuf:"bytes,2,opt,name=x"`
	// Y column
	// +kubebuilder:validation:Optional
	Y *string `json:"y,omitempty" protobuf:"bytes,3,opt,name=y"`
	// Show borther
	// +kubebuilder:validation:Optional
	Legend *bool `json:"legend,omitempty" protobuf:"varint,4,opt,name=legend"`
	// Show borther
	// +kubebuilder:validation:Optional
	Sort *bool `json:"sort,omitempty" protobuf:"varint,5,opt,name=sort"`
}

// Histogram chart Chart

type HistogramSpec struct {
	// Dataset is the name of the dataset
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// name of the X column
	// +kubebuilder:validation:Optional
	X *string `json:"x,omitempty" protobuf:"bytes,2,opt,name=x"`
	// Show borther
	// +kubebuilder:validation:Optional
	Bins *int32 `json:"bins,omitempty" protobuf:"varint,3,opt,name=bins"`
}

type ScatterPlotSpec struct {
	// Dataset is the name of the dataset
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,1,opt,name=datasetName"`
	// name of the X column
	// +kubebuilder:validation:Optional
	X *string `json:"x,omitempty" protobuf:"bytes,2,opt,name=x"`
	// name of the Y axis columns
	// +kubebuilder:validation:Optional
	Y *string `json:"y,omitempty" protobuf:"bytes,3,opt,name=y"`
}
