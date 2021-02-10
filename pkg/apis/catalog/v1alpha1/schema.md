AlgorithmSpec
	FrameworkRef v1.LocalObjectReference `json:"frameworkRef,omitempty" protobuf:"bytes,1,opt,name=frameworkRef"`
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	Url string `json:"url,omitempty" protobuf:"bytes,3,opt,name=url"`
	Task MLTask `json:"task" protobuf:"bytes,4,opt,name=task"`
	Sparse bool `json:"sparse,omitempty" protobuf:"bytes,5,opt,name=sparse"`
	HyperParameters []HyperParameterSpec `json:"hyperparameters,omitempty" protobuf:"bytes,6,opt,name=hyperparameters"`

Cloud
	DefaultRegionRef       v1.LocalObjectReference `json:"defaultRegionRef,omitempty" protobuf:"bytes,1,opt,name=defaultRegionRef"`
	DefaultMachineClassRef v1.LocalObjectReference `json:"defaultMachineClassRef,omitempty" protobuf:"bytes,2,opt,name=defaultMachineClassRef"`
	DefaultGpuClassRef     v1.LocalObjectReference `json:"defaultGpuClassRef,omitempty" protobuf:"bytes,3,opt,name=defaultGpuClassRef"`

Datacenter
    Code
    RegionRef

GpuClass
  	CloudRef  v1.LocalObjectReference `json:"cloudRef" protobuf:"bytes,1,opt,name=cloudRef"`
   	RegionRef v1.LocalObjectReference `json:"regionRef" protobuf:"bytes,2,opt,name=regionRef"`
   	Mem       *resource.Quantity      `json:"mem,omitempty" protobuf:"bytes,3,opt,name=mem"`
   	Vcpu      int32                   `json:"vcpu,omitempty" protobuf:"varint,4,opt,name=vcpu"`
   	Gpumem    *resource.Quantity      `json:"gpumem,omitempty" protobuf:"varint,5,opt,name=gpumem"`
   	Storage   string                  `json:"storage,omitempty" protobuf:"bytes,6,opt,name=storage"`

MachineClass
	CloudRef v1.LocalObjectReference `json:"cloudRef" protobuf:"bytes,1,opt,name=cloudRef"`
	RegionRef v1.LocalObjectReference `json:"regionRef" protobuf:"bytes,2,opt,name=regionRef"`
	Mem *resource.Quantity `json:"mem" protobuf:"bytes,3,opt,name=mem"`
	Vcpu int32 `json:"vcpu" protobuf:"varint,4,opt,name=vcpu"`
	Storage string `json:"storage" protobuf:"bytes,5,opt,name=storage"`

MachineImage
    Content
    
MLFramework
	Url string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	Version string `json:"version,omitempty" protobuf:"bytes,3,opt,name=version"`
	Language string `json:"language,omitempty" protobuf:"bytes,4,opt,name=language"`

PretrainedModel
    Image

PublicDataset
	Url         string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
	Description string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	GirRepo     string `json:"gitRepo,omitempty" protobuf:"bytes,3,opt,name=gitRepo"`
	Task        MLTask `json:"task,omitempty" protobuf:"bytes,4,opt,name=task"`
	SizeInBytes int32  `json:"sizeInBytes,omitempty" protobuf:"varint,5,opt,name=sizeInBytes"`
	Rows        int32  `json:"rows,omitempty" protobuf:"varint,6,opt,name=rows"`

Region
	CloudRef v1.LocalObjectReference `json:"cloudRef,omitempty" protobuf:"bytes,1,opt,name=cloudRef"`
	DefaultDatacenterRef v1.LocalObjectReference `json:"defaultDatacenterRef,omitempty" protobuf:"bytes,2,opt,name=defaultDatacenterRef"`

TrainerClass
	Image     string          `json:"image" protobuf:"bytes,1,opt,name=image"`
	Tasks     []MLTask        `json:"tasks" protobuf:"bytes,2,rep,name=tasks,casttype=tasks"`
	Framworks MLFrameworkList `json:"frameworks,omitempty" protobuf:"bytes,3,opt,name=frameworks"`
	Template *v1.PodTemplate `json:"template,omitempty" protobuf:"bytes,4,opt,name=template"`

