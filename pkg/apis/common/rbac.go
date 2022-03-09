package common

//KindName is the name of the kinds
type KindName string

const (
	// catalog kinds
	AlgorithmKind       KindName = "algorithms"
	CloudKind           KindName = "clouds"
	MLFrameworkKind     KindName = "mlframeworks"
	PretrainedModelKind KindName = "pretrainedmodels"
	PublicDatasetKind   KindName = "publicdatasets"
	UserRoleClassKind   KindName = "userroleclasses"
	WorkloadClassKind   KindName = "workloadclasses"

	// data
	DataPipelineKind        KindName = "datapipelines"
	DataPipelineRunKind     KindName = "datapipelineruns"
	DataProductKind         KindName = "dataproducts"
	DataProductVersionKind  KindName = "dataproductversions"
	DatasetKind             KindName = "datasets"
	DataSourceKind          KindName = "datasources"
	EntityKind              KindName = "entities"
	FeatureKind             KindName = "features"
	FeaturePipelineKind     KindName = "featurepipelines"
	FeaturePipelineRunKind  KindName = "featurepipelineruns"
	FeaturesetKind          KindName = "featuresets"
	FeatureHistogramKind    KindName = "featurehistograms"
	LabelingPipelineKind    KindName = "labelingpipelines"
	LabelingPipelineRunKind KindName = "labelingpipelineruns"
	RecipeKind              KindName = "recipes"
	RecipeRunKind           KindName = "reciperuns"
	SqlQueryKind            KindName = "sqlqueries"
	SqlQueryRunKind         KindName = "sqlqueryruns"
	WebRequestKind          KindName = "webrequests"
	WebRequestRunKind       KindName = "webrequestruns"

	// inference
	CronPredictionKind KindName = "CronPrediction"
	PredictionKind     KindName = "Prediction"
	PredictorKind      KindName = "Predictor"
	CurtainKind        KindName = "Curtain"
	DataAppKind        KindName = "DataApp"

	// infra
	AccountKind        KindName = "accounts"
	AlertKind          KindName = "alerts"
	ApiTokenKind       KindName = "apitokens"
	ConnectionKind     KindName = "connections"
	CommitKind         KindName = "commits"
	LabKind            KindName = "labs"
	LicenseKind        KindName = "licenses"
	NotifierKind       KindName = "notifiers"
	ServingSiteKind    KindName = "servingsites"
	TenantKind         KindName = "tenants"
	VirtualBucketKind  KindName = "virtualbuckets"
	VirtualClusterKind KindName = "virtualclusters"
	VirtualVolumeKind  KindName = "virtualvolumes"
	AttachmentKind     KindName = "attachments"

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
