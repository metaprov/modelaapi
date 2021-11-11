package common

//KindName is the name of the kinds
type KindName string

const (
	// catalog kinds
	AlgorithmKind       KindName = "Algorithm"
	CloudKind           KindName = "Cloud"
	MLFrameworkKind     KindName = "MLFramework"
	PretrainedModelKind KindName = "PretrainedModel"
	PublicDatasetKind   KindName = "PublicDataset"
	UserRoleClassKind   KindName = "UserRoleClass"
	WorkloadClassKind   KindName = "WorkloadClass"

	// data
	DataPipelineKind        KindName = "DataPipeline"
	DataPipelineRunKind     KindName = "DataPipelineRun"
	DataProductKind         KindName = "DataProduct"
	DataProductVersionKind  KindName = "DataProductVersion"
	DatasetKind             KindName = "Dataset"
	DataSourceKind          KindName = "DataSource"
	EntityKind              KindName = "Entity"
	FeatureKind             KindName = "Feature"
	FeaturePipelineKind     KindName = "FeaturePipeline"
	FeaturePipelineRunKind  KindName = "FeaturePipelineRun"
	FeaturesetKind          KindName = "Featureset"
	FeatureHistogramKind    KindName = "FeatureHistogram"
	LabelingPipelineKind    KindName = "LabelingPipeline"
	LabelingPipelineRunKind KindName = "LabelingPipelineRun"
	RecipeKind              KindName = "Recipe"
	RecipeRunKind           KindName = "RecipeRun"
	SqlQueryKind            KindName = "SqlQuery"
	SqlQueryRunKind         KindName = "SqlQueryRun"
	WebRequestKind          KindName = "WebRequest"
	WebRequestRunKind       KindName = "WebRequestRun"

	// inference
	CronPredictionKind KindName = "CronPrediction"
	PredictionKind     KindName = "Prediction"
	PredictorKind      KindName = "Predictor"
	CurtainKind        KindName = "Curtain"
	PredictiveAppKind  KindName = "PredictiveApp"

	// infra
	AccountKind        KindName = "Account"
	AlertKind          KindName = "Alert"
	ApiTokenKind       KindName = "ApiToken"
	ConnectionKind     KindName = "Connection"
	CommitKind         KindName = "Commit"
	LabKind            KindName = "Lab"
	LicenseKind        KindName = "License"
	NotifierKind       KindName = "Notifier"
	ServingSiteKind    KindName = "ServingSite"
	TenantKind         KindName = "Tenant"
	VirtualBucketKind  KindName = "Bucket"
	VirtualClusterKind KindName = "VirtualCluster"
	VirtualVolumeKind  KindName = "VirtualVolume"
	AttachmentKind     KindName = "AttachmentKind"

	// Training kind
	ModelKind            KindName = "Model"
	NotebookKind         KindName = "Notebook"
	NotebookRunKind      KindName = "NotebookRun"
	ModelPipelineKind    KindName = "ModelPipeline"
	ModelPipelineRunKind KindName = "ModelPipelineRun"
	ModelCompilerRunKind KindName = "ModelCompilerRun"
	ModelAutobuilderKind KindName = "ModelAutobuilder"
	ReportKind           KindName = "Report"
	CronReportKind       KindName = "CronReport"
	StudyKind            KindName = "Study"

	// team
	ReviewKind     KindName = "Review"
	PostMortemKind KindName = "PostMortem"
	RunBookKind    KindName = "RunBook"
	TodoKind       KindName = "Todo"
	MeetingKind    KindName = "Meeting"

	// k8s core kinds
	SecretKind     KindName = "Secret"
	DeploymentKind KindName = "Deployment"
	ServiceKind    KindName = "Service"
	PodKind        KindName = "Pod"
	JobKind        KindName = "Job"
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