Corpus
	VersionRef *v1.LocalObjectReference `json:"versionRef,omitempty" protobuf:"bytes,1,opt,name=versionRef"`
	SchemaRef *v1.LocalObjectReference `json:"schemaRef,omitempty" protobuf:"bytes,2,opt,name=schemaRef"`
	MediaType MediaType `json:"mediaType,omitempty" protobuf:"bytes,4,opt,name=mediaType"`
	Encoding string `json:"encoding,omitempty" protobuf:"bytes,15,opt,name=encoding"`

DataProduct
	StakeHolders []StakeHolder `json:"stakeholders,omitempty" protobuf:"bytes,1,opt,name=stakeholders"`
	GitRef v1.ObjectReference `json:"gitRef,omitempty" protobuf:"bytes,2,opt,name=gitRef"`
	ImageRef v1.ObjectReference `json:"imageRef,omitempty" protobuf:"bytes,3,opt,name=imageRef"`
	BucketRef v1.ObjectReference `json:"bucketRef,omitempty" protobuf:"bytes,4,opt,name=bucketRef"`
	Task catalog.MLTask `json:"task,omitempty" protobuf:"bytes,5,opt,name=task"`
	Training v1.ObjectReference `json:"trainingRef" protobuf:"bytes,6,name=trainingRef"`
	Serving v1.ObjectReference `json:"servingRef" protobuf:"bytes,7,name=servingRef"`


DataProductVersion
	ProductRef *v1.ObjectReference `json:"productRef,omitempty" protobuf:"bytes,1,opt,name=productRef"`
	AuthorRef *v1.ObjectReference `json:"authorRef,omitempty" protobuf:"bytes,5,opt,name=authorRef"`
	PrevRef *v1.LocalObjectReference `json:"prevRef,omitempty" protobuf:"bytes,6,opt,name=prevRef"`
	Version string `json:"version,omitempty" protobuf:"bytes,2,opt,name=version"`
	PublishedModelRef *v1.LocalObjectReference `json:"publishedModelRef,omitempty" protobuf:"bytes,3,opt,name=publishedModelRef"`
	Comment string `json:"comment,omitempty" protobuf:"bytes,4,opt,name=comment"`
	Baseline *bool `json:"baseline,omitempty" protobuf:"bytes,7,opt,name=baseline"`

Dataset
	VersionRef *v1.LocalObjectReference `json:"versionRef,omitempty" protobuf:"bytes,1,opt,name=versionRef"`
	DataSourceRef *v1.LocalObjectReference `json:"datasourceRef,omitempty" protobuf:"bytes,2,opt,name=datasourceRef"`
	SchemaRef *v1.LocalObjectReference `json:"schemaRef,omitempty" protobuf:"bytes,3,opt,name=schemaRef"`
	AutoGen *bool `json:"autogen,omitempty" protobuf:"bytes,5,opt,name=autogen"`
	Rows *int32 `json:"rows,omitempty" protobuf:"varint,6,opt,name=rows"`
	Report *bool `json:"report,omitempty" protobuf:"bytes,7,opt,name=report"`
	Validate *bool `json:"validate,omitempty" protobuf:"bytes,10,opt,name=validate"`
	Files []string `json:"files,omitempty" protobuf:"bytes,11,opt,name=files"`
	LabelColumn string `json:"labelColumn,omitempty" protobuf:"bytes,12,opt,name=labelColumn"`
	Labeled *bool `json:"labeled" protobuf:"bytes,13,opt,name=labeled"`
	Task catalog.MLTask `json:"task" protobuf:"bytes,14,opt,name=task"`

