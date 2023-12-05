package common

// KindName is the name of the kinds
type KindName string

const (
	// Catalog
	AlgorithmKind       KindName = "algorithms"
	CloudKind           KindName = "clouds"
	MLFrameworkKind     KindName = "mlframeworks"
	PretrainedModelKind KindName = "pretrainedmodels"
	PublicDatasetKind   KindName = "publicdatasets"
	UserRoleClassKind   KindName = "userroleclasses"
	WorkloadClassKind   KindName = "workloadclasses"

	// Data
	DataPipelineKind       KindName = "datapipelines"
	DataPipelineRunKind    KindName = "datapipelineruns"
	DataProductKind        KindName = "dataproducts"
	DataProductVersionKind KindName = "dataproductversions"
	DatasetKind            KindName = "datasets"
	DatasetSnapshotKind    KindName = "datasetsnapshots"
	DataSourceKind         KindName = "datasources"
	EntityKind             KindName = "entities"
	FeatureGroupKind       KindName = "featuregroup"
	FeatureHistogramKind   KindName = "featurehistograms"
	RecipeKind             KindName = "recipes"
	RecipeRunKind          KindName = "reciperuns"

	// Inference
	PredictionKind    KindName = "predictions"
	PredictionRunKind KindName = "predictionrun"
	PredictorKind     KindName = "predictors"
	DataAppKind       KindName = "dataapps"

	// LLM
	KnowledgeBaseKind KindName = "knowledgebases"

	// Infra
	AccountKind       KindName = "accounts"
	AlertKind         KindName = "alerts"
	ApiTokenKind      KindName = "apitokens"
	ConnectionKind    KindName = "connections"
	CommitKind        KindName = "commits"
	LabKind           KindName = "labs"
	LicenseKind       KindName = "licenses"
	NotifierKind      KindName = "notifiers"
	ServingSiteKind   KindName = "servingsites"
	TenantKind        KindName = "tenants"
	VirtualBucketKind KindName = "virtualbuckets"
	AttachmentKind    KindName = "attachments"

	// Training
	ModelKind         KindName = "models"
	ModelClassKind    KindName = "modelclasses"
	ModelClassRunKind KindName = "modelclassrun"
	ReportKind        KindName = "reports"
	StudyKind         KindName = "studies"
	StudyRunKind      KindName = "studyruns"

	// Team
	ReviewKind     KindName = "reviews"
	PostMortemKind KindName = "postmortems"
	RunBookKind    KindName = "runbooks"
	TodoKind       KindName = "todos"
	MeetingKind    KindName = "meetings"

	// K8s Core
	SecretKind     KindName = "secrets"
	DeploymentKind KindName = "deployments"
	ServiceKind    KindName = "services"
	PodKind        KindName = "pods"
	JobKind        KindName = "jobs"
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
