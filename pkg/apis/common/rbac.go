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
	LabelingPipelineKind    KindName = "LabelingPipeline"
	LabelingPipelineRunKind KindName = "LabelingPipelineRun"
	RecipeKind              KindName = "Recipe"
	RecipeRunKind           KindName = "RecipeRun"

	// inference
	CronPredictionKind KindName = "CronPrediction"
	PredictionKind     KindName = "Prediction"
	PredictorKind      KindName = "Predictor"
	CurtainKind        KindName = "Curtain"

	// infra
	AccountKind        KindName = "Account"
	ConnectionKind     KindName = "StorageConnection"
	LabKind            KindName = "Lab"
	LicenseKind        KindName = "License"
	NotifierKind       KindName = "Notifier"
	ServingSiteKind    KindName = "ServingSite"
	TenantKind         KindName = "Tenant"
	VirtualBucketKind  KindName = "Bucket"
	VirtualClusterKind KindName = "VirtualCluster"
	VirtualVolumeKind  KindName = "VirtualVolume"
	ApiTokenKind       KindName = "ApiToken"

	// Training kind
	ModelKind            KindName = "Model"
	NotebookKind         KindName = "Notebook"
	NotebookRunKind      KindName = "NotebookRun"
	ModelPipelineKind    KindName = "ModelPipeline"
	ModelPipelineRunKind KindName = "ModelPipelineRun"
	ModelAutobuilderKind KindName = "ModelAutobuilder"
	ReportKind           KindName = "Report"
	StudyKind            KindName = "Study"

	// team
	ConversationKind KindName = "Conversation"
	PostMortemKind   KindName = "PostMortem"
	RunBookKind      KindName = "RunBook"

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