DatasetColumn
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	Min float32 `json:"min,omitempty" protobuf:"bytes,2,opt,name=min"`
	Max float32 `json:"max,omitempty" protobuf:"bytes,3,opt,name=max"`
	Mean float32 `json:"mean,omitempty" protobuf:"bytes,4,opt,name=mean"`
	StdDev float32 `json:"stddev,omitempty" protobuf:"bytes,5,opt,name=stddev"`
	Skewness float32 `json:"skewness,omitempty" protobuf:"bytes,6,opt,name=skewness"`
	Kurtosis float32 `json:"kurtosis,omitempty" protobuf:"bytes,7,opt,name=kurtosis"`
	Zeros float32 `json:"zeros,omitempty" protobuf:"bytes,8,opt,name=zeros"`
	P01 float32 `json:"p01,omitempty" protobuf:"bytes,9,opt,name=p01"`
	P25 float32 `json:"p25,omitempty" protobuf:"bytes,10,opt,name=p25"`
	P50 float32 `json:"p50,omitempty" protobuf:"bytes,11,opt,name=p50"`
	P75 float32 `json:"p75,omitempty" protobuf:"bytes,12,opt,name=p75"`
	P99 float32 `json:"p99,omitempty" protobuf:"bytes,13,opt,name=p99"`
	Missing int32 `json:"missing,omitempty" protobuf:"varint,14,opt,name=missing"`
	Invalid int32 `json:"invalid,omitempty" protobuf:"varint,15,opt,name=invalid"`
	Divisions []int32 `json:"divisions,omitempty" protobuf:"bytes,16,opt,name=divisions"`
	Freq []int32 `json:"freq,omitempty" protobuf:"bytes,17,opt,name=freq"`
	Values []string `json:"values,omitempty" protobuf:"bytes,18,opt,name=values"`
	Target bool `json:"target,omitempty" protobuf:"bytes,19,opt,name=target"`
	Importance float32 `json:"importance,omitempty" protobuf:"bytes,20,opt,name=importance"`
	Coefficient float32 `json:"coefficient,omitempty" protobuf:"bytes,21,opt,name=coefficient"`
	Rows int32 `json:"rows, omitempty" protobuf:"bytes,3,opt,name=rows"`
	FileSize int32 `json:"fileSize, omitempty" protobuf:"bytes,4,opt,name=fileSize"`

Feature
	VersionRef *v1.LocalObjectReference `json:"versionRef" protobuf:"bytes,1,opt,name=versionRef"`
	Name string `json:"name" protobuf:"bytes,2,opt,name=name"`
	FeatureRef *v1.LocalObjectReference `json:"featureRef" protobuf:"bytes,3,opt,name=featureRef"`
	Type catalog.DataType `json:"datatype" protobuf:"bytes,4,opt,name=type"`
	Format catalog.Domain `json:"format" protobuf:"bytes,5,opt,name=format"`
	Description string `json:"description" protobuf:"bytes,6,opt,name=description"`
	Ignore *bool `json:"ignore" protobuf:"bytes,7,opt,name=ignore"`
	Target *bool `json:"target" protobuf:"bytes,8,opt,name=target"`
	MultipleOf *int32 `json:"multipleOf" protobuf:"varint,9,opt,name=multipleOf"`
	MaximumFloat float32 `json:"maximum" protobuf:"bytes,10,opt,name=maximumFloat"`
	ExclusiveMaximum *bool `json:"exclusiveMaximum" protobuf:"bytes,11,opt,name=exclusiveMaximum"`
	MinimumFloat float32 `json:"minimumFloat" protobuf:"bytes,12,opt,name=minimumFloat"`
	ExclusiveMinimum *bool `json:"exclusiveMinimum" protobuf:"bytes,13,opt,name=exclusiveMinimum"`
	MaxLength *int32 `json:"maxLength" protobuf:"varint,14,opt,name=maxLength"`
	MinLength *int32 `json:"minLength" protobuf:"varint,15,opt,name=minLength"`
	Pattern string `json:"pattern" protobuf:"bytes,16,opt,name=pattern"`
	Enum []string `json:"enum" protobuf:"bytes,17,opt,name=enum"`


