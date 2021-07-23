package v1alpha1

import (
	"fmt"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ===========================================================
// Common ports
// ===========================================================

const (
	ControlPort   int = 8080
	StoragePort   int = 8090
	DataPort      int = 8070
	PublisherPort int = 8050
	TrainerPort   int = 8060
	PredictorPort int = 8040
)

// ===========================================================
// Job execution Rbac consts
// ===========================================================

const (
	LabJobRunnerRole        string = "lab-job-runner"
	LabJobRunnerSa          string = "lab-job-sa"
	LabJobRunnerRoleBinding string = "lab-job-runner-binding"

	ServingSiteJobRunnerRole        string = "servingsite-job-runner"
	SerbingSiteJobRunnerSa          string = "servingsite-job-sa"
	ServingSiteJobRunnerRoleBinding string = "servingsite-job-runner-binding"
)

// Compiler spec is used when there is a specification for model compilation
type CompilerSpec struct {
	// Enable set the enable to
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enable *bool `json:"enable,omitempty" protobuf:"bytes,1,opt,name=enable"`
	// Set one or more targets
	// Enable set the enable to
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	Compiler *CompilerName `json:"compiler,omitempty" protobuf:"bytes,2,opt,name=compiler"`
	// Set one or more targets for the compiler
	Targets []HardwareTarget `json:"targets,omitempty" protobuf:"bytes,3,opt,name=targets"`
}

//============================================================
// Task name
//============================================================

type TaskName string

const (
	BatchPredictTask      TaskName = "batch-predict"
	ForecastTask          TaskName = "forecast"
	ProfileDatasetTask    TaskName = "profile-dataset"
	ProfileStudyTask      TaskName = "profile-study"
	ProfileModelTask      TaskName = "profile-model"
	PublishModelTask      TaskName = "publish-model"
	RunRecipeTask         TaskName = "run-recipe"
	ReportDatasetTask     TaskName = "report-dataset"
	ReportModelTask       TaskName = "report-model"
	ReportStudyTask       TaskName = "report-study"
	ReportPeriodTask      TaskName = "report-period"
	ReportSummaryTask     TaskName = "report-summary"
	SplitDatasetTask      TaskName = "split-dataset"
	TestEnsembleTask      TaskName = "test-ensemble"
	TestModelTask         TaskName = "test-model"
	TrainEnsembleTask     TaskName = "train-ensemble"
	TrainModelTask        TaskName = "train-model"
	ValidateDatasetTask   TaskName = "validate-dataset"
	MergeForecastTask     TaskName = "merge-forecast"
	PartitionForecastTask TaskName = "partition-forecast"
	SplitDatasetToRungs   TaskName = "split-dataset-to-rungs"
	CompileTask           TaskName = "compile-model"
	GenerateDataset       TaskName = "generate-dataset"
	ValidateModel         TaskName = "validate-model"
)

// ApiKeyName is the secret or in env variable
// +kubebuilder:validation:Enum="provider";"keyfile";"accessKey";"secretKey";"host";"token";"username";"password";"port";"ssh";"openstack-authurl"
type ApiKeyName string

const (
	ApiKeyNameProvider         ApiKeyName = "provider"
	ApiKeyNameKeyFile          ApiKeyName = "keyfile"
	ApiKeyNameAccessKey        ApiKeyName = "accessKey"
	ApiKeyNameSecretKey        ApiKeyName = "secretKey"
	ApiKeyNameHost             ApiKeyName = "host"
	ApiKeyNameToken            ApiKeyName = "token"
	ApiKeyNameApiKey           ApiKeyName = "apikey"
	ApiKeyNameUsername         ApiKeyName = "username"
	ApiKeyNamePassword         ApiKeyName = "password"
	ApiKeyNameURL              ApiKeyName = "url"
	ApiKeyNamePort             ApiKeyName = "port"
	ApiKeyNameDatabase         ApiKeyName = "database"
	ApiKeyNameSsh              ApiKeyName = "ssh"
	ApiKeyNameOpenstackAuthUrl ApiKeyName = "openstack-authurl"
)

func (ak ApiKeyName) AsCliOption() string {
	return string(ak)
}

// MLTask is the machine learning task name
// +kubebuilder:validation:Enum="forecasting";"binary-classification";"multi-classification";"multi-label-classification";"text-classification";"regression";"forecasting";"clustering";"recommendation";"outlier-detection";"novelty-detection";"topic-modeling";"auto";"unknown";"video-action-recognition";"video-classification";"video-object-tracking";"text-classification";"text-multi-label-classification";"text-entity-extraction";"text-sentiment-analysis";"image-classification";"image-multi-classification";"image-object-detection";"image-segmentation"
type MLTask string

const (
	BinaryClassification          MLTask = "binary-classification"
	MultiClassification           MLTask = "multi-classification"
	MultiLabelClassification      MLTask = "multi-label-classification"
	Forecasting                   MLTask = "forecasting"
	Regression                    MLTask = "regression"
	Forcasting                    MLTask = "forecasting"
	Clustering                    MLTask = "clustering"
	Recommendation                MLTask = "recommendation"
	OutlierDetection              MLTask = "outlier-detection"
	NovelityDetection             MLTask = "novelty-detection"
	TopicModeling                 MLTask = "topic-modeling"
	VideoActionRecognition        MLTask = "video-action-recognition"
	VideoClassification           MLTask = "video-classification"
	VideoObjectTracking           MLTask = "video-object-tracking"
	TextClassification            MLTask = "text-classification"
	TextMultiLabelClassification  MLTask = "text-multi-label-classification"
	TextEntityExtraction          MLTask = "text-entity-extraction"
	TextSentimentAnalysis         MLTask = "text-sentiment-analysis"
	ImageClassification           MLTask = "image-classification"
	ImageMultiLabelClassification MLTask = "image-multi-classification"
	ImageObjectDetection          MLTask = "image-object-detection"
	ImageSegmentation             MLTask = "image-segmentation"
	AutoDetectTask                MLTask = "auto"
	UnknownTask                   MLTask = "unknown"
)

// +kubebuilder:validation:Enum="alicloud";"athena";"azure";"big-query";"bitbucket";"cassandra";"digitalocean";"smtp";"gcp";"github";"hetzner";"linode";"mysql";"minio";"mongo-db";"ms-sql-server";"odbc";"oracle";"ovh";"postgres";"presto";"redshift";"aws";"slack";"snowflake";"sqlite";"image-registry";"license";"gitlab";"lm";"openstack";"hipchat";"pagerduty";"pushover";"opengenie";"webook";"victorops";"wechat";"flock";"msteam";"mattermost";"docker-hub";"unknown";
// ProviderName is the machine learning task name
type ProviderName string

const (
	// Databases
	AmazonAthena     ProviderName = "amazon-athena"
	GcpBigQuery      ProviderName = "gcp-big-query"
	ApacheCassandra  ProviderName = "apache-cassandra"
	AzureSqlDatabase ProviderName = "azure-sql-database"
	MongoDb          ProviderName = "mongo-db"
	MySql            ProviderName = "mysql"
	Odbc             ProviderName = "odbc"
	Oracle           ProviderName = "oracle"
	Postgres         ProviderName = "postgres"
	Presto           ProviderName = "presto"
	AmazonRedshift   ProviderName = "amazon-redshift"
	ApacheHive       ProviderName = "apache-hive"
	Snowflake        ProviderName = "snowflake"
	Sybase           ProviderName = "sybase"
	Vertica          ProviderName = "vertica"
	CockrouchDB      ProviderName = "cockrouchdb"
	ElasticSearch    ProviderName = "elastic-search"
	Informix         ProviderName = "informix"
	SAPHana          ProviderName = "sap-hana"
	Teradata         ProviderName = "teradata"
	GcpSpanner       ProviderName = "gcp-spanner"
	ApacheSpark      ProviderName = "apache-spark"
	MSSqlServer      ProviderName = "ms-sql-server"
	Clickhouse       ProviderName = "click-house"
	Greenplum        ProviderName = "greenplum"
	Couchbase        ProviderName = "couchbase"
	Exasol           ProviderName = "exasol"
	Sqlite           ProviderName = "sqlite"
	// Cloud Storage
	AliCloud     ProviderName = "alicloud"
	Azure        ProviderName = "azure"
	DigitalOcean ProviderName = "digitalocean"
	Hetzner      ProviderName = "hetzner"
	Linode       ProviderName = "linode"
	Gcp          ProviderName = "gcp"
	Minio        ProviderName = "minio"
	Ovh          ProviderName = "ovh"
	Aws          ProviderName = "aws"
	Openstack    ProviderName = "openstack"

	// Docker Image Registry
	Dockerhub     ProviderName = "docker-hub"
	ImageRegistry ProviderName = "image-registry"

	// Git Repository
	GitHub    ProviderName = "github"
	Bitbucket ProviderName = "bitbucket"
	Gitlab    ProviderName = "gitlab"

	// Messaging
	SmtpProvider    ProviderName = "smtp"
	Slack           ProviderName = "slack"
	Hipchat         ProviderName = "hipchat"
	PageDuty        ProviderName = "pagerduty"
	PushOver        ProviderName = "pushover"
	OpsGenie        ProviderName = "opsgenie"
	Webhook         ProviderName = "webook"
	VictorOps       ProviderName = "victorops"
	Flock           ProviderName = "flock"
	MSTeam          ProviderName = "msteam"
	MatterMost      ProviderName = "mattermost"
	UnknownProvider ProviderName = "unknown"
)

func MLTaskFromString(name string) (MLTask, error) {
	switch name {
	case "binary-classification":
		return BinaryClassification, nil
	case "multi-classification":
		return MultiClassification, nil
	case "multi-label-classification":
		return MultiLabelClassification, nil
	case "regression":
		return Regression, nil
	case "forecasting":
		return Forcasting, nil
	case "clustering":
		return Clustering, nil
	case "recommendation":
		return Recommendation, nil
	case "outlier-detection":
		return OutlierDetection, nil
	case "novelity-detection":
		return NovelityDetection, nil
	case "topic-modeling":
		return TopicModeling, nil
	case "unknown":
		return UnknownTask, nil
	}
	return UnknownTask, fmt.Errorf("IsFailed to find MLTask for %s", name)
}

func NewProviderNameFromString(name string) ProviderName {
	switch name {

	case "aws":
		return Aws
	case "digitalocean":
		return DigitalOcean
	case "azure":
		return Azure
	case "gcp":
		return Gcp
	case "email":
		return SmtpProvider
	case "slack":
		return Slack
	case "github":
		return GitHub
	case "image-registry":
		return ImageRegistry
	}
	return UnknownProvider
}

func IsBinaryClassification(t MLTask) bool {
	return (t == BinaryClassification)
}

func IsMultiClass(task MLTask) bool {
	return task == MultiClassification
}

func IsRegression(task MLTask) bool {
	return task == Regression
}

// WebHookNameAndAction Contain the event and the action
// +kubebuilder:validation:Enum="commit";"pull_request_assigned";"pull_request_unsassigned";"pull_request_labeled";"pull_request_unlabeled";"pull_request_opened";"pull_request_edited";"pull_request_closed";"pull_request_reopened";"pull_request_synchronized";"pull_request_all";"notsupported"
type WebHookNameAndAction string

const (
	CommitEvent             WebHookNameAndAction = "commit"
	PullRequestassigned     WebHookNameAndAction = "pull_request_assigned"
	PullRequestUnassigned   WebHookNameAndAction = "pull_request_unsassigned"
	PullRequestLabeled      WebHookNameAndAction = "pull_request_labeled"
	PullRequestUnlabeled    WebHookNameAndAction = "pull_request_unlabeled"
	PullRequestOpened       WebHookNameAndAction = "pull_request_opened"
	PullRequestEdited       WebHookNameAndAction = "pull_request_edited"
	PullRequestClosed       WebHookNameAndAction = "pull_request_closed"
	PullRequestReopened     WebHookNameAndAction = "pull_request_reopened"
	PullRequestSynchronized WebHookNameAndAction = "pull_request_synchronized"
	AnyPullRequest          WebHookNameAndAction = "pull_request_all"
	NotSupported            WebHookNameAndAction = "notsupported"
)

func ParseEventAndAction(evt string, action string) WebHookNameAndAction {
	if evt == "pull_request" {
		switch action {
		case "assigned":
			return PullRequestassigned
		case "unsassigned":
			return PullRequestUnassigned
		case "labeled":
			return PullRequestLabeled
		case "unlabeled":
			return PullRequestUnlabeled
		case "opened":
			return PullRequestOpened
		case "edited":
			return PullRequestEdited
		case "closed":
			return PullRequestClosed
		case "reopened":
			return PullRequestReopened
		case "synchronized":
			return PullRequestSynchronized
		default:
			return NotSupported
		}
	}
	return NotSupported
}

// +kubebuilder:validation:Enum="lite";"pro";"enterprise"
type LicenseType string

const (
	Lite       LicenseType = "lite"
	Pro        LicenseType = "pro"
	Enterprise LicenseType = "enterprise"
)

//====================================================================
// Metric
// ===================================================================

func (metric Metric) IsRegression() bool {
	return metric == MAE ||
		metric == MSE ||
		metric == MSLE ||
		metric == R2 ||
		metric == RMSE ||
		metric == ExplainedVariance ||
		metric == MaxError ||
		metric == MeanPoissonDeviance ||
		metric == MeanGammaDeviance ||
		metric == MeanTweedieDeviance
}

func (metric Metric) IsForecast() bool {
	return metric == MAE ||
		metric == MSE ||
		metric == MSLE ||
		metric == RMSE ||
		metric == MAPE ||
		metric == SMAPE ||
		metric == MDAPE

}

func (metric Metric) IsClassification() bool {
	return metric == F1Binary ||
		metric == LogLoss ||
		metric == PrecisionBinary ||
		metric == RecallBinary ||
		metric == RocAuc ||
		metric == BalancedAccuracy ||
		metric == Accuracy ||
		metric == ZeroOne ||
		metric == HammingLoss ||
		metric == HingeLoss ||
		metric == JaccardScore ||
		metric == MatthewsCorrCoef

}

func (metric Metric) IsMultiClass() bool {
	return metric == Accuracy ||
		metric == F1Weighted ||
		metric == F1Micro ||
		metric == F1Macro ||
		metric == F1Samples ||
		metric == PrecisionMacro ||
		metric == PrecisionMicro ||
		metric == PrecisionWeighted ||
		metric == PrecisionSamples ||
		metric == RecallMacro ||
		metric == RecallMicro ||
		metric == RecallWeighted ||
		metric == RecallSamples ||
		metric == AveragePrecision

}

func (metric Metric) IsClustering() bool {
	return false
}

// +kubebuilder:validation:Enum="accuracy";"average-precision";"balanced-accuracy";"brier-score-loss";"f1";"f1-macro";"f1-micro";"f1-weighted";"log-loss";"precision";"precision-micro";"precision-macro";"precision-weighted";"recall";"recall-macro";"recall-micro";"recall-weighted";"auc";"fp";"fn";"tn";"tp";"explained_variance";"mae";"mse";"msle";"median-absolute-error";"r2";"adjusted-mutual-info-score";"adjusted-rand-score";"completeness-score";"fowlkes-mallows-score";"homogeneity-score";"mutual-info-score";"normalized-mutual-info-score";"v-measure-score";"rmse";"unknown";"mape";"smape";"mdape";
// Metric is the machine learning metric used to evaluate a model performance.
type Metric string

const (
	Accuracy Metric = "accuracy"
	// classification
	AveragePrecision  Metric = "average-precision"
	BalancedAccuracy  Metric = "balanced-accuracy"
	F1Binary          Metric = "f1"
	F1Micro           Metric = "f1-micro"
	F1Macro           Metric = "f1-macro"
	F1Weighted        Metric = "f1-weighted"
	F1Samples         Metric = "f1-samples"
	PrecisionBinary   Metric = "precision"
	PrecisionMicro    Metric = "precision-micro"
	PrecisionMacro    Metric = "precision-macro"
	PrecisionWeighted Metric = "precision-weighted"
	PrecisionSamples  Metric = "precision-samples"
	RecallBinary      Metric = "recall"
	RecallMacro       Metric = "recall-macro"
	RecallMicro       Metric = "recall-micro"
	RecallWeighted    Metric = "recall-weighted"
	RecallSamples     Metric = "recall-samples"
	LogLoss           Metric = "log-loss"
	RocAuc            Metric = "auc"
	RocAucMicro       Metric = "auc-micro"
	RocAucMacro       Metric = "auc-macro"
	RocAucWeighted    Metric = "auc-weighted"
	ZeroOne           Metric = "zero-one"
	HammingLoss       Metric = "hamming-loss"
	HingeLoss         Metric = "hinge-loss"
	JaccardScore      Metric = "jaccard-loss"
	MatthewsCorrCoef  Metric = "matthews-corr-coef"
	Fp                Metric = "fp"
	Fn                Metric = "fn"
	Tn                Metric = "tn"
	Tp                Metric = "tp"

	/// Regression
	ExplainedVariance   Metric = "explained-variance"
	MaxError            Metric = "max-error"
	MAE                 Metric = "mae"
	MSE                 Metric = "mse"
	MSLE                Metric = "msle"
	RMSE                Metric = "rmse"
	MedianAbsoluteError Metric = "median-absolute-error"
	R2                  Metric = "r2"
	MeanPoissonDeviance Metric = "mean_poisson_deviance"
	MeanGammaDeviance   Metric = "mean-gamma-deviance"
	MeanTweedieDeviance Metric = "mean-tweedie-deviance"
	// Forecast specific
	MAPE  Metric = "mape"
	MDAPE Metric = "mdape"
	SMAPE Metric = "smape"

	//Clustering
	AdjustedMutualInfoScore   Metric = "adjusted-mutual-info-score"
	AdjustedRandScore         Metric = "adjusted-rand-score"
	CompletenessScore         Metric = "completeness-score"
	FowlkesMallowsScore       Metric = "fowlkes-mallows-score"
	HomogeneityScore          Metric = "homogeneity-score"
	MutualInfoScore           Metric = "mutual-info-score"
	NormalizedMutualInfoScore Metric = "normalized-mutual-info-score"
	VMeasureScore             Metric = "v-measure-score"

	// Infra metrics
	AvgLatency               Metric = "average-latency"
	P95Latency               Metric = "p95-latency"
	P99Latency               Metric = "p99-latency"
	Cpu                      Metric = "cpu"
	Mem                      Metric = "mem"
	ReqSec                   Metric = "req-per-sec"
	UncrainPredictionPercent Metric = "uncertain-prediction-percent"

	UnknownMetric Metric = "unknown"
)

// Compare two scores in the metrics
func (metric Metric) Compare(i float64, j float64) bool {
	/* Since we are assigning minus score to rmse.
	if metric == MaxError ||
		metric == MAE ||
		metric == MSE ||
		metric == MSLE ||
		metric == RMSE ||
		metric == MedianAbsoluteError ||
		metric == MeanPoissonDeviance ||
		metric == MeanGammaDeviance ||
		metric == MeanTweedieDeviance {
		return i > j

	}
	*/
	return i <= j

}

//==============================================================================
// CatEncoder
//==============================================================================
// +kubebuilder:validation:Enum="one-hot";"count-freq";"ordinal-encoder";"mean";"target";"woe";"rare-label";"binary";"label";"none";"auto"
type CatEncoder string

const (
	OneHotEncoder          CatEncoder = "one-hot"
	CountFrequencyEncoder  CatEncoder = "count-freq"
	OrdinalEncoder         CatEncoder = "ordinal-encoder"
	MeanCategoricalEncoder CatEncoder = "mean"
	TargetEncoder          CatEncoder = "target"
	WoERatioEncoder        CatEncoder = "woe"
	RareLabelEncoder       CatEncoder = "rare-label"
	BinaryEncoder          CatEncoder = "binary"
	LabelEncoder           CatEncoder = "label"
	NoEnocoder             CatEncoder = "none"
	AutoEncoder            CatEncoder = "auto"
)

func ParseCategoricalTransformerName(name string) CatEncoder {
	names := []CatEncoder{
		OneHotEncoder,
		CountFrequencyEncoder,
		OrdinalEncoder,
		MeanCategoricalEncoder,
		TargetEncoder,
		WoERatioEncoder,
		RareLabelEncoder,
		BinaryEncoder,
		LabelEncoder,
	}

	for _, v := range names {
		if string(v) == name {
			return v
		}
	}
	return AutoEncoder
}

//==============================================================================
// Imputator
//==============================================================================
// +kubebuilder:validation:Enum="remove-rows-with-missing-values";"mean";"median";"mode";"arbitrary-number";"end-tail";"random-sample";"add-missing-indication";"iterative";"none";"auto";"constant"
type Imputator string

const (
	RemoveRowsWithMissingValues   Imputator = "remove-rows-with-missing-values"
	MeanImputation                Imputator = "mean"
	MedianImputation              Imputator = "median"
	ModeImputation                Imputator = "mode"
	ArbitraryNumberImputation     Imputator = "arbitrary-number"
	EndTailImputation             Imputator = "end-tail"
	RandomSampleImputation        Imputator = "random-sample"
	AddMissingIndicatorImputation Imputator = "add-missing-indication"
	IterativeImputer              Imputator = "iterative"
	ConstantImputer               Imputator = "constant"
	NoImputation                  Imputator = "none"
	AutoImputer                   Imputator = "auto"
)

func ParseImputation(name string) Imputator {
	names := []Imputator{
		RemoveRowsWithMissingValues,
		MeanImputation,
		MedianImputation,
		ModeImputation,
		ArbitraryNumberImputation,
		EndTailImputation,
		RandomSampleImputation,
		AddMissingIndicatorImputation,
		IterativeImputer,
		NoImputation,
		AutoImputer,
		ConstantImputer,
	}

	for _, v := range names {
		if string(v) == name {
			return v
		}
	}
	return AutoImputer
}

//==============================================================================
// Scaler
//==============================================================================

// +kubebuilder:validation:Enum="standard";"max-abs";"min-max";"normalizer";"robust";"none";"auto"
type Scaler string

const (
	StandardScaler Scaler = "standard"
	MaxAbsScaler   Scaler = "max-abs"
	MinMaxScaler   Scaler = "min-max"
	Normalizer     Scaler = "normalizer"
	RobustScaler   Scaler = "robust"
	NoneScaler     Scaler = "none"
	AutoScaler     Scaler = "auto"
)

func ParseScaler(name string) Scaler {
	names := []Scaler{
		StandardScaler,
		MaxAbsScaler,
		MinMaxScaler,
		Normalizer,
		RobustScaler,
		NoneScaler,
	}

	for _, v := range names {
		if string(v) == name {
			return v
		}
	}
	return AutoScaler
}

//==============================================================================
// Image Featurizer
//==============================================================================
type ImageFeaturizer string

const ()

//==============================================================================
// Audio Featurizer
//==============================================================================
type AudioFeaturizer string

//==============================================================================
// Video Featurizer
//==============================================================================
type VideoFeaturizer string

//==============================================================================
// Numerical Transform
//==============================================================================
// +kubebuilder:validation:Enum="log";"reciprocal";"sqrt";"power";"box-cox";"yj";"none";"auto"
type NumTransformer string

const (
	LogTransform        NumTransformer = "log"
	ReciprocalTransform NumTransformer = "reciprocal"
	SqrtTransform       NumTransformer = "sqrt"
	PowerTransform      NumTransformer = "power"
	BoxCoxTransform     NumTransformer = "box-cox"
	YeoJohnsonTransform NumTransformer = "yj"
	NoneTransform       NumTransformer = "none"
	AutoTransform       NumTransformer = "auto"
)

//==============================================================================
// Discritizer
//==============================================================================
// +kubebuilder:validation:Enum="equal-width";"equal-freq";"kbin";"decision-tree";"kernel-centerer";"label-binarizer";"multi-label-binarizer";"none";"auto"
type Discretizer string

const (
	EqualWidth          Discretizer = "equal-width"
	EqualFreq           Discretizer = "equal-freq"
	KBins               Discretizer = "kbin"
	DecisionTree        Discretizer = "decision-tree"
	KernelCenterer      Discretizer = "kernel-centerer"
	LabelBinarizer      Discretizer = "label-binarizer"
	MultiLabelBinarizer Discretizer = "multi-label-binarizer"
	NoneDiscretizer     Discretizer = "none"
	AutoDiscretizer     Discretizer = "auto"
)

//==============================================================================
// Outliers
//==============================================================================
// +kubebuilder:validation:Enum="trim";"winsorizer";"cap";"zero-code";"none";"auto"
type OutlierFilter string

const (
	Trim        OutlierFilter = "trim"
	Winsorizer  OutlierFilter = "winsorizer"
	Cap         OutlierFilter = "cap"
	ZeroCode    OutlierFilter = "zero-code"
	NoneOutlier OutlierFilter = "none"
	AutoOutlier OutlierFilter = "auto"
)

//==============================================================================
// Datatime
//==============================================================================
// +kubebuilder:validation:Enum="year-month";"weak-day";"hour-min-sec";"elapsed";"none";"auto"
type DatatimeTransformer string

const (
	YearMonth    DatatimeTransformer = "year-month"
	WeekDay      DatatimeTransformer = "weak-day"
	HourMinSec   DatatimeTransformer = "hour-min-sec"
	ElapsedTime  DatatimeTransformer = "elapsed"
	NoneDatetime DatatimeTransformer = "none"
	AutoDatetime DatatimeTransformer = "auto"
)

//==============================================================================
// Balancer
//==============================================================================
// +kubebuilder:validation:Enum="adasyn";"baseline-smote";"kmean-smote";"random-over-sampler";"smote";"smotenc";"svmsmote";"none";"auto"
type Balancer string

const (
	ADASYN            Balancer = "adasyn"
	BorderlineSMOTE   Balancer = "baseline-smote"
	KMeansSMOTE       Balancer = "kmean-smote"
	RandomOverSampler Balancer = "random-over-sampler"
	SMOTE             Balancer = "smote"
	SMOTENC           Balancer = "smotenc"
	SVMSMOTE          Balancer = "svmsmote"
	ImbalanceNone     Balancer = "none"
	ImbalanceAuto     Balancer = "auto"
)

//==============================================================================
// Feature Engineering
//==============================================================================
// +kubebuilder:validation:Enum="rfe";"select-percentile";"select-kbest";"select-fpr";"select-fdr";"variance-threshold";"pca";"polynomial-features";"rbf-sampler";"fast-ica";"nystroem";"none"; "auto"
type FeatureEngineering string

const (
	RFE                    FeatureEngineering = "rfe"
	SelectPercentile       FeatureEngineering = "select-percentile"
	SelectKBest            FeatureEngineering = "select-kbest"
	SelectFpr              FeatureEngineering = "select-fpr"
	SelectFdr              FeatureEngineering = "select-fdr"
	VarianceThreshold      FeatureEngineering = "variance-threshold"
	PCA                    FeatureEngineering = "pca"
	PolynomialFeatures     FeatureEngineering = "polynomial-features"
	RBFSampler             FeatureEngineering = "rbf-sampler"
	FastIca                FeatureEngineering = "fast-ica"
	Nystroem               FeatureEngineering = "nystroem"
	NoneFeatureEngineering FeatureEngineering = "none"
	AutoFeatureEngineering FeatureEngineering = "auto"
)

// +kubebuilder:validation:Enum"tfidf";"count-vec";"hashing-vec";none";"auto"
type TextTransformer string

const (
	TfIdf             TextTransformer = "tfidf"
	CountVectorizer   TextTransformer = "count-vec"
	HashingVectorizer TextTransformer = "hashing-vec"
	NoneTextTransform TextTransformer = "none"
	AutoTextTransform TextTransformer = "auto"
)

//==============================================================================
// Estimators
//==============================================================================

// +kubebuilder:validation:Enum="knn-regressor";"ridge-regressor";"lasso-regressor";"ada-boost-regressor";"decision-tree-regressor";"extra-tree-regressor";"linear-svr";"svr";"passive-agressive-regressor";"sgd-regressor";"gradient-boosting-regressor";"random-forest-regressor";"xgb-regressor";"catboost-regressor";"sgd-regressor";"gradient-boosting-regressor";"random-forest-regressor";"xgb-regressor";"catboost-regressor";"lightgbm-regressor";"elasticnet-regressor";"dnn-regressor";"elliptic-envelope";"one-class-svm";"isolation-forest";"local-outlier-factor";"prophet";"knn-classifier";"ada-boost-classifier";"bernoulli-nb";"decision-tree-classifier";"extra-tree-classifier";"linear-svc";"svc";"passive-aggressive-classifier";"sgd-classifier";"logistic-regression";"gradient-boosting-classifier";"random-forest-classifier";"xgboost-classifier";"ridge-classifier";"quadratic-discriminant";"linear-discriminant";"lightgbm-classifier";"catboost-classifier";"stacking-ensemble";
type ClassicEstimatorName string

const (
	// Regression
	KNeighborsRegressor       ClassicEstimatorName = "knn-regressor"
	RidgeRegressor            ClassicEstimatorName = "ridge-regressor"
	LassoRegressor            ClassicEstimatorName = "lasso-regressor"
	AdaBoostRegressor         ClassicEstimatorName = "ada-boost-regressor"
	DecisionTreeRegressor     ClassicEstimatorName = "decision-tree-regressor"
	ExtraTreeRegressor        ClassicEstimatorName = "extra-tree-regressor"
	LinearSvr                 ClassicEstimatorName = "linear-svr"
	Svr                       ClassicEstimatorName = "svr"
	PassiveArressiveRegressor ClassicEstimatorName = "passive-agressive-regressor"
	SGDRegressor              ClassicEstimatorName = "sgd-regressor"
	GradientBoostingRegressor ClassicEstimatorName = "gradient-boosting-regressor"
	RandomForestRegressor     ClassicEstimatorName = "random-forest-regressor"
	XGBRegressor              ClassicEstimatorName = "xgb-regressor"
	CatBoostRegressor         ClassicEstimatorName = "catboost-regressor"
	LightGbmRegressor         ClassicEstimatorName = "lightgbm-regressor"
	ElasticNetRegressor       ClassicEstimatorName = "elasticnet-regressor"
	DNNRegressor              ClassicEstimatorName = "dnn-regressor"

	// OutlierFilter
	EllipticEnvelope   ClassicEstimatorName = "elliptic-envelope"
	OneClassSVM        ClassicEstimatorName = "one-class-svm"
	IsolationForest    ClassicEstimatorName = "isolation-forest"
	LocalOutlierFactor ClassicEstimatorName = "local-outlier-factor"

	// Forcast
	Prophet ClassicEstimatorName = "prophet"
	// Recommendation

	// Classifiers
	KNeighborsClassifier        ClassicEstimatorName = "knn-classifier"
	AdaBoostClassifier          ClassicEstimatorName = "ada-boost-classifier"
	BernoulliNB                 ClassicEstimatorName = "bernoulli-nb"
	DecisionTreeClassifier      ClassicEstimatorName = "decision-tree-classifier"
	ExtraTreeClassifier         ClassicEstimatorName = "extra-tree-classifier"
	LinearSVC                   ClassicEstimatorName = "linear-svc"
	SVC                         ClassicEstimatorName = "svc"
	PassiveAggressiveClassifier ClassicEstimatorName = "passive-aggressive-classifier"
	SGDClassifier               ClassicEstimatorName = "sgd-classifier"
	LogisticRegression          ClassicEstimatorName = "logistic-regression"
	GradientBoostingClassifier  ClassicEstimatorName = "gradient-boosting-classifier"
	RandomForestClassifier      ClassicEstimatorName = "random-forest-classifier"
	XGBClassifier               ClassicEstimatorName = "xgboost-classifier"
	RidgeClassifier             ClassicEstimatorName = "ridge-classifier"
	QuadraticDiscriminant       ClassicEstimatorName = "quadratic-discriminant"
	LinearDiscriminant          ClassicEstimatorName = "linear-discriminant"
	LightGBMClassifier          ClassicEstimatorName = "lightgbm-classifier"
	CatBoostClassifier          ClassicEstimatorName = "catboost-classifier"
	StackingEnsemble            ClassicEstimatorName = "stacking-ensemble" // for stacking ensemble
	UnknownEstimatorName        ClassicEstimatorName = "unknown"
)

func ParseEstimatorName(name string) ClassicEstimatorName {
	estimators := []ClassicEstimatorName{

		KNeighborsRegressor,
		RidgeRegressor,
		LassoRegressor,
		DecisionTreeRegressor,
		ExtraTreeRegressor,
		SGDRegressor,
		GradientBoostingRegressor,
		RandomForestRegressor,
		XGBRegressor,

		// OutlierFilter
		EllipticEnvelope,
		OneClassSVM,
		IsolationForest,
		LocalOutlierFactor,

		// Forcast
		Prophet,
		// Recommendation

		// Classifiers
		KNeighborsClassifier,
		AdaBoostClassifier,
		BernoulliNB,
		DecisionTreeClassifier,
		ExtraTreeClassifier,
		LinearSVC,
		SVC,
		PassiveAggressiveClassifier,
		SGDClassifier,
		LogisticRegression,
		GradientBoostingClassifier,
		RandomForestClassifier,
		XGBClassifier,
	}

	for _, v := range estimators {
		if string(v) == name {
			return v
		}
	}
	return UnknownEstimatorName
}

// ==================================================
// DataEnv source
// ==================================================
// +kubebuilder:validation:Enum="csv";"json";"parquet";"tde";"sql";"table";"fwf";"excel";"sas";"spss";"auto";
type DatastoreType string

const (
	DatastoreTypeCsv     DatastoreType = "csv"
	DatastoreTypeJson    DatastoreType = "json"
	DatastoreTypeParquet DatastoreType = "parquet"
	DatastoreTypeSas     DatastoreType = "sas"
	DatastoreTypeSpss    DatastoreType = "spss"
	DatastoreTypeTde     DatastoreType = "tde"
	DatastoreTypeSql     DatastoreType = "sql"
	DatastoreTypeTable   DatastoreType = "table"
	DatastoreTypeFwf     DatastoreType = "fwf"
	DatastoreTypeExcel   DatastoreType = "excel"
	DatastoreTypeAuto    DatastoreType = "auto"
)

// +kubebuilder:validation:Enum="boolean";"color";"currency";"date";"datetime";"guid";"hyperlink";"image";"media";"categorical";"number";"text";"json";"path";"file";"time";"record";"embedding";"number-list";"categorical-list";"text-list";"useless";
type DataType string

const (
	DataTypeBoolean         DataType = "boolean"
	DataTypeColor           DataType = "color"
	DataTypeCurrency        DataType = "currency"
	DataTypeDate            DataType = "date"
	DataTypeDateTime        DataType = "datetime"
	DataTypeGuid            DataType = "guid"
	DataTypeHyperlink       DataType = "hyperlink"
	DataTypeImage           DataType = "image"
	DataTypeMedia           DataType = "media"
	DataTypeCategorical     DataType = "categorical"
	DataTypeNumber          DataType = "number"
	DataTypeText            DataType = "text"
	DataTypeJson            DataType = "json"
	DataTypePath            DataType = "path"
	DataTypeFile            DataType = "file"
	DataTypeTime            DataType = "time"
	DataTypeEmbedding       DataType = "embedding"
	DataTypeRecord          DataType = "record"
	DataTypeNumberList      DataType = "number-list"
	DataTypeCategoricalList DataType = "categorical-list"
	DataTypeTextList        DataType = "text-list"
	DataTypeUseless         DataType = "useless"
)

// +kubebuilder:validation:Enum="url";"path";"password";"time";"count";"interval";"nominal";"email";"creditCard";"uuid";"uuid5";"uuid";"base64";"latitude";"longtitude";"dns";"ip4";"ip6";"ssn";"alpha";"alphanumeric";"none";"unknown";
type DataFormat string

const (
	DataFormatOrdinal      DataFormat = "ordinal"
	DataFormatUrl          DataFormat = "url"
	DataFormatPath         DataFormat = "path"
	DataFormatPassword     DataFormat = "password"
	DataFormatTime         DataFormat = "time"
	DataFormatCount        DataFormat = "count"
	DataFormatInterval     DataFormat = "interval"
	DataFormatNominal      DataFormat = "nominal"
	DataFormatEmail        DataFormat = "email"
	DataFormatCreditCard   DataFormat = "creditCard"
	DataFormatUuid3        DataFormat = "uuid"
	DataFormatUuid5        DataFormat = "uuid5"
	DataFormatUuid         DataFormat = "uuid"
	DataFormatBase64       DataFormat = "base64"
	DataFormatLatitude     DataFormat = "latitude"
	DataFormatLongtitude   DataFormat = "longtitude"
	DataFormatDnsName      DataFormat = "dns"
	DataFormatIp4          DataFormat = "ip4"
	DataFormatIp6          DataFormat = "ip6"
	DataFormatSsn          DataFormat = "ssn"
	DataFormatAlpha        DataFormat = "alpha"
	DataFormatAlphaNumeric DataFormat = "alphanumeric"
	DataFormatNone         DataFormat = "none"
	DataFormatUnknown      DataFormat = "unknown"
)

// +kubebuilder:validation:Enum="email";"hipchat";"pagerduty";"pushover";"slack";"opengenie";"webook";"victorops";"wechat";
type NotificationReceiver string

const (
	NotificationReceiverEmail     NotificationReceiver = "email"
	NotificationReceiverHipchat   NotificationReceiver = "hipchat"
	NotificationReceiverPageDuty  NotificationReceiver = "pagerduty"
	NotificationReceiverPushOver  NotificationReceiver = "pushover"
	NotificationReceiverSlack     NotificationReceiver = "slack"
	NotificationReceiverOpenGenie NotificationReceiver = "opengenie"
	NotificationReceiverWebhook   NotificationReceiver = "webook"
	NotificationReceiverVictorOps NotificationReceiver = "victorops"
	NotificationReceiverWechat    NotificationReceiver = "wechat"
)

// Needed in order to map to the protobuf
func (this NotificationReceiver) Code() int32 {
	switch this {
	case NotificationReceiverEmail:
		return 0
	case NotificationReceiverHipchat:
		return 1
	case NotificationReceiverPageDuty:
		return 2
	case NotificationReceiverPushOver:
		return 3
	case NotificationReceiverSlack:
		return 4
	case NotificationReceiverOpenGenie:
		return 5
	case NotificationReceiverWebhook:
		return 6
	case NotificationReceiverVictorOps:
		return 7
	case NotificationReceiverWechat:
		return 8
	default:
		panic("reciver not found")

	}

}

// +kubebuilder:validation:Enum="feature-rank-1d";"feature-rank-2d";"feature-pca";"feature-pearson-corr";"feature-missing-values";"regression-residual-plot";"regression-prediction-error-plot";"regression-cook-distance";"regression-model-selection-validation-curve";"regression-learning-curve";"regression-cross-validation";"regression-feature-importance";"regression-rfe";"classification-roc";"multi-classification-roc";"classification-confusion-matrix";"classification-balance";"classification-precision-recall";"classification-prediction-value-error";"model-selection-learning-curve";"classification-cross-validation-score";"classification-feature-importance";"classification-rfe";"classification-decision-boundries";
type VizName string

const (
	VizNameFeatureRank1D                           VizName = "feature-rank-1d"
	VizNameFeatureRank2D                           VizName = "feature-rank-2d"
	VizNameFeaturePca                              VizName = "feature-pca"
	VizNameFeaturePearsonCorr                      VizName = "feature-pearson-corr"
	VizNameFeatureMissingValues                    VizName = "feature-missing-values"
	VizNameRegressionResidualPlot                  VizName = "regression-residual-plot"
	VizNameRegressionPredictionErrorPlot           VizName = "regression-prediction-error-plot"
	VizNameRegressionCookDistance                  VizName = "regression-cook-distance"
	VizNameRegressionModelSelectionValidationCurve VizName = "regression-model-selection-validation-curve"
	VizNameRegressionLearningCurve                 VizName = "regression-learning-curve"
	VizNameRegressionCrossValidationScore          VizName = "regression-cross-validation"
	VizNameRegressionFeatureImportance             VizName = "regression-feature-importance"
	VizNameRegressionRFE                           VizName = "regression-rfe"
	VizNameBinaryClassificationRoc                 VizName = "classification-roc"
	VizNameMultiClassificationRoc                  VizName = "multi-classification-roc"
	VizNameClasssificationConfusionMatrix          VizName = "classification-confusion-matrix"
	VizNameClassificationBalance                   VizName = "classification-balance"
	VizNamePrecisionRecall                         VizName = "classification-precision-recall"
	VizNamePredictionValueError                    VizName = "classification-prediction-value-error"
	VizNameModelSelectionLearningCurve             VizName = "model-selection-learning-curve"
	VizNameClassificationCrossValidationScore      VizName = "classification-cross-validation-score"
	VizNameClassificationFeatureImportance         VizName = "classification-feature-importance"
	VizNameClassificationRFE                       VizName = "classification-rfe"
	VizNameClassificationDecisionBoundries         VizName = "classification-decision-boundries"
)

////////////////////////////////////////////
/// Visual URI

type VizUri struct {
	Name VizName `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	Uri  string  `json:"uri,omitempty" protobuf:"bytes,2,opt,name=uri"`
}

/// The Horizon unit
// +kubebuilder:validation:Enum="second";"minute";"hour";"day";"week";"month";"quarter";"year";
type Freq string

const (
	FreqSeconds Freq = "second"
	FreqMinutes Freq = "minute"
	FreqHours   Freq = "hour"
	FreqDays    Freq = "day"
	FreqWeeks   Freq = "week"
	FreqMonths  Freq = "month"
	FreqQtrs    Freq = "quarter"
	FreqYears   Freq = "year"
)

// The Aggregate unit
// +kubebuilder:validation:Enum="min";"max";"avg";"median";
type Aggregate string

const (
	AggregateMin    Aggregate = "min"
	AggregateMax    Aggregate = "max"
	AggregateAvg    Aggregate = "avg"
	AggregateMedian Aggregate = "median"
	AggregateStddev Aggregate = "stddev"
	AggregateVar    Aggregate = "var"
)

/// The HolidayCountry unit
// +kubebuilder:validation:Enum="US";"BR";"ID";"IN";"MY";"VN";"TH";"PH";"PK";"BD";"EG";"CN";"RU";"KR";"BY";"AE";"none";
type HolidayCountry string

const (
	UnitedState        HolidayCountry = "US"
	Brazil             HolidayCountry = "BR"
	Indonesia          HolidayCountry = "ID"
	India              HolidayCountry = "IN"
	Malaysia           HolidayCountry = "MY"
	Vietnam            HolidayCountry = "VN"
	Thailand           HolidayCountry = "TH"
	Philippines        HolidayCountry = "PH"
	Pakistan           HolidayCountry = "PK"
	Bangladesh         HolidayCountry = "BD"
	Egypt              HolidayCountry = "EG"
	China              HolidayCountry = "CN"
	Russian            HolidayCountry = "RU"
	Korea              HolidayCountry = "KR"
	Belarus            HolidayCountry = "BY"
	UnitedArabEmirates HolidayCountry = "AE"
	NoneHoliday        HolidayCountry = "none"
)

//==============================================================================
// CrossValidationType
//==============================================================================

// +kubebuilder:validation:Enum="none";"kfold";"loocv";"stratified"
type CvType string

const (
	CvTypeNoCV       CvType = "none"
	CvTypeKFoldCV    CvType = "kfold"
	CvTypeLOOCV      CvType = "loocv"
	CvTypeStratified CvType = "stratified"
)

// Common encoding for flat file
// +kubebuilder:validation:Enum="utf-8";"latin-1";"utf-16";
type FileEncoding string

const (
	FileEncodingUtf8 FileEncoding = "utf-8"
	//iso-8859-1
	FileEncodingLating1 FileEncoding = "latin-1"
	FileEncodingUtf16   FileEncoding = "utf-16"
)

// +kubebuilder:validation:Enum="general";"cloud";"docker-image-registry";"database";"git";"messaging";
type ConnectionCategory string

const (
	ConnectionCategoryGeneral             ConnectionCategory = "general"
	ConnectionCategoryCloudProvider       ConnectionCategory = "cloud"
	ConnectionCategoryDockerImageRegistry ConnectionCategory = "docker-image-registry"
	ConnectionCategoryDatabase            ConnectionCategory = "database"
	ConnectionCategoryGit                 ConnectionCategory = "git"
	ConnectionCategoryMessaging           ConnectionCategory = "messaging"
)

//==============================================================================
// PipelineName TriggerName
//==============================================================================
// +kubebuilder:validation:Enum="now";"once";"hourly";"daily";"weekly";"monthly";"yearly";"cron"
type TriggerScheduleEventType string

const (
	TriggerScheduleEventTypeNow     TriggerScheduleEventType = "now"
	TriggerScheduleEventTypeOnce    TriggerScheduleEventType = "once"
	TriggerScheduleEventTypeHourly  TriggerScheduleEventType = "hourly"
	TriggerScheduleEventTypeDaily   TriggerScheduleEventType = "daily"
	TriggerScheduleEventTypeWeekly  TriggerScheduleEventType = "weekly"
	TriggerScheduleEventTypeMonthly TriggerScheduleEventType = "monthly"
	TriggerScheduleEventTypeYearly  TriggerScheduleEventType = "yearly"
	TriggerScheduleEventTypeCron    TriggerScheduleEventType = "cron"
)

// GithubEvents specify repo and the events to listen in order ot fire the pipeline
type GithubEvents struct {
	// The github connections used to loginto git
	GitConnectionsName *string `json:"gitConnectionName,omitempty" protobuf:"bytes,1,opt,name=gitConnectionName"`
	// Repository is the name of the github repository
	Repository *string `json:"repository,omitempty" protobuf:"bytes,2,opt,name=repository"`
	// Branch is the name of the github branch.
	// By default the trigger listen to all branch
	Branch *string `json:"branch,omitempty" protobuf:"bytes,3,opt,name=branch"`
	// Blobname regex is a regular expression on the blob name that changed
	BlobNameRegex *string `json:"blobNameRegex,omitempty" protobuf:"bytes,4,opt,name=blobNameRegex"`
	// Events is the name of the github events.
	Events []string `json:"events,omitempty" protobuf:"bytes,5,rep,name=events"`
}

//Run Schedule is a specification for job schedule
type RunSchedule struct {
	// The start time of the schedule
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`
	// StartDay is the start day of the schedule
	// +kubebuilder:validation:Optional
	StartDay *metav1.Time `json:"startDay,omitempty" protobuf:"bytes,2,opt,name=startDay"`
	// EndTime is the end time of the schedule
	// +kubebuilder:validation:Optional
	EndTime *metav1.Timestamp `json:"endTime,omitempty" protobuf:"bytes,3,opt,name=endTime"`
	// EndDay is the end day of the schedule
	// +kubebuilder:validation:Optional
	EndDay *metav1.Time `json:"endDay,omitempty" protobuf:"bytes,4,opt,name=endDay"`
	// Cron string of the schedule.
	// +kubebuilder:validation:Optional
	Cron *string `json:"cron,omitempty" protobuf:"bytes,5,opt,name=cron"`
	// +kubebuilder:validation:Optional
	// The type of schedule events.
	Type TriggerScheduleEventType `json:"type,omitempty" protobuf:"bytes,6,opt,name=type"`
}

// +kubebuilder:validation:Enum="on-demand";"on-schedule";"on-new-data";"on-github-event";"on-concept-drift";"on-pref-degradation"
type TriggerType string

const (
	TriggerTypeOnDemand        TriggerType = "on-demand"
	TriggerTypeSchedule        TriggerType = "on-schedule"
	TriggerTypeNewData         TriggerType = "on-new-data"
	TriggerTypeGithubEvent     TriggerType = "on-github-event"
	TriggerTypeConceptDrift    TriggerType = "on-concept-drift"
	TriggerTypePrefDegragation TriggerType = "on-pref-degradation"
)

type ConditionReason string

const (
	Failed             ConditionReason = "Failed"
	Success            ConditionReason = "Success"
	Running            ConditionReason = "Running"
	WaitingForApproval ConditionReason = "WaitingForApproval"
	Approved           ConditionReason = "Approved"
	Denied             ConditionReason = "Denied"
)

// +kubebuilder:validation:Enum="amd-epyc-2";"arma-53";"arma-72";"intel-cascade-lake";"intel-broadwell";"intel-skylake";"tesla-v100";"tesla-k80";"t4";"raspberry-pi8-modeld-b";
type HardwareTarget string

const (
	HardwareTargetAMDEPYC2           HardwareTarget = "amd-epyc-2"
	HardwareTargetARMA53             HardwareTarget = "arma-53"
	HardwareTargetARMA72             HardwareTarget = "arma-72"
	HardwareTargetIntelCascadeLake   HardwareTarget = "intel-cascade-lake"
	HardwareTargetIntelBroadwell     HardwareTarget = "intel-broadwell"
	HardwareTargetIntelSkylake       HardwareTarget = "intel-skylake"
	HardwareTargetTeslaV100          HardwareTarget = "tesla-v100"
	HardwareTargetTeslaK80           HardwareTarget = "tesla-k80"
	HardwareTargetT4                 HardwareTarget = "t4"
	HardwareTargetRaspberryPi8MODELB HardwareTarget = "raspberry-pi8-modeld-b"
)

// +kubebuilder:validation:Enum="tvm";"onyx";"xla";"none"
type CompilerName string

const (
	CompilerNameTVM  CompilerName = "tvm"
	CompilerNameOnyx CompilerName = "onyx"
	CompilerNameXla  CompilerName = "xla"
	CompilerNameNone CompilerName = "none"
)

// Measurement is a value for a specific metric
type Measurement struct {
	// The metric type name (e.g. F1 / Accuracy)
	// +kubebuilder:validation:Required
	Metric *Metric `json:"metric" protobuf:"bytes,1,opt,name=metric"`
	// The value for this model
	// +kubebuilder:validation:Required
	Value *float64 `json:"value" protobuf:"bytes,2,opt,name=value"`
}

// CanaryMetric is used when testing the canary
// +kubebuilder:validation:Enum="cpu";"mem";"latency";"crash"
type CanaryMetric string

const (
	// Use cluster port if the predictor is an internal micro service
	CpuCanaryMetric     CanaryMetric = "cpu"
	MemCanaryMetric     CanaryMetric = "mem"
	LatencyCanaryMetric CanaryMetric = "latency"
	CrashCanaryMetric   CanaryMetric = "crash"
)

// The desired state of the model.
type ModelDeploymentSpec struct {
	// ModelName is the name of the model. The name must be unique within
	// +kubebuilder:validation:Required
	ModelName *string `json:"modelName,omitempty" protobuf:"bytes,1,opt,name=modelName"`
	// The version of the model. Note that a single predictor might serve different models
	ModelVersion *string `json:"modelVersion,omitempty" protobuf:"bytes,2,opt,name=modelVersion"`
	// How much traffic this deployment model should serve.
	// Default: 100.
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Maximum=100
	// +kubebuilder:validation:Minimum=0
	MaxTraffic *int32 `json:"maxTraffic,omitempty" protobuf:"varint,3,opt,name=maxTraffic"`
	// Traffic is the current amount of production traffic served by this model.
	// +kubebuilder:validation:Maximum=100
	// +kubebuilder:validation:Minimum=0
	// Default: 100.
	// +kubebuilder:validation:Optional
	Traffic *int32 `json:"traffic,omitempty" protobuf:"varint,4,opt,name=traffic"`
	// Canary denotes if this deployment is staged release. A staged release will serve traffic in incerements
	// Default: false
	// +kubebuilder:validation:Optional
	Canary *bool `json:"canary,omitempty" protobuf:"varint,5,opt,name=canary"`
	// Shadow denotes if the model is running in shadow mode. a shadow model face the production traffic, however, the predictions are not
	// served back to the client
	// Default: false
	// +kubebuilder:validation:Optional
	Shadow *bool `json:"shadow,omitempty" protobuf:"varint,6,opt,name=shadow"`
	// A released model is a model that should serve production traffic.
	// Default: false
	// +kubebuilder:validation:Optional
	Released *bool `json:"released,omitempty" protobuf:"varint,7,opt,name=released"`
	// a deployed model is a model whose containers are up, but does not serve production traffic.
	// Default: false
	// +kubebuilder:validation:Optional
	Deployed *bool `json:"deployed,omitempty" protobuf:"bytes,8,opt,name=deployed"`
	// TrafficSelector is a filter on the traffic to this model
	// +kubebuilder:validation:Optional
	TrafficSelector *string `json:"trafficSelector,omitempty" protobuf:"bytes,9,opt,name=trafficSelector"`
	// If the deployment is canary, the metric define how to evaluate the canary.
	// Default: none
	// +kubebuilder:validation:Optional
	CanaryMetrics []CanaryMetric `json:"canaryMetrics,omitempty" protobuf:"bytes,10,rep,name=canaryMetrics"`
}

type ModelDeploymentStatus struct {
	// The model image name
	// +kubebuilder:validation:Optional
	ImageName string `json:"imageName,omitempty" protobuf:"bytes,1,opt,name=imageName"`
	// The deployment name that serves this model
	// +kubebuilder:validation:Optional
	DeploymentName string `json:"deploymentName,omitempty" protobuf:"bytes,2,opt,name=deploymentName"`
	// The service name that serves this model
	// +kubebuilder:validation:Optional
	ServiceName string `json:"serviceName,omitempty" protobuf:"bytes,3,opt,name=serviceName"`
	// the name of the horizonal pod autoscaler, if autoscaling is true
	// +kubebuilder:validation:Optional
	HPAName string `json:"hpaName,omitempty" protobuf:"bytes,4,opt,name=hpaName"`
	// P95 latency
	// +kubebuilder:validation:Optional
	P95 float64 `json:"p95,omitempty" protobuf:"bytes,5,opt,name=current95"`
	// P99 is the 99% latency of the model
	// +kubebuilder:validation:Optional
	P99 float64 `json:"p99,omitempty" protobuf:"bytes,6,opt,name=current99"`
	// Last prediction time is the time of the last prediction
	// +kubebuilder:validation:Optional
	LastPredictionTime *metav1.Time `json:"lastPredictionTime,omitempty" protobuf:"bytes,7,opt,name=lastPredictionTime"`
	// +kubebuilder:validation:Optional
	DailyPredictionAvg int32 `json:"dailyPredictionAvg,omitempty" protobuf:"varint,8,opt,name=dailyPredictionAvg"`
	// LastFailure is the last faiure that occur with the model
	// +kubebuilder:validation:Optional
	LastFailure string `json:"lastFailure,omitempty" protobuf:"bytes,9,opt,name=lastFailure"`
	// Phase is the current phase of this model deployment
	// +kubebuilder:validation:Optional
	Phase ModelDeploymentPhase `json:"phase,omitempty" protobuf:"bytes,10,opt,name=phase"`
	// DeployedAt is the last time that this model was deployed
	// +kubebuilder:validation:Optional
	DeployedAt *metav1.Time `json:"deployedAt,omitempty" protobuf:"bytes,11,opt,name=deployedAt"`
	// ReleasedAt is the time that this model was released
	// +kubebuilder:validation:Optional
	ReleasedAt *metav1.Time `json:"releasedAt,omitempty" protobuf:"bytes,12,opt,name=releasedAt"`
}

type ModelDeploymentPhase string

const (
	ModelDeploymentPhaseDeploying ModelDeploymentPhase = "Deploying"
	ModelDeploymentPhaseDeployed  ModelDeploymentPhase = "Deployed"
	ModelDeploymentPhaseShadowing ModelDeploymentPhase = "Shadowing"
	ModelDeploymentPhaseReleasing ModelDeploymentPhase = "Releasing"
	ModelDeploymentPhaseReleased  ModelDeploymentPhase = "Released"
	ModelDeploymentPhaseFailed    ModelDeploymentPhase = "Failed"
)

// +kubebuilder:validation:Enum="tabular";"image";"text";"video";"audio"
type DatasetType string

const (
	DatasetTypeTabular DatasetType = "tabular"
	DatasetTypeImage   DatasetType = "image"
	DatasetTypeText    DatasetType = "text"
	DatasetTypeVideo   DatasetType = "video"
	DatasetTypeAudio   DatasetType = "audio"
)

// AccessType define how client reach the predictor
// +kubebuilder:validation:Enum="cluster-port";"node-port";"load-balancer";"ingress";"mesh";"none"
type AccessType string

const (
	// Use cluster port if the predictor is an internal micro service
	ClusterPortAccessType AccessType = "cluster-port"
	// Use node port if the predictor can be accessed from outside the cluster
	NodePortAccessType AccessType = "node-port"
	// Use load balancer if the predictor can be accessed from outside the cluster
	LoadBalancerAccessType AccessType = "load-balancer"
	// Use ingress if the predictor should register with an ingress.
	IngressAccessType AccessType = "ingress"
	// Use service mesh if the predictor should register with a service mesh
	MeshAccessType AccessType = "mesh"
	// Use none if the desired port is none
	NoneAccessType AccessType = "none"
)

// Op is a relational operator
// +kubebuilder:validation:Enum="lt";"eq";"gt";"ne";"le";"ge"
type Op string

const (
	LT Op = "lt"
	EQ Op = "eq"
	GT Op = "gt"
	NE Op = "ne" // not equal
	LE Op = "le" // less or equal
	GE Op = "ge" // greater or equal
)

// Update strategy is a dataset update strategy
// +kubebuilder:validation:Enum="upsert";"insert";"update"
type UpdateStrategy string

const (
	Upsert UpdateStrategy = "upsert"
	Insert UpdateStrategy = "insert"
	Update UpdateStrategy = "update"
)

// SamplingType defines how the recipe file is sampled.
// +kubebuilder:validation:Enum="header";"random";"filter";"anomaly"
type SamplingType string

const (
	Header  SamplingType = "header"
	Random  SamplingType = "random"
	Filter  SamplingType = "filter"
	Anomaly SamplingType = "anomaly"
)

// +kubebuilder:validation:Enum="unclassified";"confidential";"secret";"top-secret"
type SecurityClearanceLevel string

const (
	SecurityClearanceLevelUnclassified SecurityClearanceLevel = "unclassified"
	SecurityClearanceLevelConfidential SecurityClearanceLevel = "confidential"
	SecurityClearanceLevelSecret       SecurityClearanceLevel = "secret"
	SecurityClearanceLevelTopSecret    SecurityClearanceLevel = "top-secret"
)

// the priority level for a task
// +kubebuilder:validation:Enum="low";"medium";"high";"urgent"
type PriorityLevel string

const (
	PriorityLevelLow    PriorityLevel = "low"
	PriorityLevelMedium PriorityLevel = "medium"
	PriorityLevelHigh   PriorityLevel = "high"
	PriorityLevelUrgent PriorityLevel = "urgent"
)

// ModelType enamurate the model type
// +kubebuilder:validation:Enum="classical";"dnn";"transformer";"chatbot";"rl";
type ModelType string

const (
	ModelTypeClassical   ModelType = "classical"
	ModelTypeDNN         ModelType = "dnn"
	ModelTypeTransformer ModelType = "transformer"
	ModelTypeChatbot     ModelType = "chatbot"
	ModelTypeRL          ModelType = "rl"
)

// +kubebuilder:validation:Enum="flask";"grpc";"onyx";
// Predictor format represent the API implementation of the model
type PredictorFormat string

const (
	FlaskPredictor PredictorFormat = "flask"
	GrpcPredictor  PredictorFormat = "grpc"
	OnyxPredictor  PredictorFormat = "onyx"
)

// ModalityType define the way that ASHA algorithm divide the data .
// Since we are using multi modal alg , this parameter define the modality
// +kubebuilder:validation:Enum="data";"epochs";
type ModalityType string

const (
	ModalityTypeData   ModalityType = "data"
	ModalityTypeEpochs ModalityType = "epochs"
)

// SplitType defines how the data is splitted between training/testing or training/testing/validation
type SplitType string

const (
	SplitTypeRandom         SplitType = "random"
	SplitTypeParitionColumn SplitType = "partition-column"
	SplitTypeGroup          SplitType = "group"
	SplitTypeDatetime       SplitType = "datatime"
	SplitTypeStratified     SplitType = "stratified"
	SplitTypeAuto           SplitType = "auto"
)
