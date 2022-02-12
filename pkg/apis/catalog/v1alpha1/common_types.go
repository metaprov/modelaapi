package v1alpha1

import (
	"fmt"

	v1 "k8s.io/api/core/v1"
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
	SnapshotDatasetTask   TaskName = "snapshot-dataset"
	ProfileStudyTask      TaskName = "profile-study"
	ProfileModelTask      TaskName = "profile-model"
	PublishModelTask      TaskName = "publish-model"
	BakeModelTask         TaskName = "bake-model"
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
	PackageModelTask      TaskName = "package-model"
	ExplainModelTask      TaskName = "explain-model"
	FeatureGenTask        TaskName = "feature-gen"
	FeatureSelectTask     TaskName = "feature-select"
	RunSqlQueryTask       TaskName = "run-sql-query"
	RunWebRequestTask     TaskName = "run-web-request"

	GenerateDataset TaskName = "generate-dataset"
	ValidateModel   TaskName = "validate-model"
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
// +kubebuilder:validation:Enum="binary-classification";"multi-classification";"multi-label-classification";"forecasting";"regression";"clustering";"recommendation";"outlier-detection";"novelty-detection";"topic-modeling";"video-action-recognition";"video-classification";"video-object-tracking";"image-classification";"image-multi-classification";"image-object-detection";"image-segmentation";"auto";"text-ner";"text-classification";"text-summarization";"text-qa";"text-sentiment-analysis";"text-generation";"text-code-generation";"text-translation";"text-lang-detection";"text-grammer-correction";"text-paraphrasing";"text-intent-classification";"text-semantic-similarity";"text-keyword-extraction";"text-pos";"text-tokenization";"text-lemma";"unknown"
type MLTask string

const (
	BinaryClassification          MLTask = "binary-classification"
	MultiClassification           MLTask = "multi-classification"
	MultiLabelClassification      MLTask = "multi-label-classification"
	Forecasting                   MLTask = "forecasting"
	Regression                    MLTask = "regression"
	Clustering                    MLTask = "clustering"
	Recommendation                MLTask = "recommendation"
	OutlierDetection              MLTask = "outlier-detection"
	NoveltyDetection              MLTask = "novelty-detection"
	TopicModeling                 MLTask = "topic-modeling"
	VideoActionRecognition        MLTask = "video-action-recognition"
	VideoClassification           MLTask = "video-classification"
	VideoObjectTracking           MLTask = "video-object-tracking"
	ImageClassification           MLTask = "image-classification"
	ImageMultiLabelClassification MLTask = "image-multi-classification"
	ImageObjectDetection          MLTask = "image-object-detection"
	ImageSegmentation             MLTask = "image-segmentation"
	AutoDetectTask                MLTask = "auto"

	// Text Tasks
	TextNer                  MLTask = "text-ner"
	TextClassification       MLTask = "text-classification"
	TextSummarization        MLTask = "text-summarization"
	TextQA                   MLTask = "text-qa"
	TextSentimentAnalysis    MLTask = "text-sentiment-analysis"
	TextGeneration           MLTask = "text-generation"
	TextCodeGeneration       MLTask = "text-code-generation"
	TextTranslation          MLTask = "text-translation"
	TextLangDetection        MLTask = "text-lang-detection"
	TextGrammarCorrection    MLTask = "text-grammar-correction"
	TextParaphrasing         MLTask = "text-paraphrasing"
	TextIntentClassification MLTask = "text-intent-classification"
	TextSemanticSimilarity   MLTask = "text-semantic-similarity"
	TextKeywordExtraction    MLTask = "text-keyword-extraction"
	TextPOS                  MLTask = "text-pos"
	TextTokenization         MLTask = "text-tokenization"
	TextLemmalization        MLTask = "text-lemma"

	UnknownTask MLTask = "unknown"
)

// ProviderName is the machine learning task name
type ProviderName string

const (
	// Databases
	AmazonAthena     ProviderName = "athena"
	AmazonRedshift   ProviderName = "redshift"
	ApacheDrill      ProviderName = "drill"
	ApacheDruid      ProviderName = "druid"
	ApacheHive       ProviderName = "hive"
	ApacheImpala     ProviderName = "impala"
	ApacheKylin      ProviderName = "kylin"
	ApachePinot      ProviderName = "pinot"
	ApacheSpark      ProviderName = "spark"
	AzureSqlDatabase ProviderName = "azuresqldatabase"
	GcpBigQuery      ProviderName = "bigquery"
	ApacheCassandra  ProviderName = "cassandra"
	CockrouchDB      ProviderName = "cockrouchdb"
	Clickhouse       ProviderName = "clickhouse"
	Couchbase        ProviderName = "couchbase"
	Dermio           ProviderName = "dermio"
	DB2              ProviderName = "db2"
	ElasticSearch    ProviderName = "elasticsearch"
	Exasol           ProviderName = "exasol"
	Kafka            ProviderName = "kafka"
	GoogleSheets     ProviderName = "googlesheets"
	GcpSpanner       ProviderName = "spanner"
	Greenplum        ProviderName = "greenplum"
	MySql            ProviderName = "mysql"
	MongoDb          ProviderName = "mongodb"
	Oracle           ProviderName = "oracle"
	PostgresSQL      ProviderName = "postgres"
	Presto           ProviderName = "presto"
	SAPHana          ProviderName = "hana"
	Snowflake        ProviderName = "snowflake"
	Singlestore      ProviderName = "singlestore"
	Sybase           ProviderName = "sybase"
	MSSqlServer      ProviderName = "mssqlserver"
	Sqlite           ProviderName = "sqlite"
	RabbitMQ         ProviderName = "rabbitmq"
	Teradata         ProviderName = "teradata"
	Vertica          ProviderName = "vertica"
	Odbc             ProviderName = "odbc"
	Informix         ProviderName = "informix"

	// graph databases
	Neo4j ProviderName = "neo4j"

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
	FTP          ProviderName = "ftp"
	SFTP         ProviderName = "sftp"
	Dropbox      ProviderName = "dropbox"
	Box          ProviderName = "box"

	// Docker Image Registry
	Dockerhub     ProviderName = "dockerhub"
	ImageRegistry ProviderName = "image-registry"

	// Git Repository
	GitHub    ProviderName = "github"
	Bitbucket ProviderName = "bitbucket"
	Gitlab    ProviderName = "gitlab"

	// Messaging
	SmtpProvider ProviderName = "smtp"
	Slack        ProviderName = "slack"
	Hipchat      ProviderName = "hipchat"
	Discord      ProviderName = "discord"
	PageDuty     ProviderName = "pagerduty"
	PushOver     ProviderName = "pushover"
	OpsGenie     ProviderName = "opsgenie"
	Webhook      ProviderName = "webook"
	VictorOps    ProviderName = "victorops"
	Flock        ProviderName = "flock"
	MSTeam       ProviderName = "msteam"
	MatterMost   ProviderName = "mattermost"

	// Social media
	Facebook ProviderName = "facebook"
	Twitter  ProviderName = "twitter"

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
		return Forecasting, nil
	case "clustering":
		return Clustering, nil
	case "recommendation":
		return Recommendation, nil
	case "outlier-detection":
		return OutlierDetection, nil
	case "novelty-detection":
		return NoveltyDetection, nil
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
	PullRequestUnassigned   WebHookNameAndAction = "pull_request_unassigned"
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
		metric == MeanTweedieDeviance ||
		metric == MAPE ||
		metric == SMAPE ||
		metric == MDAPE

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
		metric == JacquardScore ||
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

// +kubebuilder:validation:Enum="accuracy";"average-precision";"balanced-accuracy";"pr-auc";"pr-auc-micro";"pr-auc-macro";"pr-auc-weighted";"f1";"f1-micro";"f1-macro";"f1-weighted";"f1-samples";"precision";"precision-micro";"precision-macro";"precision-weighted";	"precision-samples";"recall";"recall-macro";"recall-micro";"recall-weighted";"recall-samples";"log-loss";"auc";"auc-micro";"auc-macro";"auc-weighted";"zero-one";"hamming-loss";"hinge-loss";"jacquard-loss";"mcc";"fp";"fn";"tn";"tp";"tpr";"fpr";"tnr";"matthews-corr-coef";"explained-variance";"max-error";"mae";"mse";"msle";"rmse";"rmsle";"median-absolute-error";"r2";"adj-r2";"mean_poisson_deviance";"mean-gamma-deviance";"mean-tweedie-deviance";"mape";"maze";"mdape";"smape";"adjusted-mutual-info-score";"adjusted-rand-score";"completeness-score";"fowlkes-mallows-score";"homogeneity-score";"mutual-info-score";"normalized-mutual-info-score";"v-measure-score";"p50-latency";"p95-latency";"p99-latency";"cpu";"gpu";"mem";"gpu-mem";"req-per-sec";"uncertain-prediction-percent";"none";
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
	PRRocAuc          Metric = "pr-auc"
	PRRocAucMicro     Metric = "pr-auc-micro"
	PRRocAucMacro     Metric = "pr-auc-macro"
	PRRocAucWeighted  Metric = "pr-auc-weighted"
	ZeroOne           Metric = "zero-one"
	HammingLoss       Metric = "hamming-loss"
	HingeLoss         Metric = "hinge-loss"
	JacquardScore     Metric = "jacquard-loss"
	MatthewsCorrCoef  Metric = "mcc"
	Fp                Metric = "fp"
	Fn                Metric = "fn"
	Tn                Metric = "tn"
	Tp                Metric = "tp"
	Tpr               Metric = "tpr"
	Fpr               Metric = "fpr"
	Tnr               Metric = "tnr"
	MCC               Metric = "matthews-corr-coef"

	/// Regression
	ExplainedVariance   Metric = "explained-variance"
	MaxError            Metric = "max-error"
	MAE                 Metric = "mae"
	MSE                 Metric = "mse"
	MSLE                Metric = "msle"
	RMSE                Metric = "rmse"
	RMSLE               Metric = "rmsle"
	MedianAbsoluteError Metric = "median-absolute-error"
	R2                  Metric = "r2"
	AdjR2               Metric = "adj-r2"
	MeanPoissonDeviance Metric = "mean_poisson_deviance"
	MeanGammaDeviance   Metric = "mean-gamma-deviance"
	MeanTweedieDeviance Metric = "mean-tweedie-deviance"

	// Forecast specific
	MAPE  Metric = "mape"
	MAZE  Metric = "maze"
	MDAPE Metric = "mdape" // median absolute percentage error
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
	P50Latency                 Metric = "p50-latency"
	P95Latency                 Metric = "p95-latency"
	P99Latency                 Metric = "p99-latency"
	Cpu                        Metric = "cpu"
	Gpu                        Metric = "gpu"
	Mem                        Metric = "mem"
	GpuMem                     Metric = "gpu-mem"
	ReqSec                     Metric = "req-per-sec"
	UncertainPredictionPercent Metric = "uncertain-prediction-percent"

	NoneMetric Metric = "none"
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
// CategoricalEncoding
//==============================================================================
// +kubebuilder:validation:Enum="one-hot-encoding";"one-hot-encoding-top-categories";"ordinal-encoding";"count-encoding";"target-encoding";"weight-of-evidence-encoding";"binary-encoding";"label-encoding";"hash-encoding";"catboost-encoding";"loo-encoding";"no-encoding";"auto";"none"
type CategoricalEncoding string

const (
	OneHotEncoding      CategoricalEncoding = "one-hot-encoding"
	OneHotEncoderTop    CategoricalEncoding = "one-hot-encoding-top-categories"
	OrdinalEncoding     CategoricalEncoding = "ordinal-encoding"
	CountEncoding       CategoricalEncoding = "count-encoding"
	TargetEncoding      CategoricalEncoding = "target-encoding"
	WoERatioEncoding    CategoricalEncoding = "weight-of-evidence-encoding"
	BinaryEncoding      CategoricalEncoding = "binary-encoding"
	LabelEncoding       CategoricalEncoding = "label-encoding"
	HashEncoding        CategoricalEncoding = "hash-encoding"
	CatboostEncoding    CategoricalEncoding = "catboost-encoding"
	LeaveOneOutEncoding CategoricalEncoding = "loo-encoding"
	NoEncoding          CategoricalEncoding = "no-encoding"
	AutoEncoding        CategoricalEncoding = "auto"
	NoneEncoding        CategoricalEncoding = "none"
)

func ParseCategoricalEncoding(name string) CategoricalEncoding {
	names := []CategoricalEncoding{
		OneHotEncoding,
		OneHotEncoderTop,
		OrdinalEncoding,
		CountEncoding,
		TargetEncoding,
		WoERatioEncoding,
		BinaryEncoding,
		LabelEncoding,
		HashEncoding,
		NoEncoding,
	}

	for _, v := range names {
		if string(v) == name {
			return v
		}
	}
	return AutoEncoding
}

//==============================================================================
// Imputation
//==============================================================================
// +kubebuilder:validation:Enum="remove-rows-with-missing-values";"replace-with-mean";"replace-with-median";"replace-with-arbitrary-value";"freq-category-imputation";"add-missing-value-indicator";"knn";"iterative";"mice";"no-imputation";"auto";"none"
type Imputation string

const (
	RemoveRowsWithMissingValues         Imputation = "remove-rows-with-missing-values"
	ReplaceWithMeanImputation           Imputation = "replace-with-mean"
	ReplaceWithMedianImputation         Imputation = "replace-with-median"
	ReplaceWithArbitraryValueImputation Imputation = "replace-with-arbitrary-value"
	FreqCategoryImputation              Imputation = "freq-category-imputation"
	AddMissingValueIndicatorImputation  Imputation = "add-missing-value-indicator"
	KnnImputation                       Imputation = "knn"
	IterativeImputation                 Imputation = "iterative"
	MICEImputation                      Imputation = "mice"
	NoImputation                        Imputation = "no-imputation"
	AutoImputer                         Imputation = "auto"
	NoneImputer                         Imputation = "none"
)

func ParseImputation(name string) Imputation {
	names := []Imputation{
		RemoveRowsWithMissingValues,
		ReplaceWithMeanImputation,
		ReplaceWithMedianImputation,
		ReplaceWithArbitraryValueImputation,
		FreqCategoryImputation,
		AddMissingValueIndicatorImputation,
		KnnImputation,
		MICEImputation,
		IterativeImputation,
		NoImputation,
		AutoImputer,
	}

	for _, v := range names {
		if string(v) == name {
			return v
		}
	}
	return AutoImputer
}

//==============================================================================
// Scaling
//==============================================================================
// +kubebuilder:validation:Enum="standard-scaling";"max-abs-scaling";"min-max-scaling";"normalizion-scaling";"robust-scaling";"scale-to-unit-norm";"none";"auto";
type Scaling string

const (
	StandardScaling Scaling = "standard-scaling"
	MaxAbsScaling   Scaling = "max-abs-scaling"
	MinMaxScaling   Scaling = "min-max-scaling"
	Normalization   Scaling = "normalizion-scaling"
	RobustScaling   Scaling = "robust-scaling"
	ScaleToUnitNorm Scaling = "scale-to-unit-norm"
	NoneScaling     Scaling = "none"
	AutoScaling     Scaling = "auto"
)

func ParseScaler(name string) Scaling {
	names := []Scaling{
		StandardScaling,
		MaxAbsScaling,
		MinMaxScaling,
		Normalization,
		RobustScaling,
		ScaleToUnitNorm,
		NoneScaling,
		AutoScaling,
	}

	for _, v := range names {
		if string(v) == name {
			return v
		}
	}
	return AutoScaling
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
// Variable Transformation
//==============================================================================

// +kubebuilder:validation:Enum="log-transformation";"reciprocal-transformation";"sqrt-transformation";"power-transformation";"box-cox-transformation";"yj-transformation";"none";"auto"
type VariableTransformation string

const (
	LogTransformation        VariableTransformation = "log-transformation"
	ReciprocalTransformation VariableTransformation = "reciprocal-transformation"
	SqrtTransformation       VariableTransformation = "sqrt-transformation"
	PowerTransformation      VariableTransformation = "power-transformation"
	BoxCoxTransformation     VariableTransformation = "box-cox-transformation"
	YeoJohnsonTransformation VariableTransformation = "yj-transformation"
	NoneTransform            VariableTransformation = "none"
	AutoTransform            VariableTransformation = "auto"
)

//==============================================================================
// Discretisation
//==============================================================================
// +kubebuilder:validation:Enum="equal-width-discretisation-";"equal-freq-discretisation";"kbin-discretisation";"kernel-centerer-discretisation";"label-binarizer-discretisation";"multi-label-binarizer-discretisation";"none";"auto"
type Discretisation string

const (
	EqualWidthDiscretisation          Discretisation = "equal-width-discretisation-"
	EqualFreqDiscretisation           Discretisation = "equal-freq-discretisation"
	KBinsDiscretisation               Discretisation = "kbin-discretisation"
	KernelCentererDiscretisation      Discretisation = "kernel-centerer-discretisation"
	LabelBinarizerDiscretisation      Discretisation = "label-binarizer-discretisation"
	MultiLabelBinarizerDiscretisation Discretisation = "multi-label-binarizer-discretisation"
	NoneDiscretisation                Discretisation = "none"
	AutoDiscretisation                Discretisation = "auto"
)

//==============================================================================
// Outlier Handling
//==============================================================================
// +kubebuilder:validation:Enum="trim-outliers";"winsorizer-outliers";"cap-outliers";"zero-code-outliers";"none";"auto"
type OutlierHandling string

const (
	TrimOutlierHandling       OutlierHandling = "trim-outliers"
	WinsorizerOutlierHandling OutlierHandling = "winsorizer-outliers"
	CapOutlierHandling        OutlierHandling = "cap-outliers"
	ZeroCodeOutlierHandling   OutlierHandling = "zero-code-outliers"
	NoneOutlier               OutlierHandling = "none"
	AutoOutlier               OutlierHandling = "auto"
)

//==============================================================================
// Datatime Transformation
//==============================================================================
// +kubebuilder:validation:Enum="extract-datetime-information";"none";"auto"
type DatetimeTransformation string

const (
	ExtractDateTimeInformation DatetimeTransformation = "extract-datetime-information"
	NoneDatetime               DatetimeTransformation = "none"
	AutoDatetime               DatetimeTransformation = "auto"
)

//==============================================================================
// Imbalance Handling
//==============================================================================
// +kubebuilder:validation:Enum="adasyn";"baseline-smote";"kmean-smote";"random-over-sampler";"smote";"smotenc";"svmsmote";"none";"auto";class-weights;
type ImbalanceHandling string

const (
	ADASYN            ImbalanceHandling = "adasyn"
	BorderlineSMOTE   ImbalanceHandling = "baseline-smote"
	KMeansSMOTE       ImbalanceHandling = "kmean-smote"
	RandomOverSampler ImbalanceHandling = "random-over-sampler"
	SMOTE             ImbalanceHandling = "smote"
	SMOTENC           ImbalanceHandling = "smotenc"
	SVMSMOTE          ImbalanceHandling = "svmsmote"
	ClassWeights      ImbalanceHandling = "class-weights"
	ImbalanceNone     ImbalanceHandling = "none"
	ImbalanceAuto     ImbalanceHandling = "auto"
)

//==============================================================================
// Feature Engineering
//==============================================================================
// +kubebuilder:validation:Enum="pca";"polynomial-features";"rbf-sampler";"fast-ica";"nystroem";"none";"auto"
type DimensionReduction string

const (
	PCA                    DimensionReduction = "pca"
	PolynomialFeatures     DimensionReduction = "polynomial-features"
	RBFSampler             DimensionReduction = "rbf-sampler"
	FastIca                DimensionReduction = "fast-ica"
	Nystroem               DimensionReduction = "nystroem"
	NoneFeatureEngineering DimensionReduction = "none"
	AutoFeatureEngineering DimensionReduction = "auto"
)

type TextEncoding string

const (
	TfIdf             TextEncoding = "tfidf"
	CountVectorizer   TextEncoding = "count-vec"
	HashingVectorizer TextEncoding = "hashing-vec"
	NoneTextTransform TextEncoding = "none"
	AutoTextTransform TextEncoding = "auto"
)

// +kubebuilder:validation:Enum="drop-features";"drop-constant-features";"drop-deplicated-features";"drop-correlated-features";"mutal-information-feature-selection";"chisquare-fearture-selection";"anova-feature-selection";"step-forward-feature-selection";"step-backward-feature-selection";"lasso-regression-feature-selection";"tree-importance-feature-selection";"recursive-feature-elimination";"recursive-feature-addition";"select-percentile";"select-kbest";"select-fpr";"select-fdr";"variance-threshold";"none";"auto"
type FeatureSelection string

const (
	DropFeatures                     FeatureSelection = "drop-features"
	DropConstantFeatures             FeatureSelection = "drop-constant-features"
	DropDuplicateFeatures            FeatureSelection = "drop-deplicated-features"
	DropCorrelatedFeatures           FeatureSelection = "drop-correlated-features"
	MutalInformationFeatureSelection FeatureSelection = "mutal-information-feature-selection"
	ChiSquareFeatureSelection        FeatureSelection = "chisquare-fearture-selection"
	AnovaFeatureSelection            FeatureSelection = "anova-feature-selection"
	StepForwardFeatureSelection      FeatureSelection = "step-forward-feature-selection"
	StepBackwardFeatureSelection     FeatureSelection = "step-backward-feature-selection"
	LassoRegressionFeatureSelection  FeatureSelection = "lasso-regression-feature-selection"
	TreeImportanceFeatureSelection   FeatureSelection = "tree-importance-feature-selection"
	RecursiveFeatureElimination      FeatureSelection = "recursive-feature-elimination"
	RecursiveFeatureAddition         FeatureSelection = "recursive-feature-addition"
	SelectPercentile                 FeatureSelection = "select-percentile"
	SelectKBest                      FeatureSelection = "select-kbest"
	SelectFpr                        FeatureSelection = "select-fpr"
	SelectFdr                        FeatureSelection = "select-fdr"
	VarianceThreshold                FeatureSelection = "variance-threshold"
	NoneFeatureSelection             FeatureSelection = "none"
	AutoFeatureSelection             FeatureSelection = "auto"
)

//==============================================================================
// Estimators
//==============================================================================

// +kubebuilder:validation:Enum="knn-regressor";"ridge-regressor";"lasso-regressor";"ada-boost-regressor";"decision-tree-regressor";"extra-tree-regressor";"linear-svr";"svr";"passive-agressive-regressor";"sgd-regressor";"gradient-boosting-regressor";"random-forest-regressor";"xgb-regressor";"catboost-regressor";"sgd-regressor";"gradient-boosting-regressor";"random-forest-regressor";"xgb-regressor";"catboost-regressor";"lightgbm-regressor";"elasticnet-regressor";"dnn-regressor";"elliptic-envelope";"one-class-svm";"isolation-forest";"local-outlier-factor";"prophet";"knn-classifier";"ada-boost-classifier";"bernoulli-nb";"decision-tree-classifier";"extra-tree-classifier";"linear-svc";"svc";"passive-aggressive-classifier";"sgd-classifier";"logistic-regression";"gradient-boosting-classifier";"random-forest-classifier";"xgboost-classifier";"ridge-classifier";"quadratic-discriminant";"linear-discriminant";"lightgbm-classifier";"catboost-classifier";"stacking-ensemble";"none";"arima";"auto-arima";"vrima";"exponential-smoothing";"fast-fourier-transform";"nbeats";"theata-method";"als";"bayesian-personalized-ranking";"voting-classifier";"voting-regressor";"stacking-classifier";"stacking-regressor";"hist-gradient-boosting-classifier";"hist-gradient-boosting-regressor"
type ClassicEstimatorName string

const (
	// Regression
	KNeighborsRegressor           ClassicEstimatorName = "knn-regressor"
	RidgeRegressor                ClassicEstimatorName = "ridge-regressor"
	LassoRegressor                ClassicEstimatorName = "lasso-regressor"
	AdaBoostRegressor             ClassicEstimatorName = "ada-boost-regressor"
	DecisionTreeRegressor         ClassicEstimatorName = "decision-tree-regressor"
	ExtraTreeRegressor            ClassicEstimatorName = "extra-tree-regressor"
	LinearSvr                     ClassicEstimatorName = "linear-svr"
	Svr                           ClassicEstimatorName = "svr"
	PassiveArressiveRegressor     ClassicEstimatorName = "passive-agressive-regressor"
	SGDRegressor                  ClassicEstimatorName = "sgd-regressor"
	GradientBoostingRegressor     ClassicEstimatorName = "gradient-boosting-regressor"
	HistGradientBoostingRegressor ClassicEstimatorName = "hist-gradient-boosting-regressor"
	RandomForestRegressor         ClassicEstimatorName = "random-forest-regressor"
	XGBRegressor                  ClassicEstimatorName = "xgb-regressor"
	CatBoostRegressor             ClassicEstimatorName = "catboost-regressor"
	LightGbmRegressor             ClassicEstimatorName = "lightgbm-regressor"
	ElasticNetRegressor           ClassicEstimatorName = "elasticnet-regressor"
	DNNRegressor                  ClassicEstimatorName = "dnn-regressor"

	// OutlierFilter
	EllipticEnvelope   ClassicEstimatorName = "elliptic-envelope"
	OneClassSVM        ClassicEstimatorName = "one-class-svm"
	IsolationForest    ClassicEstimatorName = "isolation-forest"
	LocalOutlierFactor ClassicEstimatorName = "local-outlier-factor"

	// Forcast
	Prophet              ClassicEstimatorName = "prophet"
	ARIMA                ClassicEstimatorName = "arima"
	AutoARIMA            ClassicEstimatorName = "auto-arima"
	VRIMA                ClassicEstimatorName = "vrima"
	ExponentialSmoothing ClassicEstimatorName = "exponential-smoothing"
	FastFourierTransform ClassicEstimatorName = "fast-fourier-transform"
	NBeats               ClassicEstimatorName = "nbeats"
	ThetaMethod          ClassicEstimatorName = "theata-method"

	// Recommendation
	ALS                         ClassicEstimatorName = "als"
	BayesianPersonalizedRanking ClassicEstimatorName = "bayesian-personalized-ranking"

	// Classifiers
	KNeighborsClassifier           ClassicEstimatorName = "knn-classifier"
	AdaBoostClassifier             ClassicEstimatorName = "ada-boost-classifier"
	BernoulliNB                    ClassicEstimatorName = "bernoulli-nb"
	DecisionTreeClassifier         ClassicEstimatorName = "decision-tree-classifier"
	ExtraTreeClassifier            ClassicEstimatorName = "extra-tree-classifier"
	LinearSVC                      ClassicEstimatorName = "linear-svc"
	SVC                            ClassicEstimatorName = "svc"
	PassiveAggressiveClassifier    ClassicEstimatorName = "passive-aggressive-classifier"
	SGDClassifier                  ClassicEstimatorName = "sgd-classifier"
	LogisticRegression             ClassicEstimatorName = "logistic-regression"
	GradientBoostingClassifier     ClassicEstimatorName = "gradient-boosting-classifier"
	HistGradientBoostingClassifier ClassicEstimatorName = "hist-gradient-boosting-classifier"
	RandomForestClassifier         ClassicEstimatorName = "random-forest-classifier"
	XGBClassifier                  ClassicEstimatorName = "xgboost-classifier"
	RidgeClassifier                ClassicEstimatorName = "ridge-classifier"
	QuadraticDiscriminant          ClassicEstimatorName = "quadratic-discriminant"
	LinearDiscriminant             ClassicEstimatorName = "linear-discriminant"
	LightGBMClassifier             ClassicEstimatorName = "lightgbm-classifier"
	CatBoostClassifier             ClassicEstimatorName = "catboost-classifier"
	StackingEnsemble               ClassicEstimatorName = "stacking-ensemble" // for stacking ensemble
	UnknownEstimatorName           ClassicEstimatorName = "unknown"
	NoneEstimatorName              ClassicEstimatorName = "none"

	// Clustering
	SpectralClustering        ClassicEstimatorName = "spectral"
	AgglomerativeClustering   ClassicEstimatorName = "agglomerative"
	GaussianMixtureClustering ClassicEstimatorName = "gaussian-mixture"
	KMeanClustering           ClassicEstimatorName = "kmean"
	DBSCANClustering          ClassicEstimatorName = "dbscan"

	// Meta Estimators
	VotingClassifier   ClassicEstimatorName = "voting-classifier"
	VotingRegressor    ClassicEstimatorName = "voting-regressor"
	StackingClassifier ClassicEstimatorName = "stacking-classifier"
	StackingRegressor  ClassicEstimatorName = "stacking-regressor"
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

		// Forecasting
		Prophet,
		ARIMA,
		AutoARIMA,
		VRIMA,
		ExponentialSmoothing,
		FastFourierTransform,
		NBeats,
		ThetaMethod,

		// Recommendation
		ALS,
		BayesianPersonalizedRanking,
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

// +kubebuilder:validation:Enum="boolean";"datetime";"number";"categorical";"ordinal";"text";"json";"number-list";"categorical-list";"text-list";
type DataType string

const (
	DataTypeBoolean         DataType = "boolean"
	DataTypeDateTime        DataType = "datetime"
	DataTypeNumber          DataType = "number"
	DataTypeCategorical     DataType = "categorical"
	DataTypeOrdinal         DataType = "ordinal"
	DataTypeText            DataType = "text"
	DataTypeJson            DataType = "json"
	DataTypeNumberList      DataType = "number-list"
	DataTypeCategoricalList DataType = "categorical-list"
	DataTypeTextList        DataType = "text-list"
)

// +kubebuilder:validation:Enum="url";"path";"password";"time";"count";"interval";"nominal";"email";"creditcard";"uuid";"uuid5";"uuid";"base64";"latitude";"longtitude";"dns";"ip4";"ip6";"ssn";"alpha";"alphanumeric";"unknown";"color";"currency";"date";"guid";"hyperlink";"image";"media";"file";"embedding";"record";"useless";"none"
type DataDomain string

const (
	DataDomainUrl          DataDomain = "url"
	DataDomainPath         DataDomain = "path"
	DataDomainPassword     DataDomain = "password"
	DataDomainTime         DataDomain = "time"
	DataDomainCount        DataDomain = "count"
	DataDomainInterval     DataDomain = "interval"
	DataDomainNominal      DataDomain = "nominal"
	DataDomainEmail        DataDomain = "email"
	DataDomainCreditCard   DataDomain = "creditCard"
	DataDomainUuid3        DataDomain = "uuid"
	DataDomainUuid5        DataDomain = "uuid5"
	DataDomainUuid         DataDomain = "uuid"
	DataDomainBase64       DataDomain = "base64"
	DataDomainLatitude     DataDomain = "latitude"
	DataDomainLongtitude   DataDomain = "longtitude"
	DataDomainDnsName      DataDomain = "dns"
	DataDomainIp4          DataDomain = "ip4"
	DataDomainIp6          DataDomain = "ip6"
	DataDomainSsn          DataDomain = "ssn"
	DataDomainAlpha        DataDomain = "alpha"
	DataDomainAlphaNumeric DataDomain = "alphanumeric"
	DataDomainUnknown      DataDomain = "unknown"
	DataDomainColor        DataDomain = "color"
	DataDomainCurrency     DataDomain = "currency"
	DataDomainDate         DataDomain = "date"
	DataDomainGuid         DataDomain = "guid"
	DataDomainHyperlink    DataDomain = "hyperlink"
	DataDomainImage        DataDomain = "image"
	DataDomainMedia        DataDomain = "media"
	DataDomainFile         DataDomain = "file"
	DataDomainEmbedding    DataDomain = "embedding"
	DataDomainRecord       DataDomain = "record"
	DataDomainUseless      DataDomain = "useless"
	DataDomainNone         DataDomain = "none"
)

// +kubebuilder:validation:Enum="email";"hipchat";"pagerduty";"pushover";"slack";"opengenie";"webook";"victorops";"wechat";"msteams"
type NotificationReceiver string

const (
	NotificationReceiverEmail     NotificationReceiver = "email"
	NotificationReceiverHipchat   NotificationReceiver = "hipchat"
	NotificationReceiverPageDuty  NotificationReceiver = "pagerduty"
	NotificationReceiverPushOver  NotificationReceiver = "pushover"
	NotificationReceiverSlack     NotificationReceiver = "slack"
	NotificationReceiverOpenGenie NotificationReceiver = "opengenie"
	NotificationReceiverWebhook   NotificationReceiver = "webhook"
	NotificationReceiverVictorOps NotificationReceiver = "victorops"
	NotificationReceiverWechat    NotificationReceiver = "wechat"
	NotificationReceiverMSTeams   NotificationReceiver = "msteams"
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
	case NotificationReceiverMSTeams:
		return 9
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

// +kubebuilder:validation:Enum="none";"group-kfold";"group-shuffle-split";"kfold";"leave-one-group-out";"leave-p-groups-out";"leave-one-out";"leave-p-out";"predefined-split";"repeated-kfold";"repeated-stratified-k-fold";"shuffle-split";"stratified-k-fold";"stratified-shuffle-split";"stratified-group-k-fold";"time-series-split"
type CvType string

const (
	CvTypeNone                    CvType = "none"
	CvTypeGroupKFold              CvType = "group-kfold"
	CvTypeGroupShuffleSplit       CvType = "group-shuffle-split"
	CVTypeKFold                   CvType = "kfold"
	CVTypeLeaveOneGroupOut        CvType = "leave-one-group-out"
	CvTypeLeavePGroupsOut         CvType = "leave-p-groups-out"
	CvTypeLeaveOneOut             CvType = "leave-one-out"
	CvTypeLeavePOut               CvType = "leave-p-out"
	CvTypePredefinedSplit         CvType = "predefined-split"
	CvTypeRepeatedKFold           CvType = "repeated-kfold"
	CvTypeRepeatedStratifiedKFold CvType = "repeated-stratified-k-fold"
	CvTypeShuffleSplit            CvType = "shuffle-split"
	CvTypeStratifiedKFold         CvType = "stratified-k-fold"
	CvTypeStratifiedShuffleSplit  CvType = "stratified-shuffle-split"
	CvTypeStratifiedGroupKFold    CvType = "stratified-group-k-fold"
	CvTypeTimeSeriesSplit         CvType = "time-series-split"
)

//==============================================================================
// File Encoding Type
//==============================================================================

// +kubebuilder:validation:Enum="utf-8";"latin-1";"utf-16";
type FileEncoding string

const (
	FileEncodingUtf8 FileEncoding = "utf-8"
	//iso-8859-1
	FileEncodingLating1 FileEncoding = "latin-1"
	FileEncodingUtf16   FileEncoding = "utf-16"
)

type StatusError string

const (
	InvalidConfigurationError  StatusError = "InvalidConfiguration"
	InsufficientResourcesError StatusError = "InsufficientResources"
	CreateError                StatusError = "CreateError"
	UpdateError                StatusError = "UpdateError"
	DeleteError                StatusError = "DeleteError"
)

//==============================================================================
// Connection Categoty Type
//==============================================================================

// +kubebuilder:validation:Enum="general";"cloud";"docker-image-registry";"database";"git";"messaging";
type ConnectionCategory string

const (
	ConnectionCategoryGeneral             ConnectionCategory = "general"
	ConnectionCategoryCloudProvider       ConnectionCategory = "cloud"
	ConnectionCategoryDockerImageRegistry ConnectionCategory = "docker-image-registry"
	ConnectionCategoryDatabase            ConnectionCategory = "database"
	ConnectionCategoryGit                 ConnectionCategory = "git"
	ConnectionCategoryMessaging           ConnectionCategory = "messaging"
	ConnectionMessagerBroker              ConnectionCategory = "message-broker"
	ConnectionGraphDatabase               ConnectionCategory = "graph-database"
	ConnectionSocialMedia                 ConnectionCategory = "social-media"
)

type EnsembleType string

const (
	VotingEnsembleType EnsembleType = "voting"
	StackEnsembleType  EnsembleType = "stacking"
)

//==============================================================================
// Trigger Schedule
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

//==============================================================================
// Trigger Type
//==============================================================================

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

//==============================================================================
// Condition Reason
//==============================================================================

type ConditionReason string

const (
	Failed             ConditionReason = "Failed"
	Success            ConditionReason = "Success"
	Running            ConditionReason = "Running"
	WaitingForApproval ConditionReason = "WaitingForApproval"
	Approved           ConditionReason = "Approved"
	Denied             ConditionReason = "Denied"
)

//==============================================================================
// Hardware Target
//==============================================================================

// +kubebuilder:validation:Enum="amd-epyc-2";"arma-53";"arma-72";"intel-cascade-lake";"intel-broadwell";"intel-skylake";"tesla-v100";"tesla-k80";"t4";"raspberry-pi8-modela-b";
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
	HardwareTargetRaspberryPi8MODELB HardwareTarget = "raspberry-pi8-modela-b"
)

//==============================================================================
// Shap methods
//==============================================================================
// +kubebuilder:validation:Enum="permutation";"partition";"tree";"kernel";"sampling";"linear";"deep";"gradient";"auto";"none"
type ShapType string

const (
	ShapTypePermutation ShapType = "permutation"
	ShapTypePaartition  ShapType = "partition"
	ShapTypeTree        ShapType = "tree"
	ShapTypeKernel      ShapType = "kernel"
	ShapTypeSampling    ShapType = "sampling"
	ShapTypeLinear      ShapType = "linear"
	ShapTypeDeep        ShapType = "deep"
	ShapTypeGradient    ShapType = "gradient"
	ShapTypeAuto        ShapType = "auto"
	ShapTypeNone        ShapType = "none"
)

//==============================================================================
// Compiler Name
//==============================================================================

// +kubebuilder:validation:Enum="tvm";"onyx";"xla";"none"
type CompilerName string

const (
	CompilerNameTVM  CompilerName = "tvm"
	CompilerNameOnyx CompilerName = "onyx"
	CompilerNameXla  CompilerName = "xla"
	CompilerNameNone CompilerName = "none"
)

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
	// Active denote that the schedule is enabled
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"bytes,1,opt,name=enabled"`
	// The start time of the schedule
	// +kubebuilder:validation:Optional
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,2,opt,name=startTime"`
	// EndTime is the end time of the schedule
	// +kubebuilder:validation:Optional
	EndTime *metav1.Timestamp `json:"endTime,omitempty" protobuf:"bytes,3,opt,name=endTime"`
	// Cron string of the schedule.
	// +kubebuilder:validation:Optional
	Cron *string `json:"cron,omitempty" protobuf:"bytes,4,opt,name=cron"`
	// +kubebuilder:validation:Optional
	// The type of schedule events.
	Type TriggerScheduleEventType `json:"type,omitempty" protobuf:"bytes,5,opt,name=type"`
}

// Measurement is a value for a specific metric
type Measurement struct {
	// The metric type name (e.g. F1 / Accuracy)
	// +kubebuilder:validation:Required
	Metric *Metric `json:"metric" protobuf:"bytes,1,opt,name=metric"`
	// The value for this model
	// +kubebuilder:validation:Required
	// +required
	Value *float64 `json:"value" protobuf:"bytes,2,opt,name=value"`
}

// The desired state of the model.
type ModelDeploymentSpec struct {
	// ModelName is the name of the model. The name must be unique within
	// +kubebuilder:validation:Required
	// +required
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
	// MountTar means that we would mount the model tar file. Else we would use baked image.
	// Default: true
	MountTar *bool `json:"mountTar,omitempty" protobuf:"bytes,9,opt,name=mountTar"`
	// TrafficSelector is a filter on the traffic to this model
	// +kubebuilder:validation:Optional
	TrafficSelector *string `json:"trafficSelector,omitempty" protobuf:"bytes,10,opt,name=trafficSelector"`
	// If the deployment is canary, the metric define how to evaluate the canary.
	// Default: none
	// +kubebuilder:validation:Optional
	CanaryMetrics []CanaryMetric `json:"canaryMetrics,omitempty" protobuf:"bytes,11,rep,name=canaryMetrics"`
}

type ModelDeploymentStatus struct {
	// The model image name
	// +kubebuilder:validation:Optional
	ImageName string `json:"imageName,omitempty" protobuf:"bytes,1,opt,name=imageName"`
	// The deployment name that serves this model
	// +kubebuilder:validation:Optional
	DeploymentRef v1.ObjectReference `json:"deploymentRef,omitempty" protobuf:"bytes,2,opt,name=deploymentRef"`
	// The service name that serves this model
	// +kubebuilder:validation:Optional
	ServiceRef v1.ObjectReference `json:"serviceRef,omitempty" protobuf:"bytes,3,opt,name=serviceRef"`
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
	// The dataset where this model was trained on
	TrainingDatasetName string `json:"trainingDatasetName,omitempty" protobuf:"bytes,13,opt,name=trainingDatasetName"`
	// The account name of the approver
	// +kubebuilder:validation:Optional
	ApprovedBy string `json:"approvedBy,omitempty" protobuf:"bytes,14,opt,name=approvedBy"`
	// The time of approval
	// +kubebuilder:validation:Optional
	ApprovedAt *metav1.Time `json:"approvedAt,omitempty" protobuf:"bytes,15,opt,name=approvedAt"`
	// Holds the actual deployment and service
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

// Classify the model per the study phase. for example, feature engineering models, baseline models,
// +kubebuilder:validation:Enum="feature-engineering";"baseline";"search";"ensemble";"test"
type ModelClassType string

const (
	ModelStudyPhaseClassTypeFE       ModelClassType = "feature-engineering" // for feature engineering models
	ModelStudyPhaseClassTypeBaseine  ModelClassType = "baseline"            // for baseline models
	ModelStudyPhaseClassTypeSearch   ModelClassType = "search"              // for search model
	ModelStudyPhaseClassTypeEnsemble ModelClassType = "ensemble"            // for ensemble models
	ModelStudyPhaseClassTypeTest     ModelClassType = "test"                // for model in the search phase
)

// SamplingType defines how the recipe file is sampled.
// +kubebuilder:validation:Enum="header";"random";"filter";"anomaly";"stratified"
type SamplingType string

const (
	Header     SamplingType = "header"
	Random     SamplingType = "random"
	Filter     SamplingType = "filter"
	Anomaly    SamplingType = "anomaly"
	Stratified SamplingType = "stratified"
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

// +kubebuilder:validation:Enum="one-to-one";"one-to-many";"many-to-many";
// Relationship type between data sources
type RelationshipArity string

const (
	RelationshipArityOneToOne   RelationshipArity = "one-to-one"
	RelationshipArityOneToMany  RelationshipArity = "one-to-many"
	RelationshipArityManyToMany RelationshipArity = "many-to-many"
)

// ModalityType define the way that ASHA algorithm divide the data .
// Since we are using multi modal alg , this parameter define the modality
// +kubebuilder:validation:Enum="data";"epochs";
type ModalityType string

const (
	ModalityTypeData   ModalityType = "data"
	ModalityTypeEpochs ModalityType = "epochs"
)

type NotificationSpec struct {
	// Fire when error occur
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	OnError *bool `json:"onError,omitempty" protobuf:"varint,1,opt,name=onError"`
	// TTL for error msgs. In seconds
	// +kubebuilder:default:=3600
	// +kubebuilder:validation:Optional
	ErrorTTL *int32 `json:"errorTTL,omitempty" protobuf:"varint,2,opt,name=errorTTL"`
	// Fire when success occur.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	OnSuccess *bool `json:"onSuccess,omitempty" protobuf:"varint,3,opt,name=onSuccess"`
	// TTL for success msgs. In seconds
	// +kubebuilder:default:=3600
	// +kubebuilder:validation:Optional
	SuccessTTL *int32 `json:"successTTL,omitempty" protobuf:"varint,4,opt,name=successTTL"`
	// The name of the notifier.
	// +kubebuilder:default:= ""
	// +kubebuilder:validation:Optional
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,5,opt,name=notifierName"`
	// Select the target notifiers by a label.
	// +kubebuilder:validation:Optional
	Selector map[string]string `json:"selector,omitempty" protobuf:"bytes,6,opt,name=selector"`
}

// type to represent the logs for a given object. This type should be part of any objects that create logs (e.g. job logs)
type Logs struct {
	// +kubebuilder:validation:Optional
	BucketName string `json:"bucketName,omitempty" protobuf:"bytes,1,opt,name=bucketName"`
	// Paths is the log paths
	// +kubebuilder:validation:Optional
	Paths []string `json:"paths,omitempty" protobuf:"bytes,2,rep,name=paths"`
}

// +kubebuilder:validation:Enum="multipicative";"additive";"auto";"none"
// Predictor format represent the API implementation of the model
type SeasonalityMode string

const (
	Multipicative SeasonalityMode = "multipicative"
	Addadive      SeasonalityMode = "additive"
	Auto          SeasonalityMode = "auto"
	None          SeasonalityMode = "none"
)

// Represent a stack holder in the product.
// Each stake holder can hove one or more roles.
type StakeHolder struct {
	// The account name of the stake holder
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	AccountName *string `json:"accountName,omitempty" protobuf:"bytes,1,opt,name=accountName"`
	// The roles assigned to the stake holder
	Roles []RoleName `json:"roles,omitempty" protobuf:"bytes,2,rep,name=roles"`
}

// Use for color attribute
// Based on this: https://pkg.go.dev/golang.org/x/image/colornames

type Color string

const (
	AliceblueColor      Color = "aliceblue"
	AntiquewhiteColor   Color = "antiquewhite"
	AquaColor           Color = "aqua"
	AquamarineColor     Color = "aquamarine"
	AzureColor          Color = "azure"
	BeigeColor          Color = "beige"
	BisqueColor         Color = "bisque"
	BlackColor          Color = "black"
	BlanchedalmondColor Color = "blanchedalmond"
	BlueColor           Color = "blue"
	BluevioletColor     Color = "blueviolet"
	BrownColor          Color = "brown"
	BurlywoodColor      Color = "burlywood"
	CadetblueColor      Color = "cadetblue"
	ChartreuseColor     Color = "chartreuse"
	ChocolateColor      Color = "chocolate"
	CoralColor          Color = "coral"
	CornflowerblueColor Color = "cornflowerblue"
	CornsilkColor       Color = "cornsilk"
	NoneColor           Color = "none"
	/*
		Crimson              = color.RGBA{0xdc, 0x14, 0x3c, 0xff} // rgb(220, 20, 60)
		Cyan                 = color.RGBA{0x00, 0xff, 0xff, 0xff} // rgb(0, 255, 255)
		Darkblue             = color.RGBA{0x00, 0x00, 0x8b, 0xff} // rgb(0, 0, 139)
		Darkcyan             = color.RGBA{0x00, 0x8b, 0x8b, 0xff} // rgb(0, 139, 139)
		Darkgoldenrod        = color.RGBA{0xb8, 0x86, 0x0b, 0xff} // rgb(184, 134, 11)
		Darkgray             = color.RGBA{0xa9, 0xa9, 0xa9, 0xff} // rgb(169, 169, 169)
		Darkgreen            = color.RGBA{0x00, 0x64, 0x00, 0xff} // rgb(0, 100, 0)
		Darkgrey             = color.RGBA{0xa9, 0xa9, 0xa9, 0xff} // rgb(169, 169, 169)
		Darkkhaki            = color.RGBA{0xbd, 0xb7, 0x6b, 0xff} // rgb(189, 183, 107)
		Darkmagenta          = color.RGBA{0x8b, 0x00, 0x8b, 0xff} // rgb(139, 0, 139)
		Darkolivegreen       = color.RGBA{0x55, 0x6b, 0x2f, 0xff} // rgb(85, 107, 47)
		Darkorange           = color.RGBA{0xff, 0x8c, 0x00, 0xff} // rgb(255, 140, 0)
		Darkorchid           = color.RGBA{0x99, 0x32, 0xcc, 0xff} // rgb(153, 50, 204)
		Darkred              = color.RGBA{0x8b, 0x00, 0x00, 0xff} // rgb(139, 0, 0)
		Darksalmon           = color.RGBA{0xe9, 0x96, 0x7a, 0xff} // rgb(233, 150, 122)
		Darkseagreen         = color.RGBA{0x8f, 0xbc, 0x8f, 0xff} // rgb(143, 188, 143)
		Darkslateblue        = color.RGBA{0x48, 0x3d, 0x8b, 0xff} // rgb(72, 61, 139)
		Darkslategray        = color.RGBA{0x2f, 0x4f, 0x4f, 0xff} // rgb(47, 79, 79)
		Darkslategrey        = color.RGBA{0x2f, 0x4f, 0x4f, 0xff} // rgb(47, 79, 79)
		Darkturquoise        = color.RGBA{0x00, 0xce, 0xd1, 0xff} // rgb(0, 206, 209)
		Darkviolet           = color.RGBA{0x94, 0x00, 0xd3, 0xff} // rgb(148, 0, 211)
		Deeppink             = color.RGBA{0xff, 0x14, 0x93, 0xff} // rgb(255, 20, 147)
		Deepskyblue          = color.RGBA{0x00, 0xbf, 0xff, 0xff} // rgb(0, 191, 255)
		Dimgray              = color.RGBA{0x69, 0x69, 0x69, 0xff} // rgb(105, 105, 105)
		Dimgrey              = color.RGBA{0x69, 0x69, 0x69, 0xff} // rgb(105, 105, 105)
		Dodgerblue           = color.RGBA{0x1e, 0x90, 0xff, 0xff} // rgb(30, 144, 255)
		Firebrick            = color.RGBA{0xb2, 0x22, 0x22, 0xff} // rgb(178, 34, 34)
		Floralwhite          = color.RGBA{0xff, 0xfa, 0xf0, 0xff} // rgb(255, 250, 240)
		Forestgreen          = color.RGBA{0x22, 0x8b, 0x22, 0xff} // rgb(34, 139, 34)
		Fuchsia              = color.RGBA{0xff, 0x00, 0xff, 0xff} // rgb(255, 0, 255)
		Gainsboro            = color.RGBA{0xdc, 0xdc, 0xdc, 0xff} // rgb(220, 220, 220)
		Ghostwhite           = color.RGBA{0xf8, 0xf8, 0xff, 0xff} // rgb(248, 248, 255)
		Gold                 = color.RGBA{0xff, 0xd7, 0x00, 0xff} // rgb(255, 215, 0)
		Goldenrod            = color.RGBA{0xda, 0xa5, 0x20, 0xff} // rgb(218, 165, 32)
		Gray                 = color.RGBA{0x80, 0x80, 0x80, 0xff} // rgb(128, 128, 128)
		Green                = color.RGBA{0x00, 0x80, 0x00, 0xff} // rgb(0, 128, 0)
		Greenyellow          = color.RGBA{0xad, 0xff, 0x2f, 0xff} // rgb(173, 255, 47)
		Grey                 = color.RGBA{0x80, 0x80, 0x80, 0xff} // rgb(128, 128, 128)
		Honeydew             = color.RGBA{0xf0, 0xff, 0xf0, 0xff} // rgb(240, 255, 240)
		Hotpink              = color.RGBA{0xff, 0x69, 0xb4, 0xff} // rgb(255, 105, 180)
		Indianred            = color.RGBA{0xcd, 0x5c, 0x5c, 0xff} // rgb(205, 92, 92)
		Indigo               = color.RGBA{0x4b, 0x00, 0x82, 0xff} // rgb(75, 0, 130)
		Ivory                = color.RGBA{0xff, 0xff, 0xf0, 0xff} // rgb(255, 255, 240)
		Khaki                = color.RGBA{0xf0, 0xe6, 0x8c, 0xff} // rgb(240, 230, 140)
		Lavender             = color.RGBA{0xe6, 0xe6, 0xfa, 0xff} // rgb(230, 230, 250)
		Lavenderblush        = color.RGBA{0xff, 0xf0, 0xf5, 0xff} // rgb(255, 240, 245)
		Lawngreen            = color.RGBA{0x7c, 0xfc, 0x00, 0xff} // rgb(124, 252, 0)
		Lemonchiffon         = color.RGBA{0xff, 0xfa, 0xcd, 0xff} // rgb(255, 250, 205)
		Lightblue            = color.RGBA{0xad, 0xd8, 0xe6, 0xff} // rgb(173, 216, 230)
		Lightcoral           = color.RGBA{0xf0, 0x80, 0x80, 0xff} // rgb(240, 128, 128)
		Lightcyan            = color.RGBA{0xe0, 0xff, 0xff, 0xff} // rgb(224, 255, 255)
		Lightgoldenrodyellow = color.RGBA{0xfa, 0xfa, 0xd2, 0xff} // rgb(250, 250, 210)
		Lightgray            = color.RGBA{0xd3, 0xd3, 0xd3, 0xff} // rgb(211, 211, 211)
		Lightgreen           = color.RGBA{0x90, 0xee, 0x90, 0xff} // rgb(144, 238, 144)
		Lightgrey            = color.RGBA{0xd3, 0xd3, 0xd3, 0xff} // rgb(211, 211, 211)
		Lightpink            = color.RGBA{0xff, 0xb6, 0xc1, 0xff} // rgb(255, 182, 193)
		Lightsalmon          = color.RGBA{0xff, 0xa0, 0x7a, 0xff} // rgb(255, 160, 122)
		Lightseagreen        = color.RGBA{0x20, 0xb2, 0xaa, 0xff} // rgb(32, 178, 170)
		Lightskyblue         = color.RGBA{0x87, 0xce, 0xfa, 0xff} // rgb(135, 206, 250)
		Lightslategray       = color.RGBA{0x77, 0x88, 0x99, 0xff} // rgb(119, 136, 153)
		Lightslategrey       = color.RGBA{0x77, 0x88, 0x99, 0xff} // rgb(119, 136, 153)
		Lightsteelblue       = color.RGBA{0xb0, 0xc4, 0xde, 0xff} // rgb(176, 196, 222)
		Lightyellow          = color.RGBA{0xff, 0xff, 0xe0, 0xff} // rgb(255, 255, 224)
		Lime                 = color.RGBA{0x00, 0xff, 0x00, 0xff} // rgb(0, 255, 0)
		Limegreen            = color.RGBA{0x32, 0xcd, 0x32, 0xff} // rgb(50, 205, 50)
		Linen                = color.RGBA{0xfa, 0xf0, 0xe6, 0xff} // rgb(250, 240, 230)
		Magenta              = color.RGBA{0xff, 0x00, 0xff, 0xff} // rgb(255, 0, 255)
		Maroon               = color.RGBA{0x80, 0x00, 0x00, 0xff} // rgb(128, 0, 0)
		Mediumaquamarine     = color.RGBA{0x66, 0xcd, 0xaa, 0xff} // rgb(102, 205, 170)
		Mediumblue           = color.RGBA{0x00, 0x00, 0xcd, 0xff} // rgb(0, 0, 205)
		Mediumorchid         = color.RGBA{0xba, 0x55, 0xd3, 0xff} // rgb(186, 85, 211)
		Mediumpurple         = color.RGBA{0x93, 0x70, 0xdb, 0xff} // rgb(147, 112, 219)
		Mediumseagreen       = color.RGBA{0x3c, 0xb3, 0x71, 0xff} // rgb(60, 179, 113)
		Mediumslateblue      = color.RGBA{0x7b, 0x68, 0xee, 0xff} // rgb(123, 104, 238)
		Mediumspringgreen    = color.RGBA{0x00, 0xfa, 0x9a, 0xff} // rgb(0, 250, 154)
		Mediumturquoise      = color.RGBA{0x48, 0xd1, 0xcc, 0xff} // rgb(72, 209, 204)
		Mediumvioletred      = color.RGBA{0xc7, 0x15, 0x85, 0xff} // rgb(199, 21, 133)
		Midnightblue         = color.RGBA{0x19, 0x19, 0x70, 0xff} // rgb(25, 25, 112)
		Mintcream            = color.RGBA{0xf5, 0xff, 0xfa, 0xff} // rgb(245, 255, 250)
		Mistyrose            = color.RGBA{0xff, 0xe4, 0xe1, 0xff} // rgb(255, 228, 225)
		Moccasin             = color.RGBA{0xff, 0xe4, 0xb5, 0xff} // rgb(255, 228, 181)
		Navajowhite          = color.RGBA{0xff, 0xde, 0xad, 0xff} // rgb(255, 222, 173)
		Navy                 = color.RGBA{0x00, 0x00, 0x80, 0xff} // rgb(0, 0, 128)
		Oldlace              = color.RGBA{0xfd, 0xf5, 0xe6, 0xff} // rgb(253, 245, 230)
		Olive                = color.RGBA{0x80, 0x80, 0x00, 0xff} // rgb(128, 128, 0)
		Olivedrab            = color.RGBA{0x6b, 0x8e, 0x23, 0xff} // rgb(107, 142, 35)
		Orange               = color.RGBA{0xff, 0xa5, 0x00, 0xff} // rgb(255, 165, 0)
		Orangered            = color.RGBA{0xff, 0x45, 0x00, 0xff} // rgb(255, 69, 0)
		Orchid               = color.RGBA{0xda, 0x70, 0xd6, 0xff} // rgb(218, 112, 214)
		Palegoldenrod        = color.RGBA{0xee, 0xe8, 0xaa, 0xff} // rgb(238, 232, 170)
		Palegreen            = color.RGBA{0x98, 0xfb, 0x98, 0xff} // rgb(152, 251, 152)
		Paleturquoise        = color.RGBA{0xaf, 0xee, 0xee, 0xff} // rgb(175, 238, 238)
		Palevioletred        = color.RGBA{0xdb, 0x70, 0x93, 0xff} // rgb(219, 112, 147)
		Papayawhip           = color.RGBA{0xff, 0xef, 0xd5, 0xff} // rgb(255, 239, 213)
		Peachpuff            = color.RGBA{0xff, 0xda, 0xb9, 0xff} // rgb(255, 218, 185)
		Peru                 = color.RGBA{0xcd, 0x85, 0x3f, 0xff} // rgb(205, 133, 63)
		Pink                 = color.RGBA{0xff, 0xc0, 0xcb, 0xff} // rgb(255, 192, 203)
		Plum                 = color.RGBA{0xdd, 0xa0, 0xdd, 0xff} // rgb(221, 160, 221)
		Powderblue           = color.RGBA{0xb0, 0xe0, 0xe6, 0xff} // rgb(176, 224, 230)
		Purple               = color.RGBA{0x80, 0x00, 0x80, 0xff} // rgb(128, 0, 128)
		Red                  = color.RGBA{0xff, 0x00, 0x00, 0xff} // rgb(255, 0, 0)
		Rosybrown            = color.RGBA{0xbc, 0x8f, 0x8f, 0xff} // rgb(188, 143, 143)
		Royalblue            = color.RGBA{0x41, 0x69, 0xe1, 0xff} // rgb(65, 105, 225)
		Saddlebrown          = color.RGBA{0x8b, 0x45, 0x13, 0xff} // rgb(139, 69, 19)
		Salmon               = color.RGBA{0xfa, 0x80, 0x72, 0xff} // rgb(250, 128, 114)
		Sandybrown           = color.RGBA{0xf4, 0xa4, 0x60, 0xff} // rgb(244, 164, 96)
		Seagreen             = color.RGBA{0x2e, 0x8b, 0x57, 0xff} // rgb(46, 139, 87)
		Seashell             = color.RGBA{0xff, 0xf5, 0xee, 0xff} // rgb(255, 245, 238)
		Sienna               = color.RGBA{0xa0, 0x52, 0x2d, 0xff} // rgb(160, 82, 45)
		Silver               = color.RGBA{0xc0, 0xc0, 0xc0, 0xff} // rgb(192, 192, 192)
		Skyblue              = color.RGBA{0x87, 0xce, 0xeb, 0xff} // rgb(135, 206, 235)
		Slateblue            = color.RGBA{0x6a, 0x5a, 0xcd, 0xff} // rgb(106, 90, 205)
		Slategray            = color.RGBA{0x70, 0x80, 0x90, 0xff} // rgb(112, 128, 144)
		Slategrey            = color.RGBA{0x70, 0x80, 0x90, 0xff} // rgb(112, 128, 144)
		Snow                 = color.RGBA{0xff, 0xfa, 0xfa, 0xff} // rgb(255, 250, 250)
		Springgreen          = color.RGBA{0x00, 0xff, 0x7f, 0xff} // rgb(0, 255, 127)
		Steelblue            = color.RGBA{0x46, 0x82, 0xb4, 0xff} // rgb(70, 130, 180)
		Tan                  = color.RGBA{0xd2, 0xb4, 0x8c, 0xff} // rgb(210, 180, 140)
		Teal                 = color.RGBA{0x00, 0x80, 0x80, 0xff} // rgb(0, 128, 128)
		Thistle              = color.RGBA{0xd8, 0xbf, 0xd8, 0xff} // rgb(216, 191, 216)
		Tomato               = color.RGBA{0xff, 0x63, 0x47, 0xff} // rgb(255, 99, 71)
		Turquoise            = color.RGBA{0x40, 0xe0, 0xd0, 0xff} // rgb(64, 224, 208)
		Violet               = color.RGBA{0xee, 0x82, 0xee, 0xff} // rgb(238, 130, 238)
		Wheat                = color.RGBA{0xf5, 0xde, 0xb3, 0xff} // rgb(245, 222, 179)
		White                = color.RGBA{0xff, 0xff, 0xff, 0xff} // rgb(255, 255, 255)
		Whitesmoke           = color.RGBA{0xf5, 0xf5, 0xf5, 0xff} // rgb(245, 245, 245)
		Yellow               = color.RGBA{0xff, 0xff, 0x00, 0xff} // rgb(255, 255, 0)
		Yellowgreen          = color.RGBA{0x9a, 0xcd, 0x32, 0xff} // rgb(154, 205, 50)
	*/
)

type CurvePoint struct {
	X float64 `json:"x,omitempty" protobuf:"bytes,1,opt,name=x"`
	Y float64 `json:"y,omitempty" protobuf:"bytes,2,opt,name=y"`
}
type RocAucCurve struct {
	Values []CurvePoint `json:"values,omitempty" protobuf:"bytes,1,opt,name=values"`
}

type PRCurve struct {
	Values []CurvePoint `json:"values,omitempty" protobuf:"bytes,1,opt,name=values"`
}

type ConfusionMatrixRow struct {
	T     string  `json:"t,omitempty" protobuf:"bytes,1,opt,name=t"` // True Label
	P     string  `json:"p,omitempty" protobuf:"bytes,2,opt,name=p"` // Predicated Label
	Count int32   `json:"count,omitempty" protobuf:"varint,3,opt,name=count"`
	Pct   float64 `json:"pct,omitempty" protobuf:"bytes,4,opt,name=pct"`
}

type ConfusionMatrix struct {
	Rows []ConfusionMatrixRow `json:"rows,omitempty" protobuf:"bytes,1,opt,name=rows"`
}

// Specification for resource
type ResourceSpec struct {
	// Workload class name. Predefined resources
	// +kubebuilder:validation:Optional
	WorkloadClassName string `json:"workloadClassName,omitempty" protobuf:"bytes,1,opt,name=workloadClassName"`
	// If true, use custom req
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Custom *bool `json:"enable,omitempty" protobuf:"bytes,2,opt,name=enable"`
	// Custom resource requirments
	// +kubebuilder:validation:Optional
	Requirements *v1.ResourceRequirements `json:"requirements,omitempty" protobuf:"bytes,3,opt,name=requirements"`
}

// +kubebuilder:validation:Enum="random";"split-column";"time";"random-stratified";
type DataSplitMethod string

const (
	DataSplitMethodRandomStratified DataSplitMethod = "random-stratified"
	DataSplitMethodRandom           DataSplitMethod = "random"
	DataSplitMethodSplitColumn      DataSplitMethod = "split-column"
	DataSplitMethodTime             DataSplitMethod = "time"
	DataSplitAuto                   DataSplitMethod = "auto"
)

// Define the histogram data

type HistogramData struct {
	// The bins if this histogram describe conitunous variables
	Bins []float64 `json:"bins,omitempty" protobuf:"bytes,1,rep,name=bins"`
	// The set of values per beans
	Values []float64 `json:"values,omitempty" protobuf:"bytes,2,rep,name=values"`
	// The name of the categories, one per bin is this a categorical histogram
	// Empty is this is not a categorical variable.
	Categories []string `json:"categories,omitempty" protobuf:"bytes,3,rep,name=categories"`
}