FlatFile
	VersionRef *v1.LocalObjectReference `json:"versionRef,omitempty" protobuf:"bytes,1,opt,name=versionRef"`
	SchemaRef *v1.LocalObjectReference `json:"schemaRef,omitempty" protobuf:"bytes,2,opt,name=schemaRef"`
	FileType FlatFileType `json:"fileType,omitempty" protobuf:"bytes,3,opt,name=fileType"`
	FieldSep Delimiter `json:"fieldSep,omitempty" protobuf:"bytes,4,opt,name=fieldSep"`
	Header *int32 `json:"header,ommodelditempty" protobuf:"varint,5,opt,name=header"`
	IndexCol *int32 `json:"indexCol,omitempty" protobuf:"varint,6,opt,name=indexCol"`
	SkipRows *int32 `json:"skipRows,omitempty" protobuf:"varint,7,opt,name=skipRows"`
	NA string `json:"na,omitempty" protobuf:"bytes,8,opt,name=na"`
	CommentSep string `json:"commentSep,omitempty" protobuf:"bytes,9,opt,name=commetSep"`
	ParseDates *bool `json:"parseDates,omitempty" protobuf:"bytes,10,opt,name=parseDates"`
	KeepDataCol *bool `json:"keepDataCol,omitempty" protobuf:"bytes,11,opt,name=keepDataCol"`
	NRows *int32 `json:"nrows,omitempty" protobuf:"varint,12,opt,name=nrows"`
	SkipFooter *int32 `json:"skipFooter,omitempty" protobuf:"varint,13,opt,name=skipFooter"`
	Encoding string `json:"encoding,omitempty" protobuf:"bytes,14,opt,name=encoding"`
	ThousandsSeparator string `json:"thousandsSeperator,omitempty" protobuf:"bytes,15,opt,name=thousandsSeperator"`

Schema
	VersionRef *v1.LocalObjectReference `json:"versionRef,omitempty" protobuf:"bytes,1,opt,name=versionRef"`
	LabelColumn string `json:"labelColumn, omitempty" protobuf:"bytes,2,opt,name=labelColumn"`
	Columns []Column `json:"columns,omitempty" protobuf:"bytes,3,opt,name=columns"`


Table
	VersionRef *v1.LocalObjectReference `json:"versionRef,omitempty" protobuf:"bytes,1,opt,name=versionRef"`
	SchemaRef *v1.LocalObjectReference `json:"schemaRef,omitempty" protobuf:"bytes,2,opt,name=schemaRef"`
	Query string `json:"query,omitempty" protobuf:"bytes,4,opt,name=query"`
	ServerType DatabaseServerType `json:"serverType,omitempty" protobuf:"bytes,5,opt,name=serverType"`
	ConnectionString string `json:"connectionString,omitempty" protobuf:"bytes,6,opt,name=connectionString"`
	Credential *v1.ObjectReference `json:"credentialRef,omitempty" protobuf:"bytes,7,opt,name=credentialRef"`
	ServerVersion string `json:"serverVersion,omitempty" protobuf:"bytes,8,opt,name=serverVersion"`

Model
	VersionRef *v1.LocalObjectReference `json:"versionRef,omitempty" protobuf:"bytes,1,opt,name=versionRef"`
	StudyRef *v1.LocalObjectReference `json:"studyRef,omitempty" protobuf:"bytes,2,opt,name=studyRef"`
	PreprocessorRef *v1.LocalObjectReference `json:"preprocessorRef,omitempty" protobuf:"bytes,3,opt,name=preprocessorRef"`
	Task catalog.MLTask `json:"task" protobuf:"bytes,4,opt,name=task"`
	Objective *catalog.Metric `json:"objective,omitempty" protobuf:"bytes,5,opt,name=objective"`
	Classical *ClassicalEstimator `json:"classical,omitempty" protobuf:"bytes,6,opt,name=classical"`
	Deep *DeepEstimator `json:"deep,omitempty" protobuf:"bytes,7,opt,name=deep"`
	Priority *int32 `json:"priority,omitempty" protobuf:"varint,9,opt,name=priority"`
	GenReport *bool `json:"genReport,omitempty" protobuf:"bytes,10,opt,name=genReport"`
	Publish *bool `json:"publish,omitempty" protobuf:"bytes,11,opt,name=publish"`
	CV *bool `json:"cv,omitempty" protobuf:"bytes,12,opt,name=cv"`
	SaveTrainedModel *bool `json:"saveTrainedModel,omitempty" protobuf:"bytes,13,opt,name=savedTrainedModel"`
	Epochs *int32 `json:"epochs,omitempty" protobuf:"varint,14,opt,name=epochs"`
	Bracket *int32 `json:"bracket,omitempty" protobuf:"varint,15,opt,name=bracket"`
	Rung *int32 `json:"rung,omitempty" protobuf:"varint,16,opt,name=rung"`
	TrainerRef *v1.ObjectReference `json:"trainerRef,omitempty" protobuf:"bytes,17,opt,name=trainerRef"`
}

