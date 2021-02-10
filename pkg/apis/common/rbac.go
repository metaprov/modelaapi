package common

// ResourceType define the resource kind name
type KindName string

const (
	// cloud
	AISeviceKind      KindName = "AIService"
	AlgorithmKind     KindName = "Algorithm"
	CloudKind         KindName = "Cloud"
	DataCenterKind    KindName = "Datacenter"
	GpuClassKind      KindName = "GpuClass"
	MLFrameworkKind   KindName = "MLFramework"
	RegionKind        KindName = "Region"
	WorkloadClassKind KindName = "ModelWorkloadClass"

	// data
	CorpusKind              KindName = "Corpus"
	DataProductKind         KindName = "DataProduct"
	DataProductVersionKind  KindName = "DataProductVersion"
	DatasetKind             KindName = "Dataset"
	EntityKind              KindName = "Entity"
	FeatureKind             KindName = "Feature"
	FeaturesetKind          KindName = "Featureset"
	FeaturePipelineKind     KindName = "FeaturePipeline"
	FeaturePipelineRunKind  KindName = "FeaturePipelineRun"
	DataSourceKind          KindName = "DataSource"
	DataPipelineKind        KindName = "DataPipeline"
	DataPipelineRunKind     KindName = "DataPipelineRun"
	LabelingPipelineKind    KindName = "LabelingPipelineKind"
	LabelingPipelineRunKind KindName = "LabelingPipelineRunKind"

	// infra

	MachineClassKind KindName = "MachineClass"
	MachineImageKind KindName = "MachineImage"
	LabelingTaskKind KindName = "DataLabeling"
	SecretKind       KindName = "StorageSecret"
	DeploymentKind   KindName = "Deployment"
	ServiceKind      KindName = "Service"
	PodKind          KindName = "Pod"

	// inference
	PredictionPipelineKind     KindName = "PredictionPipeline"
	PredictionPipelineRunKind  KindName = "PredictionPipelineRun"
	ForecastKind           KindName = "Forecast"
	PredictorKind          KindName = "Predictor"
	CurtainKind            KindName = "Curtain"
	PredictionTriggerKind  KindName = "PredictionTrigger"

	// infra
	AccountKind              KindName = "Account"
	ConnectionKind           KindName = "StorageConnection"
	ExternalDatasetKind      KindName = "ExampleDataset"
	GitRepositoryKind        KindName = "GitRepository"
	LabKind                  KindName = "Lab"
	LicenseKind              KindName = "License"
	NotifierKind             KindName = "Notifier"
	ServingSiteKind          KindName = "ServingSite"
	TenantKind               KindName = "Tenant"
	VirtualBucketKind        KindName = "Bucket"
	VirtualClusterKind       KindName = "VirtualCluster"
	VirtualVolumeKind        KindName = "VirtualVolume"
	ModelKind                KindName = "Model"
	NotebookKind             KindName = "Notebook"
	NotebookRunKind          KindName = "NotebookRun"
	ModelPipelineKind        KindName = "ModelPipeline"
	ModelAutobuilderKind     KindName = "ModelAutobuilder"
	ModelPipelineRunKind     KindName = "ModelPipelineRun"
	ModelPipelineTriggerKind KindName = "ModelPipelineTrigger"
	ReportKind               KindName = "Report"
	RecipeKind               KindName = "Recipe"
	RecipeRunKind            KindName = "RecipeRun"
	StudyKind                KindName = "Study"
	TrainerKind              KindName = "Trainer"
	RunBookKind              KindName = "RunBook"
	PredictorMonitorKind     KindName = "PredictorMonitor"

	// team
	ConversationKind KindName = "Conversation"
	PostMortemKind   KindName = "PostMortem"
)

type VerbName string

const (
	VerbNameGet    = "get"
	VerbNameList   = "list"
	VerbNameWatch  = "watch"
	VerbNameCreate = "create"
	VerbNameUpdate = "update"
	VerbNamePatch  = "patch"
	VerbNameDelete = "delete"

)
