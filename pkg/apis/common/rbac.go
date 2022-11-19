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
	DataPipelineKind       KindName = "datapipelines"
	DataPipelineRunKind    KindName = "datapipelineruns"
	DataProductKind        KindName = "dataproducts"
	DataProductVersionKind KindName = "dataproductversions"
	DatasetKind            KindName = "datasets"
	DataSourceKind         KindName = "datasources"
	EntityKind             KindName = "entities"
	FeatureGroupKind       KindName = "featuregroup"
	FeatureHistogramKind   KindName = "featurehistograms"
	RecipeKind             KindName = "recipes"
	RecipeRunKind          KindName = "reciperuns"
	SqlQueryKind           KindName = "sqlqueries"
	SqlQueryRunKind        KindName = "sqlqueryruns"
	WebRequestKind         KindName = "webrequests"
	WebRequestRunKind      KindName = "webrequestruns"

	// inference
	PredictionKind KindName = "predictions"
	PredictorKind  KindName = "predictors"
	DataAppKind    KindName = "dataapps"

	// infra
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

	// Training kind
	ModelKind            KindName = "models"
	ModelClassKind       KindName = "modelclasses"
	NotebookKind         KindName = "notebooks"
	NotebookRunKind      KindName = "notebookruns"
	ModelPipelineKind    KindName = "modelpipelines"
	ModelPipelineRunKind KindName = "modelpipelineruns"
	ModelCompilerRunKind KindName = "modelcompilerruns"
	ModelAutobuilderKind KindName = "modelautobuilders"
	ReportKind           KindName = "reports"
	StudyKind            KindName = "studies"

	// team
	ReviewKind     KindName = "reviews"
	PostMortemKind KindName = "postmortems"
	RunBookKind    KindName = "runbooks"
	TodoKind       KindName = "todos"
	MeetingKind    KindName = "meetings"

	// k8s core kinds
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