Notebook
	VersionRef *v1.ObjectReference `json:"versionRef,omitempty" protobuf:"bytes,1,opt,name=versionRef"`
	SchemaRef *v1.ObjectReference `json:"schemaRef,omitempty" protobuf:"bytes,3,opt,name=schemaRef"`
	File string `json:"file,omitempty" protobuf:"bytes,5,opt,name=file"`
	Requirements string `json:"requirements,omitempty" protobuf:"bytes,7,opt,name=requirements"`
	DebPackages string `json:"debPackages,omitempty" protobuf:"bytes,8,opt,name=debPackages"`
	Vars []string `json:"vars,omitempty" protobuf:"bytes,9,opt,name=vars"`

type NotebookRunSpec struct {
	NotebookRef *v1.LocalObjectReference `json:"notebookRef,omitempty" protobuf:"bytes,1,opt,name=notebookRef"`
	Values []NotebookVarValue `json:"values,omitempty" protobuf:"bytes,2,opt,name=values"`
    ImageName





type PipelineSpec struct {
	VersionRef *v1.LocalObjectReference `json:"versionRef,omitempty" protobuf:"bytes,1,opt,name=versionRef"`
	Data *DataStageSpec `json:"dataStageSpec,omitempty protobuf:" protobuf:"bytes,7,opt,name=dataStageSpec"`
	Dev DevStageSpec `json:"dev,omitempty" protobuf:"bytes,3,opt,name=dev"`
	QA *QaStageSpec `json:"qa,omitempty" protobuf:"bytes,4,opt,name=qa"`
	Acceptance *AcceptanceStageSpec `json:"acceptance,omitempty" protobuf:"bytes,5,opt,name=acceptance"`
	Prod *ProdStageSpec `json:"prod,omitempty" protobuf:"bytes,6,opt,name=prod"`
}
    

type DevStageSpec struct {
	NotebookTemplate *NotebookTemplateSpec `json:"notebook,omitempty" protobuf:"bytes,1,opt,name=notebook"`
	StudyTemplate *StudyTemplateSpec `json:"study,omitempty" protobuf:"bytes,2,opt,name=studyTemplate"`
	PredictorTemplate *inference.PredictorTemplateSpec `json:"predictor,omitempty" protobuf:"bytes,3,opt,name=predictorTemplate"`
	PredictionTemplate *inference.PredictionTemplateSpec `json:"prediction,omitempty" protobuf:"bytes,4,opt,name=predictionTemplate"`
	Gate *Gate `json:"gate,omitempty" protobuf:"bytes,5,opt,name=gate"`
	MinScore *float32 `json:"minScore,omitempty" protobuf:"bytes,6,opt,name=minScore"`
}


type PipelineRunSpec struct {
	// TriggerName denote the trigger that fired this pipeline run
	// +optional
	TriggerRef v1.LocalObjectReference `json:"triggerRef,omitempty" protobuf:"bytes,1,name=triggerRef"`
	// PipelineName is the name of the pipeline specification for this pipeline
	// +optional
	PipelineRef v1.LocalObjectReference `json:"pipeline,omitempty" protobuf:"bytes,2,name=pipelineRef"`
	Approved   bool        `json:"approved,omitempty" protobuf:"bytes,2,opt,name=approved"`
	ApprovedBy string      `json:"approvedBy,omitempty" protobuf:"bytes,3,opt,name=approvedBy"`
	Score      float32     `json:"score,omitempty" protobuf:"bytes,4,opt,name=score"`
	StartTime  metav1.Time `json:"startTime,omitempty" protobuf:"bytes,5,opt,name=startTime"`
	EndTime    metav1.Time `json:"endTime,omitempty" protobuf:"bytes,6,opt,name=endTime"`

type PipelineRunStatus struct {
	StudyName     string `json:"studyName" protobuf:"bytes,2,opt,name=studyName"`
	BestModelName string `json:"bestModelName" protobuf:"bytes,3,opt,name=bestModelName"`
	Dev        PipelineRunStageStatus `json:"dev,omitempty" protobuf:"bytes,4,opt,name=dev"`
	QA         PipelineRunStageStatus `json:"qa,omitempty" protobuf:"bytes,5,opt,name=qa"`
	Acceptance PipelineRunStageStatus `json:"acceptance,omitempty" protobuf:"bytes,6,opt,name=acceptance"`
	Prod       PipelineRunStageStatus `json:"prod,omitempty" protobuf:"bytes,7,opt,name=prod"`
	StartTime  metav1.Time            `json:"startTime,omitempty" protobuf:"bytes,8,opt,name=startTime"`
	EndTime    metav1.Time            `json:"endTime,omitempty" protobuf:"bytes,9,opt,name=endTime"`
	Phase string `json:"phase" protobuf:"bytes,10,opt,name=phase"`
}


// PipelineTriggerSpec is the desired state of PipelineTrigger resource
type PipelineTriggerSpec struct {
	ProductVersion corev1.LocalObjectReference `json:"productVersion,omitempty" protobuf:"bytes,1,opt,name=productVersion"`
	Schedule TriggerSchedule `json:"schedule,omitempty" protobuf:"bytes,3,opt,name=schedule"`
	GithubEvents GithubEvents `json:"githubEvents,omitempty" protobuf:"bytes,4,opt,name=githubEvents"`
	PipelineName string `json:"pipelineName,omitempty" protobuf:"bytes,5,opt,name=pipelineName"`


type PreprocessorSpec struct {
	VersionRef *v1.LocalObjectReference `json:"versionRef,omitempty" protobuf:"bytes,1,opt,name=versionRef"`
	StudyRef *v1.LocalObjectReference `json:"studyRef,omitempty" protobuf:"bytes,2,opt,name=studyRef"`
	Task catalog.MLTask `json:"task" protobuf:"bytes,3,opt,name=task"`
	Objective *catalog.Metric `json:"objective,omitempty" protobuf:"bytes,4,opt,name=objective"`
	Priority *int32 `json:"priority,omitempty" protobuf:"varint,5,opt,name=priority"`
	ColumnSets []ColumnSetPreprocessing `json:"columnSets" protobuf:"bytes,6,rep,name=columnSets"`
	Publish *bool `json:"publish,omitempty" protobuf:"bytes,7,opt,name=publish"`
	Preprocess *bool `json:"preprocess,omitempty" protobuf:"bytes,8,opt,name=preprocess"`
	TrainerRef *v1.ObjectReference `json:"trainerRef,omitempty" protobuf:"bytes,9,opt,name=trainerRef"`



type ReportSpec struct {
	VersionRef *v1.LocalObjectReference `json:"versionRef,omitempty" protobuf:"bytes,1,name=versionRef"`
	EntityRef v1.ObjectReference `json:"entityRef,omitempty" protobuf:"bytes,2,name=entityRef"`
	Key string `json:"key,omitempty" protobuf:"bytes,4,opt,name=key"`
	ReportType ReportType `json:"reportType,omitempty" protobuf:"bytes,5,opt,name=reportType"`
	Format ReportFormat `json:"format,omitempty" protobuf:"bytes,6,opt,name=format"`

type StudySpec struct {
	VersionRef *v1.LocalObjectReference `json:"versionRef,omitempty" protobuf:"bytes,1,opt,name=versionRef"`
	LabRef *v1.ObjectReference `json:"labRef,omitempty" protobuf:"bytes,4,opt,name=labRef"`
	TrainerClassRef *v1.LocalObjectReference `json:"trainerclassRef,omitempty" protobuf:"bytes,25,opt,name=trainerclassRef"`
	DatasetRef v1.LocalObjectReference `json:"datasetRef,omitempty" protobuf:"bytes,6,name=datasetRef"`
	Task catalog.MLTask `json:"task,omitempty" protobuf:"bytes,3,opt,name=task"`
	Objective *catalog.Metric `json:"objective,omitempty" protobuf:"bytes,7,opt,name=objective"`
	Train *int32 `json:"train,omitempty" protobuf:"varint,8,opt,name=train"`
	Validation *int32 `json:"validation,omitempty" protobuf:"varint,9,opt,name=validation"`
	Folds *int32 `json:"folds,omitempty" protobuf:"varint,10,opt,name=folds"`
	MaxCost *int32 `json:"maxCost,omitempty" protobuf:"varint,11,opt,name=maxCost"`
	MaxTime *int32 `json:"maxTime,omitempty" protobuf:"varint,12,opt,name=maxTime"`
	MaxModels *int32 `json:"maxModels,omitempty" protobuf:"varint,13,opt,name=maxModels"`
	Priority *int32 `json:"priority,omitempty" protobuf:"varint,14,opt,name=priority"`
	Retain *int32 `json:"retain,omitempty" protobuf:"varint,15,opt,name=retain"`
	SearchMethod *SearchMethodName `json:"searchMethod,omitempty" protobuf:"bytes,17,opt,name=searchMethod"`
	Resources *StudyResourceSpec `json:"resources,omitempty" protobuf:"bytes,18,opt,name=resources"`
	Trainers *int32 `json:"trainers,omitempty" protobuf:"varint,19,opt,name=trainers"`
	BlackList []catalog.ClassicEstimatorName `json:"blackList,omitempty" protobuf:"bytes,20,opt,name=blackList"`
	WhiteList []catalog.ClassicEstimatorName `json:"whiteList,omitempty" protobuf:"bytes,21,opt,name=whiteList"`
	CheckpointInterval *int32 `json:"checkpointInterval,omitempty" protobuf:"varint,22,opt,name=checkpointInterval"`
	GenReport *bool `json:"genReport,omitempty" protobuf:"bytes,23,opt,name=genReport"`
	Publish *bool `json:"publish,omitempty" protobuf:"bytes,24,opt,name=publish"`


type StudyStatus struct {
	DbId int32 `json:"dbid,omitempty" protobuf:"bytes,1,opt,name=dbid"`
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,2,opt,name=startTime"`
	CompletionTime *metav1.Time `json:"completionTime,omitempty" protobuf:"bytes,3,opt,name=completionTime"`
	ModelsUnscheduled int32 `json:"modelUnscheduled,omitempty" protobuf:"bytes,4,opt,name=modelUnscheduled"`
	ModelsRunning int32 `json:"modelsRunning,omitempty" protobuf:"bytes,5,opt,name=modelsRunning"`
	ModelsSucceeded int32 `json:"modelsSucceeded,omitempty" protobuf:"bytes,6,opt,name=modelsSucceeded"`
	ModelsFailed int32 `json:"modelsFailed,omitempty" protobuf:"bytes,7,opt,name=modelsFailed"`
	PreUnscheduled int32 `json:"preUnscheduled,omitempty" protobuf:"bytes,8,opt,name=preUnscheduled"`
	PreRunning int32 `json:"preRunning,omitempty" protobuf:"bytes,9,opt,name=preRunning"`
	PreSucceeded int32 `json:"preSucceeded,omitempty" protobuf:"bytes,10,opt,name=preSucceeded"`
	PreFailed int32 `json:"preFailed,omitempty" protobuf:"bytes,11,opt,name=preFailed"`
	TotalTrainers int32 `json:"totalTrainers,omitempty" protobuf:"bytes,12,opt,name=totalTrainers"`
	TrainersUnscheduled int32 `json:"unscheduledTrainers,omitempty" protobuf:"bytes,13,opt,name=unscheduledTrainers"`
	BestPreprocessor *v1.LocalObjectReference `json:"bestPreprocessor,omitempty" protobuf:"bytes,14,opt,name=bestPreprocessor"`
	BestModel string `json:"bestModel,omitempty" protobuf:"bytes,15,opt,name=actualBestModel"`
	BestModelScore float32 `json:"bestModelScore,omitempty" protobuf:"bytes,16,opt,name=bestModelScore"`
	Visualizations []catalog.VizUri `json:"visualizations" protobuf:"bytes,18,opt,name=visualizations"`
	Report *v1.ObjectReference `json:"report,omitempty" protobuf:"bytes,19,opt,name=report"`
	Phase string `json:"phase" protobuf:"bytes,20,opt,name=phase"`


// The product of the study
	VersionRef *v1.LocalObjectReference `json:"versionRef,omitempty" protobuf:"bytes,1,opt,name=versionRef"`
	StudyRef v1.LocalObjectReference `json:"studyRef,omitempty" protobuf:"bytes,2,opt,name=studyRef"`
	TrainerClassRef v1.ObjectReference `json:"trainerClassRef,omitempty" protobuf:"bytes,3,opt,name=trainerClassRef"`
	Image string `json:"image,omitempty" protobuf:"bytes,4,opt,name=image"`
	Port *v1.ServicePort `json:"port,omitempty" protobuf:"bytes,5,opt,name=port"`
	PodSpec v1.PodSpec `json:"pod,omitempty" protobuf:"bytes,6,opt,name=pod"` // The pod spec for the trainer
	DbId int32 `json:"dbid,omitempty" protobuf:"bytes,1,opt,name=dbid"`
	Trained int32 `json:"trained,omitempty" protobuf:"varint,2,opt,name=trained"`
	Failures int32 `json:"failures,omitempty" protobuf:"varint,3,opt,name=failure"`
	Current *v1.ObjectReference `json:"current,omitempty" protobuf:"bytes,4,opt,name=curren"`
	Phase TrainerPhase `json:"phase" protobuf:"bytes,5,opt,name=phase"`

Infernece
=========


// A prediction route represent a traffic allocation to a data product version
type PredictionRoute struct {
	VersionRef *v1.LocalObjectReference `json:"versionRef,omitempty" protobuf:"bytes,1,opt,name=versionRef"`
	Traffic int32 `json:"traffic,omitempty" protobuf:"bytes,2,opt,name=traffic"`
	ShadowRef *v1.LocalObjectReference `json:"shadowRef,omitempty" protobuf:"bytes,3,opt,name=shadowRef"`
	Active bool `json:"active,omitempty" protobuf:"bytes,5,opt,name=active"`



// PredictorSpec define the desired state of the predictor
type PredictorSpec struct {
	ProductRef *v1.ObjectReference `json:"productRef,omitempty" protobuf:"bytes,1,opt,name=productRef"`
	ServingSiteRef v1.ObjectReference `json:"servingsiteRef" protobuf:"bytes,2,name=servingsiteRef"`
	Replicas *int32 `json:"replicas,omitempty" protobuf:"varint,3,opt,name=replicas"`
	Routes []PredictionRoute `json:"routes,omitempty" protobuf:"varint,4,opt,name=routes"`
	Port *int32 `json:"port,omitempty" protobuf:"varint,5,opt,name=port"`
	Path string `json:"path,omitempty" protobuf:"bytes,6,opt,name=path"`
	Host string `json:"host,omitempty" protobuf:"bytes,7,opt,name=host"`
	Template *v1.PodTemplate `json:"template,omitempty" protobuf:"bytes,8,opt,name=template"`


// PredictionSpec represent the desired state of Prediction
type PredictionSpec struct {
	VersionRef *v1.LocalObjectReference `json:"versionRef,omitempty" protobuf:"bytes,1,opt,name=versionRef"`
	PredictorRef *v1.LocalObjectReference `json:"predictorRef" protobuf:"bytes,2,opt,name=predictorRef"`
	DatasetRef *v1.LocalObjectReference `json:"datasetRef" protobuf:"bytes,3,opt,name=datasetRef"`
	DbId int32 `json:"dbid,omitempty" protobuf:"bytes,1,opt,name=dbid"`
	OutKey string `json:"outKey,omitempty" protobuf:"bytes,2,opt,name=outKey"`
	Score float32 `json:"score,omitempty" protobuf:"bytes,3,opt,name=score"`
	Phase PredictionPhase `json:"phase" protobuf:"bytes,4,opt,name=phase"`




// CurtainSpec define the desired state of the predictor
type CurtainSpec struct {
	ServingSiteRef *v1.ObjectReference `json:"servingsiteRef,omitempty" protobuf:"bytes,1,opt,name=servingsiteRef"`
	DatasetRef *v1.LocalObjectReference `json:"datasetRef,omitempty" protobuf:"bytes,2,opt,name=datasetRef"`
	Wizards []v1.ObjectReference `json:"wizards,omitempty" protobuf:"bytes,3,opt,name=wizards"`
	Question string `json:"question,omitempty" protobuf:"bytes,4,opt,name=question"`


    












        

