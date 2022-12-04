package v1alpha1

import (
	"github.com/aptible/supercronic/cronexpr"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"time"
)

// ===========================================================
// Common ports
// ===========================================================

const (
	ControlPort         int = 8080
	StoragePort         int = 8090
	DataPort            int = 8070
	PublisherPort       int = 8050
	TrainerPort         int = 8060
	PredictorPort       int = 8040
	BatchPredictionPort int = 8030
)

// ===========================================================
// Job execution Rbac const
// ===========================================================

const (
	LabJobRunnerRole        string = "lab-job-runner"
	LabJobRunnerSa          string = "lab-job-sa"
	LabJobRunnerRoleBinding string = "lab-job-runner-binding"

	ServingSiteJobRunnerRole        string = "servingsite-job-runner"
	ServingSiteJobRunnerSa          string = "servingsite-job-sa"
	ServingSiteJobRunnerRoleBinding string = "servingsite-job-runner-binding"

	ServingSitePredictorRole        string = "servingsite-predictor"
	ServingSitePredictorSa          string = "servingsite-predictor-sa"
	ServingSitePredictorRoleBinding string = "servingsite-predictor-binding"
)

// Compiler spec is used when there is a specification for model compilation
type CompilerSpec struct {
	// Enable set the enable to
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enable *bool `json:"enable,omitempty" protobuf:"varint,1,opt,name=enable"`
	// Set one or more targets
	// Enable set the enable to
	// +kubebuilder:default:="none"
	// +kubebuilder:validation:Optional
	Compiler *CompilerName `json:"compiler,omitempty" protobuf:"bytes,2,opt,name=compiler"`
	// Set one or more targets for the compiler
	Targets []HardwareTarget `json:"targets,omitempty" protobuf:"bytes,3,rep,name=targets"`
}

//============================================================
// Task name
//============================================================

type TaskName string

const (
	BatchPredictTaskName         TaskName = "batch-predict"
	BatchPredictMCTaskName       TaskName = "batch-predict-multi-class"
	ForecastTaskName             TaskName = "forecast"
	ProfileDatasetTaskName       TaskName = "profile-dataset"
	SnapshotDatasetTask          TaskName = "snapshot-dataset"
	ProfileStudyTask             TaskName = "profile-study"
	ProfileModelTask             TaskName = "profile-model"
	PublishModelTask             TaskName = "publish-model"
	BakeModelTask                TaskName = "bake-model"
	RunRecipeTask                TaskName = "run-recipe"
	ReportDatasetTask            TaskName = "report-dataset"
	ReportModelTask              TaskName = "report-model"
	ReportStudyTask              TaskName = "report-study"
	ReportPeriodTask             TaskName = "report-period"
	ReportSummaryTask            TaskName = "report-summary"
	SplitDatasetTask             TaskName = "split-dataset"
	TestEnsembleTask             TaskName = "test-ensemble"
	TestModelTask                TaskName = "test-model"
	TrainEnsembleTask            TaskName = "train-ensemble"
	TrainModelTask               TaskName = "train-model"
	MergeForecastTask            TaskName = "merge-forecast"
	PartitionForecastTask        TaskName = "partition-forecast"
	SplitDatasetToRungs          TaskName = "split-dataset-to-rungs"
	TransformDataset             TaskName = "transform-dataset"
	CompileTask                  TaskName = "compile-model"
	PackageModelTask             TaskName = "package-model"
	ExplainModelTask             TaskName = "explain-model"
	FeatureGenTask               TaskName = "feature-gen"
	FeatureSelectTask            TaskName = "feature-select"
	RunSqlQueryTask              TaskName = "run-sql-query"
	RunWebRequestTask            TaskName = "run-web-request"
	GenerateDataset              TaskName = "generate-dataset"
	UnitTestDataset              TaskName = "unittest-dataset"
	UnitTestModel                TaskName = "unittest-model"
	UnitTestFeedback             TaskName = "unittest-feedback"
	UnitTestFeatureHistogram     TaskName = "unittest-feature-histogram"
	UnitTestPredictor            TaskName = "unittest-predictor"
	TrainDriftDetector           TaskName = "train-drift-detector"
	PartitionDatasetTask         TaskName = "partition-dataset"
	ProfilePartitionDatasetTask  TaskName = "profile-partition-dataset"
	ProfilePartitionModelTask    TaskName = "profile-partition-model"
	ReportPartitionDatasetTask   TaskName = "report-partition-dataset"
	ReportPartitionModelTask     TaskName = "report-partition-model"
	TrainPartitionModelTask      TaskName = "train-partition-model"
	UnitTestPartitionDatasetTask TaskName = "unittest-partition-dataset"
	SplitPartitionTask           TaskName = "split-partition"
	GenerateOnlineTableTask      TaskName = "gen-online-table"  //
	SyncOnlineTableTask          TaskName = "sync-online-table" // sync the online dataset into the store.
	IngestFeatureGroupTask       TaskName = "ingest-feature-group"
	GenTrainingDatasetTask       TaskName = "gen-training-dataset"
)

// ApiKeyName is the secret or in env variable
// +kubebuilder:validation:Enum="provider";"keyfile";"accessKey";"secretKey";"host";"token";"username";"password";"port";"ssh";"openstack-authurl"
type ApiKeyName string

const (
	ProviderApiKeyName         ApiKeyName = "provider"
	KeyFileApiKeyName          ApiKeyName = "keyfile"
	AccessKeyApiKeyName        ApiKeyName = "accessKey"
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
// +kubebuilder:validation:Enum="binary-classification";"multi-classification";"forecasting";"regression";"clustering";"recommendation";"outlier-detection";"novelty-detection";"auto";"unknown";"partition-forecasting";"monitoring";
type MLTask string

const (
	BinaryClassification MLTask = "binary-classification"
	MultiClassification  MLTask = "multi-classification"
	NLP                  MLTask = "nlp"
	Vision               MLTask = "vision"
	Video                MLTask = "video"
	Audio                MLTask = "audio"
	Forecasting          MLTask = "forecasting"
	PartitionForecast    MLTask = "partition-forecasting"
	Regression           MLTask = "regression"
	Clustering           MLTask = "clustering"
	Recommendation       MLTask = "recommendation"
	OutlierDetection     MLTask = "outlier-detection"
	NoveltyDetection     MLTask = "novelty-detection"
	TopicModeling        MLTask = "topic-modeling"
	AutoDetectTask       MLTask = "auto"
	MonitorTask          MLTask = "monitoring" // when the dataset is used only for monitoring

	// Text Tasks

	UnknownTask MLTask = "unknown"
)

// Define NLP sub tasks
// +kubebuilder:validation:Enum="text-ner";"text-classification";"text-multi-classification";"text-regression";"text-multi-label-classification";"text-conversation";"text-lang-generation";"text-lang-model";"text-multi-modal";"text-ner";"text-qa";"text-summarization";"text-sentence-pair";"text-representation-generation";"text-sentiment-analysis";"text-code-generation";"text-translation";"text-lang-detection";"text-grammar-correction";"text-paraphrasing";"text-intent-classification";"text-semantic-similarity";"text-keyword-extraction";"text-pos";"text-tokenization";"text-lemma";"image-classification";"image-multi-label-classification";"image-object-detection";"image-segmentation";"none"
type MLSubtask string

const (
	TextNer                        MLSubtask = "text-ner"
	TextClassification             MLSubtask = "text-classification"
	TextMultiClassification        MLSubtask = "text-multi-classification"
	TextRegression                 MLSubtask = "text-regression"
	TextMultiLabelClassification   MLSubtask = "text-multi-label-classification"
	TextConversation               MLSubtask = "text-conversation"
	TextLangGeneration             MLSubtask = "text-lang-generation"
	TextLangModel                  MLSubtask = "text-lang-model"
	TextMultiModalClassification   MLSubtask = "text-multi-modal"
	TextNER                        MLSubtask = "text-ner"
	TextQA                         MLSubtask = "text-qa"
	TextSummarization              MLSubtask = "text-summarization"
	TextSentencePairClassification MLSubtask = "text-sentence-pair"
	TextRepresentationGeneration   MLSubtask = "text-representation-generation"
	TextSentimentAnalysis          MLSubtask = "text-sentiment-analysis"
	TextCodeGeneration             MLSubtask = "text-code-generation"
	TextTranslation                MLSubtask = "text-translation"
	TextLangDetection              MLSubtask = "text-lang-detection"
	TextGrammarCorrection          MLSubtask = "text-grammar-correction"
	TextParaphrasing               MLSubtask = "text-paraphrasing"
	TextIntentClassification       MLSubtask = "text-intent-classification"
	TextSemanticSimilarity         MLSubtask = "text-semantic-similarity"
	TextKeywordExtraction          MLSubtask = "text-keyword-extraction"
	TextPOS                        MLSubtask = "text-pos"
	TextTokenization               MLSubtask = "text-tokenization"
	TextLemmalization              MLSubtask = "text-lemma"

	// Vision
	ImageClassification           MLSubtask = "image-classification"
	ImageMultiLabelClassification MLSubtask = "image-multi-label-classification"
	ImageObjectDetection          MLSubtask = "image-object-detection"
	ImageSegmentation             MLSubtask = "image-segmentation"

	// Video
	VideoActionRecognition MLSubtask = "video-action-recognition"
	VideoClassification    MLSubtask = "video-classification"
	VideoObjectTracking    MLSubtask = "video-object-tracking"

	NoneSubtask MLSubtask = "none"
)

// ProviderName is the machine learning task name
type ProviderName string

const (
	// Databases
	AmazonAthenaProviderName   ProviderName = "athena"
	AmazonRedshiftProviderName ProviderName = "redshift"
	ApacheDrillProviderName    ProviderName = "drill"
	ApacheDruid                ProviderName = "druid"
	ApacheHive                 ProviderName = "hive"
	ApacheImpala               ProviderName = "impala"
	ApacheKylin                ProviderName = "kylin"
	ApachePinot                ProviderName = "pinot"
	ApacheSpark                ProviderName = "spark"
	AzureSqlDatabase           ProviderName = "azuresqldatabase"
	GcpBigQuery                ProviderName = "bigquery"
	ApacheCassandra            ProviderName = "cassandra"
	CockrouchDB                ProviderName = "cockrouchdb"
	Clickhouse                 ProviderName = "clickhouse"
	Couchbase                  ProviderName = "couchbase"
	Dermio                     ProviderName = "dermio"
	DB2                        ProviderName = "db2"
	ElasticSearch              ProviderName = "elasticsearch"
	Exasol                     ProviderName = "exasol"
	Kafka                      ProviderName = "kafka"
	GoogleSheets               ProviderName = "googlesheets"
	GcpSpanner                 ProviderName = "spanner"
	Greenplum                  ProviderName = "greenplum"
	MySql                      ProviderName = "mysql"
	MongoDb                    ProviderName = "mongodb"
	Oracle                     ProviderName = "oracle"
	PostgresSQL                ProviderName = "postgres"
	Presto                     ProviderName = "presto"
	SAPHana                    ProviderName = "hana"
	Snowflake                  ProviderName = "snowflake"
	Singlestore                ProviderName = "singlestore"
	Sybase                     ProviderName = "sybase"
	MSSqlServer                ProviderName = "mssqlserver"
	Sqlite                     ProviderName = "sqlite"
	RabbitMQ                   ProviderName = "rabbitmq"
	Teradata                   ProviderName = "teradata"
	Vertica                    ProviderName = "vertica"
	Odbc                       ProviderName = "odbc"
	Informix                   ProviderName = "informix"

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

	// time series db
	InfluxDB        ProviderName = "influxdb"
	TimescaleDB     ProviderName = "timescaledb"
	VictoriaMetrics ProviderName = "victoria-metrics"
	Saleforce       ProviderName = "saleforce"
	SapCRM          ProviderName = "sapcrm"
	AirTable        ProviderName = "airtable"
	AppWrite        ProviderName = "appwrite"

	UnknownProvider ProviderName = "unknown"
)

func IsBinaryClassification(task MLTask) bool {
	return task == BinaryClassification
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
	LiteLicenseType       LicenseType = "lite"
	ProLicenseType        LicenseType = "pro"
	EnterpriseLicenseType LicenseType = "enterprise"
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
		metric == AveragePrecision ||
		metric == LogLoss

}

func (metric Metric) IsClustering() bool {
	return false
}

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
	MAPE         Metric = "mape"
	MAZE         Metric = "maze"
	MDAPE        Metric = "mdape" // median absolute percentage error
	SMAPE        Metric = "smape"
	WAPE         Metric = "wape"
	RMSPE        Metric = "rmspe"
	QuantileLoss Metric = "quantile-loss"

	MedianAbsolutePercentError = "mean-absolute-percentage-error"
	MeanPinballLoss            = "mean-pinball-loss"
	MeanTweediaDeviance        = "mean-tweedie-deviance"
	MeanPoissionDeviance       = "mean-possion-deviance"
	D2TweedieScore             = "d2-tweedie-score"
	D2PinballScore             = "d2-pinball-score"
	D2AbsoluteErrorScore       = "d2-absolute-error-score"

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

	// Location drift metrics
	TwoSampleKSTest      Metric = "two-sample-ks-test"
	ChiSqrTest           Metric = "chi-squared-test"
	ProportionDifference Metric = "proportion-difference"
	WassersteinDistance  Metric = "wasserstein-distance"
	PSI                  Metric = "psi"
	KLDivergence         Metric = "kl-divergence"
	JSDivergence         Metric = "js-divergence"

	// Bias metrics
	EqualOpportunity                  Metric = "equal-opportunity"
	DemographicParity                 Metric = "demographic-parity"
	EqualOddsTnr                      Metric = "equals-odds-tnr"
	IndividualFairness                Metric = "individual-fairness"
	IndividualFairnessCounterfactuals Metric = "individual-fairness-counter-factuals"

	// Corrolation Metrics
	Pearson       Metric = "pearson"
	CramersV      Metric = "cramers-v"
	RankBiserial  Metric = "rank-biserial"
	PointBiserial Metric = "point-biserial"

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
	RemoveRowsWithMissingValuesImputation Imputation = "remove-rows-with-missing-values"
	ReplaceWithMeanImputation             Imputation = "replace-with-mean"
	ReplaceWithMedianImputation           Imputation = "replace-with-median"
	ReplaceWithArbitraryValueImputation   Imputation = "replace-with-arbitrary-value"
	FreqCategoryImputation                Imputation = "freq-category-imputation"
	AddMissingValueIndicatorImputation    Imputation = "add-missing-value-indicator"
	KnnImputation                         Imputation = "knn"
	IterativeImputation                   Imputation = "iterative"
	MICEImputation                        Imputation = "mice"
	AutoImputation                        Imputation = "auto"
	NoneImputation                        Imputation = "none"
)

func ParseImputation(name string) Imputation {
	names := []Imputation{
		RemoveRowsWithMissingValuesImputation,
		ReplaceWithMeanImputation,
		ReplaceWithMedianImputation,
		ReplaceWithArbitraryValueImputation,
		FreqCategoryImputation,
		AddMissingValueIndicatorImputation,
		KnnImputation,
		MICEImputation,
		IterativeImputation,
		NoneImputation,
		AutoImputation,
	}

	for _, v := range names {
		if string(v) == name {
			return v
		}
	}
	return AutoImputation
}

//==============================================================================
// Scaling
//==============================================================================
// +kubebuilder:validation:Enum="standard-scaling";"max-abs-scaling";"min-max-scaling";"normalization-scaling";"robust-scaling";"scale-to-unit-norm";"none";"auto";
type Scaling string

const (
	StandardScaling        Scaling = "standard-scaling"
	MaxAbsScaling          Scaling = "max-abs-scaling"
	MinMaxScaling          Scaling = "min-max-scaling"
	Normalization          Scaling = "normalization-scaling"
	RobustScaling          Scaling = "robust-scaling"
	ScaleToUnitNormScaling Scaling = "scale-to-unit-norm"
	NoneScaling            Scaling = "none"
	AutoScaling            Scaling = "auto"
)

func ParseScaler(name string) Scaling {
	names := []Scaling{
		StandardScaling,
		MaxAbsScaling,
		MinMaxScaling,
		Normalization,
		RobustScaling,
		ScaleToUnitNormScaling,
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
	LogVariableTransformation VariableTransformation = "log-transformation"
	ReciprocalTransformation  VariableTransformation = "reciprocal-transformation"
	SqrtTransformation        VariableTransformation = "sqrt-transformation"
	PowerTransformation       VariableTransformation = "power-transformation"
	BoxCoxTransformation      VariableTransformation = "box-cox-transformation"
	YeoJohnsonTransformation  VariableTransformation = "yj-transformation"
	NoneTransform             VariableTransformation = "none"
	AutoTransform             VariableTransformation = "auto"
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
	NoneOutlierHandling       OutlierHandling = "none"
	AutoOutlierHandling       OutlierHandling = "auto"
)

//==============================================================================
// Datatime Transformation
//==============================================================================
// +kubebuilder:validation:Enum="extract-datetime-information";"none";"auto"
type DatetimeTransformation string

const (
	ExtractDatetimeTransformation DatetimeTransformation = "extract-datetime-information"
	NoneDatetimeTransformation    DatetimeTransformation = "none"
	AutoDatetimeTransformation    DatetimeTransformation = "auto"
)

//==============================================================================
// Imbalance Handling
//==============================================================================
// +kubebuilder:validation:Enum="adasyn";"baseline-smote";"kmean-smote";"random-over-sampler";"smote";"smotenc";"svmsmote";"none";"auto";class-weights;
type ImbalanceHandling string

const (
	ADASYNImbalanceHandling            ImbalanceHandling = "adasyn"
	BorderlineSMOTEImbalanceHandling   ImbalanceHandling = "baseline-smote"
	KMeansSMOTEImbalanceHandling       ImbalanceHandling = "kmean-smote"
	RandomOverSamplerImbalanceHandling ImbalanceHandling = "random-over-sampler"
	SMOTEImbalanceHandling             ImbalanceHandling = "smote"
	SMOTENCImbalanceHandling           ImbalanceHandling = "smotenc"
	SVMSMOTEImbalanceHandling          ImbalanceHandling = "svmsmote"
	ClassWeightsImbalanceHandling      ImbalanceHandling = "class-weights"
	NoneImbalanceHandling              ImbalanceHandling = "none"
	AutoImbalanceHandling              ImbalanceHandling = "auto"
)

//==============================================================================
// Feature Engineering
//==============================================================================
// +kubebuilder:validation:Enum="pca";"polynomial-features";"rbf-sampler";"fast-ica";"nystroem";"none";"auto"
type DimensionReduction string

const (
	PCADimensionReduction                DimensionReduction = "pca"
	PolynomialFeaturesDimensionReduction DimensionReduction = "polynomial-features"
	RBFSamplerDimensionReduction         DimensionReduction = "rbf-sampler"
	FastIcaDimensionReduction            DimensionReduction = "fast-ica"
	NystroemDimensionReduction           DimensionReduction = "nystroem"
	NoneDimensionReduction               DimensionReduction = "none"
	AutoDimensionReduction               DimensionReduction = "auto"
)

// +kubebuilder:validation:Enum="tfidf";"count-vec";"hasing-vec";"none";"auto"
type TextEncoding string

const (
	TfIdfTextEncding              TextEncoding = "tfidf"
	CountVectorizerTextEncoding   TextEncoding = "count-vec"
	HashingVectorizerTextEncoding TextEncoding = "hashing-vec"
	NoneTextEncoding              TextEncoding = "none"
	AutoTextEncoding              TextEncoding = "auto"
)

// +kubebuilder:validation:Enum="drop-features";"drop-constant-features";"drop-duplicated-features";"drop-correlated-features";"mutual-information";"chisquare";"anova";"step-forward";"step-backward";"lasso-regression";"tree-importance";"recursive-feature-elimination";"recursive-feature-addition";"select-percentile";"select-kbest";"select-fpr";"select-fdr";"variance-threshold";"none";"auto"
type FeatureSelection string

const (
	DropFeaturesFeatureSelection      FeatureSelection = "drop-features"
	DropConstantFeatures              FeatureSelection = "drop-constant-features"
	DropDuplicateFeatures             FeatureSelection = "drop-duplicated-features"
	DropCorrelatedFeatures            FeatureSelection = "drop-correlated-features"
	MutualInformationFeatureSelection FeatureSelection = "mutual-information"
	ChiSquareFeatureSelection         FeatureSelection = "chisquare"
	AnovaFeatureSelection             FeatureSelection = "anova"
	StepForwardFeatureSelection       FeatureSelection = "step-forward"
	StepBackwardFeatureSelection      FeatureSelection = "step-backward"
	LassoRegressionFeatureSelection   FeatureSelection = "lasso-regression"
	TreeImportanceFeatureSelection    FeatureSelection = "tree-importance"
	RecursiveFeatureElimination       FeatureSelection = "recursive-feature-elimination"
	RecursiveFeatureAddition          FeatureSelection = "recursive-feature-addition"
	SelectPercentile                  FeatureSelection = "select-percentile"
	SelectKBest                       FeatureSelection = "select-kbest"
	SelectFpr                         FeatureSelection = "select-fpr"
	SelectFdr                         FeatureSelection = "select-fdr"
	VarianceThreshold                 FeatureSelection = "variance-threshold"
	NoneFeatureSelection              FeatureSelection = "none"
	AutoFeatureSelection              FeatureSelection = "auto"
)

//==============================================================================
// Estimators
//==============================================================================

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
	LinearRegressor               ClassicEstimatorName = "linear-regressor"

	// Robust regressor
	HuberRegressor    ClassicEstimatorName = "huber-regression"
	RUNSACRegressor   ClassicEstimatorName = "runsac-regression"
	TheilSenRegressor ClassicEstimatorName = "theilsend-regressor"

	// GLM regressor

	PoissonRegressor ClassicEstimatorName = "poisson-regression"
	TweedieRegressor ClassicEstimatorName = "tweedie-regression"
	GammaRegressor   ClassicEstimatorName = "gamma-regression"

	// OutlierFilter
	EllipticEnvelope   ClassicEstimatorName = "elliptic-envelope"
	OneClassSVM        ClassicEstimatorName = "one-class-svm"
	IsolationForest    ClassicEstimatorName = "isolation-forest"
	LocalOutlierFactor ClassicEstimatorName = "local-outlier-factor"

	// Forcast

	NaiveForecaster      ClassicEstimatorName = "naive-forecaster"
	ExponentialSmoothing ClassicEstimatorName = "exponential-smoothing"
	AutoETS              ClassicEstimatorName = "auto-ets"
	ThetaForecaster      ClassicEstimatorName = "theta-forecaster"
	AutoARIMA            ClassicEstimatorName = "auto-arima"
	ARIMA                ClassicEstimatorName = "arima"
	SARIMAX              ClassicEstimatorName = "sarimax"
	VAR                  ClassicEstimatorName = "var"
	VARMAX               ClassicEstimatorName = "varmax"
	BATS                 ClassicEstimatorName = "bats"
	TBATS                ClassicEstimatorName = "tbats"
	Prophet              ClassicEstimatorName = "prophet"
	GreyKite             ClassicEstimatorName = "greykite"

	// Recommendation
	ALS                         ClassicEstimatorName = "als"
	BayesianPersonalizedRanking ClassicEstimatorName = "bayesian-personalized-ranking"

	// Classifiers
	KNeighborsClassifier ClassicEstimatorName = "knn-classifier"
	AdaBoostClassifier   ClassicEstimatorName = "ada-boost-classifier"
	BernoulliNB          ClassicEstimatorName = "bernoulli-nb"
	GaussianNB           ClassicEstimatorName = "gaussian-nb"
	MultinomialNB        ClassicEstimatorName = "multinomial-nb"

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
	KMeansClustering   ClassicEstimatorName = "kmeans"
	SpectralClustering ClassicEstimatorName = "spectral"
	DBSCANClustering   ClassicEstimatorName = "dbscan"
	OpticsClustering   ClassicEstimatorName = "optics"
	BirchClustering    ClassicEstimatorName = "birch"

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
		ExponentialSmoothing,

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

// +kubebuilder:validation:Enum="float";"int";"categorical";
type HyperParameterDataType string

const (
	HyperParameterDataTypeFloat       HyperParameterDataType = "float"
	HyperParameterDataTypeInt         HyperParameterDataType = "int"
	HyperParameterDataTypeCategorical HyperParameterDataType = "categorical"
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

// The Horizon unit
// +kubebuilder:validation:Enum="second";"minute";"hour";"day";"week";"month";"quarter";"year";"multi-year"
type Freq string

const (
	FreqSeconds    Freq = "second"
	FreqMinutes    Freq = "minute"
	FreqHours      Freq = "hour"
	FreqDays       Freq = "day"
	FreqWeeks      Freq = "week"
	FreqMonths     Freq = "month"
	FreqQtrs       Freq = "quarter"
	FreqYears      Freq = "year"
	FreqMultiYears Freq = "multi-year"
)

// The Aggregate unit
// +kubebuilder:validation:Enum="min";"max";"mean";"median";"sum";"stddev";"var";"none"
type Aggregate string

const (
	AggregateMin    Aggregate = "min"
	AggregateMax    Aggregate = "max"
	AggregateMean   Aggregate = "mean"
	AggregateMedian Aggregate = "median"
	AggregateSum    Aggregate = "sum"
	AggregateStddev Aggregate = "stddev"
	AggregateVar    Aggregate = "var"
	AggregateNone   Aggregate = "none"
)

// The  hierarchical time series.
// +kubebuilder:validation:Enum="bottom-up";"middle-out";"top-down";"none";
type HTS string

const (
	HTSBottomUp  HTS = "bottom-up"
	HTSMiddleOut HTS = "middle-out"
	HTSTopDown   HTS = "top-down"
	HTSNone      HTS = "none"
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
	GeneralConnectionCategory             ConnectionCategory = "general"
	CloudProviderConnectionCategory       ConnectionCategory = "cloud"
	DockerImageRegistryConnectionCategory ConnectionCategory = "docker-image-registry"
	DatabaseConnectionCategory            ConnectionCategory = "database"
	GitConnectionCategory                 ConnectionCategory = "git"
	MessagingConnectionCategory           ConnectionCategory = "messaging"
	BrokerConnectionMessage               ConnectionCategory = "message-broker"
	GraphDatabaseConnectionCategory       ConnectionCategory = "graph-database"
	SocialMediaConnectionCategory         ConnectionCategory = "social-media"
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
	NowTriggerScheduleEventType     TriggerScheduleEventType = "now"
	OnceTriggerScheduleEventType    TriggerScheduleEventType = "once"
	HourlyTriggerScheduleEventType  TriggerScheduleEventType = "hourly"
	DailyTriggerScheduleEventType   TriggerScheduleEventType = "daily"
	WeeklyTriggerScheduleEventType  TriggerScheduleEventType = "weekly"
	MonthlyTriggerScheduleEventType TriggerScheduleEventType = "monthly"
	YearlyTriggerScheduleEventType  TriggerScheduleEventType = "yearly"
	CronTriggerScheduleEventType    TriggerScheduleEventType = "cron"
)

//==============================================================================
// Trigger Type
//==============================================================================

// +kubebuilder:validation:Enum="on-demand";"on-schedule";"on-new-data";"on-github-event";"on-concept-drift";"on-pref-degradation"
type TriggerType string

const (
	OnDemandTriggerType        TriggerType = "on-demand"
	ScheduleTriggerType        TriggerType = "on-schedule"
	NewDataTriggerType         TriggerType = "on-new-data"
	GithubEventTriggerType     TriggerType = "on-github-event"
	ConceptDriftTriggerType    TriggerType = "on-concept-drift"
	PrefDegragationTriggerType TriggerType = "on-pref-degradation"
)

//==============================================================================
// Condition Reason
//==============================================================================

type ConditionReason string

const (
	FailedConditionReason ConditionReason = "FailedConditionReason"
	Success               ConditionReason = "Success"
	Running               ConditionReason = "Running"
	WaitingForApproval    ConditionReason = "WaitingForApproval"
	Approved              ConditionReason = "Approved"
	Denied                ConditionReason = "Denied"
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

// +kubebuilder:validation:Enum="last-24-hours";"last-7-days";"last-30-days";"last-90-days";"none"
type ReportRange string

const (
	Last24HoursReportRange ReportRange = "last-24-hours"
	Last7DaysReportRange   ReportRange = "last-7-days"
	Last30DaysReportRange  ReportRange = "last-30-days"
	Last90DaysReportRange  ReportRange = "last-90-days"
	NoneReportRange        ReportRange = "none"
)

type FeatureStoreIngestType string

const (
	BatchIngestType    FeatureStoreIngestType = "batch"
	StreamIngestType   FeatureStoreIngestType = "stream"
	PushIngestType     FeatureStoreIngestType = "push"
	RequestIngestType  FeatureStoreIngestType = "request"
	OnDemandIngestType FeatureStoreIngestType = "ondemand"
)

//==============================================================================
// Compiler Name
//==============================================================================

// +kubebuilder:validation:Enum="tvm";"onyx";"xla";"none"
type CompilerName string

const (
	TVMCompilerName  CompilerName = "tvm"
	OnyxCompilerName CompilerName = "onyx"
	XlaCompilerName  CompilerName = "xla"
	NoneCompilerName CompilerName = "none"
)

// GithubEvents specify repo and the events to listen in order ot fire the pipeline
type GithubEvents struct {
	// The GitHub connections used to loginto git
	GitConnectionsName *string `json:"gitConnectionName,omitempty" protobuf:"bytes,1,opt,name=gitConnectionName"`
	// Repository is the name of the github repository
	Repository *string `json:"repository,omitempty" protobuf:"bytes,2,opt,name=repository"`
	// Branch is the name of the github branch.
	// By default, the trigger listen to all branch
	Branch *string `json:"branch,omitempty" protobuf:"bytes,3,opt,name=branch"`
	// Blobname regex is a regular expression on the blob name that changed
	BlobNameRegex *string `json:"blobNameRegex,omitempty" protobuf:"bytes,4,opt,name=blobNameRegex"`
	// Events is the name of the github events.
	Events []string `json:"events,omitempty" protobuf:"bytes,5,rep,name=events"`
}

// RunSchedule specifies the schedule for a Job to be executed
type RunSchedule struct {
	// Indicates if the schedule is enabled and the Jobs associated it will be created at the specified time
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"varint,1,opt,name=enabled"`
	// The cron string of the schedule. See https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm for more information
	// +kubebuilder:validation:Optional
	Cron *string `json:"cron,omitempty" protobuf:"bytes,4,opt,name=cron"`
	// +kubebuilder:validation:Optional
	// The type of schedule, which can be a frequency interval or a cron expression
	Type TriggerScheduleEventType `json:"type,omitempty" protobuf:"bytes,5,opt,name=type"`
}

// Compute the next run. return nil if the schedule is disabled.
func (schedule RunSchedule) NextRun() *metav1.Time {
	if schedule.Enabled == nil || !*schedule.Enabled {
		return nil
	}
	now := metav1.Now()
	hour := now.Hour()
	day := now.Day()
	month := now.Month()
	year := now.Year()

	switch schedule.Type {
	case NowTriggerScheduleEventType:
		return &now
	case HourlyTriggerScheduleEventType:
		nextTime := time.Date(year, month, day, hour+1, 0, 0, 0, now.Location())
		next := metav1.NewTime(nextTime)
		return &next
	case DailyTriggerScheduleEventType:
		nextTime := time.Date(year, month, day+1, 0, 0, 0, 0, now.Location())
		next := metav1.NewTime(nextTime)
		return &next
	case WeeklyTriggerScheduleEventType:
		nextTime := time.Date(year, month, day+7, 0, 0, 0, 0, now.Location())
		// roll back to monday
		if wd := nextTime.Weekday(); wd == time.Sunday {
			nextTime = nextTime.AddDate(0, 0, -6)
		} else {
			nextTime = nextTime.AddDate(0, 0, -int(wd)+1)
		}
		next := metav1.NewTime(nextTime)
		return &next
	case MonthlyTriggerScheduleEventType:

		if month == 12 {
			nextTime := time.Date(year+1, 1, 1, 0, 0, 0, 0, now.Location())
			next := metav1.NewTime(nextTime)
			return &next
		} else {
			nextTime := time.Date(year, month+1, 1, 0, 0, 0, 0, now.Location())
			next := metav1.NewTime(nextTime)
			return &next
		}
	case YearlyTriggerScheduleEventType:
		nextTime := time.Date(year+1, 1, 1, 0, 0, 0, 0, now.Location())
		next := metav1.NewTime(nextTime)
		return &next
	case CronTriggerScheduleEventType:
		nextTime := cronexpr.MustParse(*schedule.Cron).Next(time.Now())
		next := metav1.NewTime(nextTime)
		return &next
	}
	return nil
}

type RunScheduleStatus struct {
	// Last time the job started
	// +kubebuilder:validation:Optional
	LastRun *metav1.Time `json:"lastRun,omitempty" protobuf:"bytes,1,opt,name=lastRun"`
	// The time of the day when the schedule will be executed
	// +kubebuilder:validation:Optional
	NextRun *metav1.Time `json:"nextRun,omitempty" protobuf:"bytes,2,opt,name=nextRun"`
	// In the case of failure, the resource controller which created the run will set this field with a failure reason
	// +kubebuilder:validation:Optional
	FailureReason *StatusError `json:"failureReason,omitempty" protobuf:"bytes,5,opt,name=failureReason"`
	// In the case of failure, the resource controller which created the run will set this field with a failure message
	// +kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,6,opt,name=failureMessage"`
	// Last run name
	// +kubebuilder:validation:Optional
	LastRunName *string `json:"lastRunName,omitempty" protobuf:"bytes,7,opt,name=lastRunName"`
	// Logs from the last run
	// +kubebuilder:validation:Optional
	LastRunLogs Logs `json:"lastRunLogs,omitempty" protobuf:"bytes,8,opt,name=lastRunLogs"`
}

// Check if we are due for a run. next run must be set.
func (runstatus *RunScheduleStatus) IsDue() bool {
	if runstatus.NextRun == nil {
		return true
	}
	now := metav1.Now()
	return runstatus.NextRun.Time.Before(now.Time)
}

func (runstatus *RunScheduleStatus) Start() {
	now := metav1.Now()
	runstatus.LastRun = &now
}

func (runstatus *RunScheduleStatus) SetNext(nextRun metav1.Time) {
	runstatus.NextRun = &nextRun
}

// Measurement is a value for a specific metric
type Measurement struct {
	// +kubebuilder:validation:Optional
	Entity v1.ObjectReference `json:"entity,omitempty" protobuf:"bytes,1,opt,name=entity"`
	// +kubebuilder:validation:Optional
	Column *string `json:"column,omitempty" protobuf:"bytes,2,opt,name=column"`
	// The metric type name (e.g. F1 / Accuracy)
	// +kubebuilder:validation:Optional
	Metric *Metric `json:"metric,omitempty" protobuf:"bytes,3,opt,name=metric"`
	// The value of the metric for quantitive observations
	// +kubebuilder:validation:Optional
	Value *float64 `json:"value,omitempty" protobuf:"bytes,4,opt,name=value"`
	// Metric standard diviation for quantative observations.
	// +kubebuilder:validation:Optional
	Stddev *float64 `json:"stddev,omitempty" protobuf:"bytes,5,opt,name=stddev"`
	// If the metric refer to a bool unit, store the bool value
	// +kubebuilder:validation:Optional
	BoolQty *bool `json:"boolQty,omitempty" protobuf:"varint,6,opt,name=boolQty"`
	// If the metric refer to categorical measure,store the category.
	// +kubebuilder:validation:Optional
	Category *string `json:"category,omitempty" protobuf:"bytes,7,opt,name=category"`
	// Capture a set of values.
	// +kubebuilder:validation:Optional
	ValueSet []string `json:"valueSet,omitempty" protobuf:"bytes,8,rep,name=valueSet"`
	// The Time when the observation was taken
	// +kubebuilder:validation:Optional
	TimePoint *metav1.Time `json:"timePoint,omitempty" protobuf:"bytes,9,opt,name=timePoint"`
	// The measurment task type (e.g. train, test, cv, feature)
	// +kubebuilder:validation:Optional
	TaskType *string `json:"taskType,omitempty" protobuf:"bytes,10,opt,name=taskType"`
	// The name of the algorithm that generated this measurment
	// +kubebuilder:validation:Optional
	Algorithm *string `json:"algorithm,omitempty" protobuf:"bytes,11,opt,name=algorithm"`
}

// +kubebuilder:validation:Enum="live";"shadow";"none"
type ModelRole string

const (
	LiveModelRole   ModelRole = "live"
	ShadowModelRole ModelRole = "shadow"
	NoneModelRole   ModelRole = "none"
)

// ModelDeploymentSpec describes how a single model should be deployed with a Predictor, and
// how prediction traffic will be routed to the model
type ModelDeploymentSpec struct {
	// The reference to a Model resource which has been packaged and exists in the same Location Product
	// as the Predictor which specifies the ModelDeploymentSpec
	// +kubebuilder:validation:Required
	// +required
	ModelRef v1.ObjectReference `json:"modelRef,omitempty" protobuf:"bytes,1,opt,name=modelRef"`
	// the port of the model service.
	// +kubebuilder:default:=8080
	// +kubebuilder:validation:Optional
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// The version of the model, derived from the Study which created it
	// +kubebuilder:validation:Optional
	ModelVersion *string `json:"modelVersion,omitempty" protobuf:"bytes,3,opt,name=modelVersion"`
	// The minimum percentage (0 through 100) of traffic that will be served by the model
	// +kubebuilder:validation:Maximum=100
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:default:=100
	// +kubebuilder:validation:Optional
	Traffic *int32 `json:"traffic,omitempty" protobuf:"varint,4,opt,name=traffic"`
	// Role denotes the role of this model
	// +kubebuilder:default:=live
	// +kubebuilder:validation:Optional
	Role *ModelRole `json:"role,omitempty" protobuf:"bytes,5,opt,name=role"`
	// MountTar means that we would mount the model tar file. Else we would use baked image.
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	MountTar *bool `json:"mountTar,omitempty" protobuf:"varint,9,opt,name=mountTar"`
	// TrafficSelector is a filter on the traffic to this model
	// +kubebuilder:validation:Optional
	TrafficSelector *string `json:"trafficSelector,omitempty" protobuf:"bytes,10,opt,name=trafficSelector"`
	// The approver account name
	// +kubebuilder:validation:Optional
	ApprovedBy v1.ObjectReference `json:"approvedBy,omitempty" protobuf:"bytes,12,opt,name=approvedBy"`
	// The time of approval
	// +kubebuilder:validation:Optional
	ApprovedAt *metav1.Time `json:"approvedAt,omitempty" protobuf:"bytes,13,opt,name=approvedAt"`
}

// +kubebuilder:validation:Enum="tabular";"image";"nlp";"video";"audio"
type DatasetType string

const (
	TabularDatasetType DatasetType = "tabular"
	ImageDatasetType   DatasetType = "image"
	NLPDatasetType     DatasetType = "nlp"
	VideoDatasetType   DatasetType = "video"
	AudioDatasetType   DatasetType = "audio"
)

// AccessType define how client reach the predictor
// +kubebuilder:validation:Enum="cluster-ip";"node-port";"load-balancer";"ingress";"mesh";"none"
type AccessType string

const (
	// Use cluster port if the predictor is an internal micro service
	ClusterIPAccessType AccessType = "cluster-ip"
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
	LTOp Op = "lt"
	EQOp Op = "eq"
	GTOp Op = "gt"
	NEOp Op = "ne" // not equal
	LEOp Op = "le" // less or equal
	GE   Op = "ge" // greater or equal
)

// UpdateUpdateStrategy strategy is a dataset update strategy
// +kubebuilder:validation:Enum="upsert";"insert";"update"
type UpdateStrategy string

const (
	UpsertUpdateStrategy UpdateStrategy = "upsert"
	InsertUpdateStrategy UpdateStrategy = "insert"
	UpdateUpdateStrategy UpdateStrategy = "update"
)

// Classify the model per the study phase. for example, feature engineering models, baseline models,
// +kubebuilder:validation:Enum="feature-engineering";"baseline";"search";"ensemble";"test"
type ModelClassType string

const (
	FEModelStudyPhaseClassType       ModelClassType = "feature-engineering" // for feature engineering models
	BaselineModelStudyPhaseClassType ModelClassType = "baseline"            // for baseline models
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

// Define how a model is promoted to production
// +kubebuilder:validation:Enum="manual";"best";"latest";"none"
type PromotionType string

const (
	ManualPromotion PromotionType = "manual"
	LatestPromotion PromotionType = "latest"
	BestPromotion   PromotionType = "best"
	NonePromotion   PromotionType = "none"
)

// +kubebuilder:validation:Enum="unclassified";"confidential";"secret";"top-secret"
type SecurityClearanceLevel string

const (
	UnclassifiedSecurityClearanceLevel SecurityClearanceLevel = "unclassified"
	ConfidentialSecurityClearanceLevel SecurityClearanceLevel = "confidential"
	SecretSecurityClearanceLevel       SecurityClearanceLevel = "secret"
	TopSecretSecurityClearanceLevel    SecurityClearanceLevel = "top-secret"
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
// +kubebuilder:validation:Enum="classical";"dnn";"transformer";"chatbot";"rl";"hierarchy";
type ModelType string

const (
	ClassicalModelType   ModelType = "classical"
	HierarchyModelType   ModelType = "hierarchy" // mainly for time series.
	DNNModelType         ModelType = "dnn"
	TransformerModelType ModelType = "transformer"
	ChatbotModelType     ModelType = "chatbot"
	RLModelType          ModelType = "rl"
)

// ModelType enamurate the model type
// +kubebuilder:validation:Enum="protobuf";"pickle";"cloudpickle";"mlleap";"mlmodel";"h5";"onyx";"pmml";"pt";

type ModelServingFormat string

const (
	ProtobufModelServingFormat    ModelServingFormat = "protobuf"
	PickleModelServingFormat      ModelServingFormat = "pickle"
	CloudPickleModelServingFormat ModelServingFormat = "cloudpickle"
	MLLeapModelServingFormat      ModelServingFormat = "mlleap"
	MLModelModelServingFormat     ModelServingFormat = "mlmodel"
	H5ModelServingFormat          ModelServingFormat = "h5"
	OnyxModelServingFormat        ModelServingFormat = "onyx"
	PmmlModelServingFormat        ModelServingFormat = "pmml"
	TorchScriptModelServingFormat ModelServingFormat = "pt"
)

// +kubebuilder:validation:Enum="flask";"grpc";"onyx";
// Predictor format represent the API implementation of the model
type PredictorFormat string

const (
	FlaskPredictor PredictorFormat = "flask"
	GrpcPredictor  PredictorFormat = "grpc"
	OnyxPredictor  PredictorFormat = "onyx"
)

type ServingSiteType string

const (
	DevServingSiteType   ServingSiteType = "dev"
	ProdServingSiteType  ServingSiteType = "prod"
	StageServingSiteType ServingSiteType = "stage"
)

// +kubebuilder:validation:Enum="one-to-one";"one-to-many";"many-to-many";
// Relationship type between data sources
type RelationshipArity string

const (
	OneToOneRelationshipArity   RelationshipArity = "one-to-one"
	OneToManyRelationshipArity  RelationshipArity = "one-to-many"
	ManyToManyRelationshipArity RelationshipArity = "many-to-many"
)

// ModalityType define the way that ASHA algorithm divide the data .
// Since we are using multi modal alg , this parameter define the modality
// +kubebuilder:validation:Enum="data";"epochs";
type ModalityType string

const (
	DataModalityType   ModalityType = "data"
	EpochsModalityType ModalityType = "epochs"
)

type OutlierAlgorithmName string

const (
	IsolationForestOutlierAlgorithmName OutlierAlgorithmName = "isolation-forest"
)

// NotificationSpec specifies which Notifiers to forward Alert resources to
type NotificationSpec struct {
	// Time-to-live for error messages, in seconds
	// +kubebuilder:default:=3600
	// +kubebuilder:validation:Optional
	ErrorTTL *int32 `json:"errorTTL,omitempty" protobuf:"varint,2,opt,name=errorTTL"`
	// Time-to-live for success messages. In seconds
	// +kubebuilder:default:=3600
	// +kubebuilder:validation:Optional
	SuccessTTL *int32 `json:"successTTL,omitempty" protobuf:"varint,4,opt,name=successTTL"`
	// The name of the Notifier which exists in the same tenant as the resource specifying the NotificationSpec
	// +kubebuilder:default:= ""
	// +kubebuilder:validation:Optional
	NotifierName *string `json:"notifierName,omitempty" protobuf:"bytes,5,opt,name=notifierName"`
	// The labels which will be searched for in all Notifiers to determine the target Notifiers
	// +kubebuilder:validation:Optional
	Selector map[string]string `json:"selector,omitempty" protobuf:"bytes,6,opt,name=selector"`
}

// Logs describes the location of logs produced by workloads associated with a resource
type Logs struct {
	// The name of the VirtualBucket resource where the logs are stored
	// +kubebuilder:validation:Optional
	BucketName string `json:"bucketName,omitempty" protobuf:"bytes,1,opt,name=bucketName"`
	// The collection of ContainerLog objects that describe the location of logs per container
	// +kubebuilder:validation:Optional
	Containers []ContainerLog `json:"containers,omitempty" protobuf:"bytes,2,rep,name=containers"`
}

// Append the logs only if they are not already exists
func (logs *Logs) Append(newLogs []ContainerLog) {
	found := false
	for _, v := range logs.Containers {
		for _, l := range newLogs {
			if l.Key == v.Key {
				found = true
				break
			}
		}
	}
	if !found {
		logs.Containers = append(logs.Containers, newLogs...)
	}
}

// ContainerLog describes the location of logs for a single Job
type ContainerLog struct {
	// The name of the Job
	Job string `json:"job,omitempty" protobuf:"bytes,1,rep,name=job"`
	// The container name
	Container string `json:"container,omitempty" protobuf:"bytes,2,rep,name=container"`
	// The path to the log in the bucket
	Key string `json:"key,omitempty" protobuf:"bytes,3,rep,name=key"`
}

// +kubebuilder:validation:Enum="multipicative";"additive";"auto";"none"
type SeasonalityMode string

const (
	MultiplicativeSeasonalityMode SeasonalityMode = "multiplicative"
	AdditiveSeasonalityMode       SeasonalityMode = "additive"
	AutoSeasonalityMode           SeasonalityMode = "auto"
	NoneSeasonalityMode           SeasonalityMode = "none"
)

// The Log level for modela jobs
// +kubebuilder:validation:Enum="trace";"debug";"info";"error"
type LogLevel string

const (
	TraceLogLevel LogLevel = "trace"
	DebugLogLevel LogLevel = "debug"
	InfoLogLevel  LogLevel = "info"
	ErrorLogLevel LogLevel = "error"
)

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
	Values []CurvePoint `json:"values,omitempty" protobuf:"bytes,1,rep,name=values"`
}

type PRCurve struct {
	Values []CurvePoint `json:"values,omitempty" protobuf:"bytes,1,rep,name=values"`
}

type ConfusionMatrixRow struct {
	T     string  `json:"t,omitempty" protobuf:"bytes,1,opt,name=t"` // True Label
	P     string  `json:"p,omitempty" protobuf:"bytes,2,opt,name=p"` // Predicated Label
	Count int32   `json:"count,omitempty" protobuf:"varint,3,opt,name=count"`
	Pct   float64 `json:"pct,omitempty" protobuf:"bytes,4,opt,name=pct"`
}

type ConfusionMatrix struct {
	Rows []ConfusionMatrixRow `json:"rows,omitempty" protobuf:"bytes,1,rep,name=rows"`
}

// ResourceSpec specifies the amount of resources that will be allocated to a workload
type ResourceSpec struct {
	// If this resource is based on the workload, this field contain the name of the workload.
	// The name of a WorkloadClass. The system will use the resource requirements described by the WorkloadClass
	// +kubebuilder:default:="general-large"
	// +kubebuilder:validation:Optional
	WorkloadName *string `json:"workloadName,omitempty" protobuf:"bytes,1,opt,name=workloadName"`
	// If true, ignore the workload class name.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Custom *bool `json:"custom,omitempty" protobuf:"varint,2,opt,name=custom"`
	// Reference to the managed CPU trainer image, used internally
	CpuImage v1.ObjectReference `json:"cpuImage,omitempty" protobuf:"bytes,3,opt,name=cpuImage"`
	// Reference to the managed GPU trainer image, used internally
	GpuImage v1.ObjectReference `json:"gpuImage,omitempty" protobuf:"bytes,4,opt,name=gpuImage"`
	// The custom resource requirements for the workload, which are used if `WorkloadName` is not set
	// +kubebuilder:validation:Optional
	Requirements *v1.ResourceRequirements `json:"requirements,omitempty" protobuf:"bytes,5,opt,name=requirements"`
}

// +kubebuilder:validation:Enum="random";"split-column";"time";"random-stratified";"auto";"test-dataset";
type DataSplitMethod string

const (
	DataSplitMethodRandomStratified DataSplitMethod = "random-stratified"
	DataSplitMethodRandom           DataSplitMethod = "random"
	DataSplitMethodSplitColumn      DataSplitMethod = "split-column"
	DataSplitMethodTime             DataSplitMethod = "time"
	DataSplitMethodUseTestDataset   DataSplitMethod = "test-dataset"
	DataSplitAuto                   DataSplitMethod = "auto"
)

// HistogramData contains the data to construct a histogram image
type HistogramData struct {
	// The bins if the histogram describes continous variables
	Bins []float64 `json:"bins,omitempty" protobuf:"bytes,1,rep,name=bins"`
	// The name of the categories, one per bin if this is a categorical histogram
	Categories []string `json:"categories,omitempty" protobuf:"bytes,2,rep,name=categories"`
	// The set of values per bin
	Counts []float64 `json:"counts,omitempty" protobuf:"bytes,3,rep,name=counts"`
	// The number of missing values
	// +kubebuilder:validation:Minimum=0
	Missing int32 `json:"missing,omitempty" protobuf:"varint,4,opt,name=missing"`
	// The number of invalid values
	// +kubebuilder:validation:Minimum=0
	InvalidCount int32 `json:"invalid,omitempty" protobuf:"varint,5,opt,name=invalid"`
}

// PermissionsSpec specifies the Accounts that have access to a DataProduct or Tenant namespace and what permissions
// they possess for resources under the namespace
type PermissionsSpec struct {
	Stakeholders []Stakeholder `json:"stakeholders,omitempty" protobuf:"bytes,1,rep,name=stakeholders"`
}

// Stakeholder specifies the User Role Classes of an individual Account
type Stakeholder struct {
	// The name of an Account
	AccountName string `json:"account,omitempty" protobuf:"bytes,1,opt,name=account"`
	// The object references to UserRoleClass resources which describe the actions the Account may perform
	Roles []v1.ObjectReference `json:"roles,omitempty" protobuf:"bytes,2,rep,name=roles"`
}

// Images describes the Docker images used internally to perform workloads
type Images struct {
	// The image used during training
	// +kubebuilder:validation:Optional
	TrainerImage *string `json:"trainerImage,omitempty" protobuf:"bytes,1,opt,name=trainerImage"`
	// The image used for data operations
	// +kubebuilder:validation:Optional
	DataImage *string `json:"dataImage,omitempty" protobuf:"bytes,2,opt,name=dataImage"`
	// The image used to deploy models
	// +kubebuilder:validation:Optional
	PublisherImage *string `json:"publisherImage,omitempty" protobuf:"bytes,3,opt,name=publisherImage"`
}

// LastRunStatus describes the status of a single run for a run-based resource (such as a pipeline)
type LastRunStatus struct {
	// The name of the run
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// The status of the last run
	// +kubebuilder:validation:Optional
	Status string `json:"status,omitempty" protobuf:"bytes,2,opt,name=status"`
	// The time at which the run concluded
	// +kubebuilder:validation:Optional
	CompletedAt *metav1.Time `json:"completedAt,omitempty" protobuf:"bytes,3,opt,name=completedAt"`
	// The duration of the run in seconds
	// +kubebuilder:validation:Optional
	Duration int32 `json:"duration,omitempty" protobuf:"varint,4,opt,name=duration"`
	// In the case of failure, the resource controller which created the run will set this field with a failure reason
	FailureReason *StatusError `json:"failureReason,omitempty" protobuf:"bytes,5,opt,name=failureReason"`
	// In the case of failure, the resource controller which created the run will set this field with a failure message
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,6,opt,name=failureMessage"`
}

// The labels key for modela objects

const (
	// catalog group
	AlgorithmLabelKey       = "modela.ai/algorithm"
	CloudLabelKey           = "modela.ai/cloud"
	ManagedImageLabelKey    = "modela.ai/managedimage"
	MLFrameworkLabelKey     = "modela.ai/mlframework"
	PretrainedModelLabelKey = "modela.ai/pretrainedmodel"
	PublicDatasetLabelKey   = "modela.ai/publicdataset"
	WorkloadClassLabelKey   = "modela.ai/workloadclass"

	// data group
	DataPipelineLabelKey       = "modela.ai/datapipline"
	DataPipeleRunLabelKey      = "modela.ai/datapipelinerun"
	DataProductLabelKey        = "modela.ai/dataproduct"
	DataProductVersionLabelKey = "modela.ai/dataproductversion"
	DatasetLabelKey            = "modela.ai/dataset"
	DatasourceLabelKey         = "modela.ai/datasource"
	EntityLabelKey             = "modela.ai/entity"
	FeatureHistogramLabelKey   = "modela.ai/featurehistorgram"
	FeatureGroupLabelKey       = "modela.ai/featuregroup"
	RecipeLabelKey             = "modela.ai/recipe"
	RecipeRunLabelKey          = "modela.ai/reciperun"

	// inference
	DataAppLabelKey    = "modela.ai/dataapp"
	PredictionLabelKey = "modela.ai/prediction"
	PredictorLabelKey  = "modela.ai/predictor"

	AccountLabelKey       = "modela.ai/account"
	AlertLabelKey         = "modela.ai/alert"
	ApiTokenLabelKey      = "modela.ai/apitoken"
	AttachmentLabelKey    = "modela.ai/attachment"
	CommitLabelKey        = "modela.ai/commit"
	ConnectionLabelKey    = "modela.ai/connection"
	LabLabelKey           = "modela.ai/lab"
	LicenseLabelKey       = "modela.ai/license"
	NotifierLabelKey      = "modela.ai/notifier"
	ServingSiteLabelKey   = "modela.ai/servingsite"
	TenantLabelKey        = "modela.ai/tenant"
	UserClassLabelKey     = "modela.ai/userclass"
	VirtualBucketLabelKey = "modela.ai/virtualbucket"
	// Set the ref on the job for the original object
	ObjectRefNamespaceLabelKey = "modela.ai/object-ref-namespace"
	ObjectRefNameLabelKey      = "modela.ai/object-ref-name"

	// team
	PostmortemLabelKey = "modela.ai/postmortem"
	ReviewLabelKey     = "modela.ai/review"
	RunbookLabelKey    = "modela.ai/runbook"
	TodoLabelKey       = "modela.ai/todo"

	// training
	ModelLabelKey         = "modela.ai/model"
	ReportLabelKey        = "modela.ai/report"
	StudyLabelKey         = "modela.ai/study"
	TaskLabelKey          = "modela.ai/task"
	ModelClassLabelKey    = "modela.ai/modelclass"
	ModelClassRunLabelKey = "modela.ai/modelclassrun"
	JobLabelKey           = "kubernetes.io/job"
	OwnerKindLabelKey     = "modela.ai/owner-kind"

	ModelRoleLabelKey    = "models.ai/role"
	ModelVersionLabelKey = "models.ai/modelversion"

	BranchLabelKey  = "branch"
	RoleLabelKey    = "labels"
	ChangedLabelKey = "changed"
)

//////////////////////////////////////////////////////////
// Test
///////////////////////////////////////////////////////////

type DataTestType string

const (
	DataTestTypeMultiDataset DataTestType = "multi-dataset"
	DataTestTypeDataset      DataTestType = "dataset"
	DataTestTypeMultiColumn  DataTestType = "multi-column"
	DataTestTypeColumn       DataTestType = "column"
	DataTestTypeModel        DataTestType = "model"
	DataTestTypeDataDrift    DataTestType = "data-drift"
)

type AssertionType string

type TestSuite struct {
	// If false, this test case is disabled
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"bytes,1,opt,name=enabled"`
	// +kubebuilder:validation:Optional
	Tests []DataTestCase `json:"tests,omitempty" protobuf:"bytes,2,rep,name=tests"`
}

type FeatureFilterType string

const (
	FeatureFilterAllFeatures       FeatureFilterType = "all-features"
	FeatureFilterImportantFeatures FeatureFilterType = "important-features"
	FeatureFilterFeatureList       FeatureFilterType = "features-list"
	FeatureFilterNumericFeatures   FeatureFilterType = "numeric-features"
	FeatureFilterCatFeatures       FeatureFilterType = "categorical-features"
	FeatureFilterTextFeatures      FeatureFilterType = "text-features"
)

type ReferenceDataType string

const (
	ReferenceDataTrainingData ReferenceDataType = "train-data"
	ReferenceDataTestingData  ReferenceDataType = "test-data"
	ReferenceDataRange        ReferenceDataType = "range"
	ReferenceDataMovingAvg    ReferenceDataType = "moving-avg"
)

type DataTestCase struct {
	// If false, this test case is disabled
	// +kubebuilder:validation:Optional
	Enabled *bool `json:"enabled,omitempty" protobuf:"bytes,1,opt,name=enabled"`
	// The name of the test case, will be generate if empty by the combination of assertion, entity ref, column name and metric
	Name string `json:"name,omitempty" protobuf:"bytes,2,opt,name=name"`
	// The assertion type
	AssertThat AssertionType `json:"assertThat,omitempty" protobuf:"bytes,3,opt,name=assertThat"`
	// Reference to an entity.
	// +kubebuilder:validation:Optional
	EntityRef v1.ObjectReference `json:"entityRef,omitempty" protobuf:"bytes,4,opt,name=entityRef"`
	// Reference to another entity which is a ref.
	// +kubebuilder:validation:Optional
	CompareToRef v1.ObjectReference `json:"compareToRef,omitempty" protobuf:"bytes,5,opt,name=compareToRef"`
	// If unit test is column test, this is the name of the column
	// +kubebuilder:validation:Optional
	Column *string `json:"column,omitempty" protobuf:"bytes,6,opt,name=column"`
	// The test type
	// The type of the data test
	Type DataTestType `json:"type,omitempty" protobuf:"bytes,7,opt,name=type"`
	// The metric that is used for the test
	// +kubebuilder:validation:Optional
	Metric Metric `json:"metric,omitempty" protobuf:"bytes,8,opt,name=metric"`
	// The expected numerical value
	// +kubebuilder:validation:Optional
	ExpectedValue *float64 `json:"expectedValue,omitempty" protobuf:"bytes,9,opt,name=expectedValue"`
	// The expected value
	// +kubebuilder:validation:Optional
	ExpectedCategory *string `json:"expectedCategory,omitempty" protobuf:"bytes,10,opt,name=expectedCategory"`
	// For range based tests.
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Optional
	Lower *float64 `json:"lower,omitempty" protobuf:"bytes,11,opt,name=lower"`
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Optional
	Upper *float64 `json:"upper,omitempty" protobuf:"bytes,12,opt,name=upper"`
	// Expected set of values,if the assertion
	// +kubebuilder:validation:Optional
	ExpectedSet []string `json:"expectedSet,omitempty" protobuf:"bytes,13,rep,name=expectedSet"`
	// +kubebuilder:validation:Optional
	LowerInclusive *bool `json:"lowerInclusive,omitempty" protobuf:"varint,14,opt,name=lowerInclusive"`
	// +kubebuilder:validation:Optional
	UpperInclusive *bool `json:"upperInclusive,omitempty" protobuf:"varint,15,opt,name=upperInclusive"`
	// Indicates if this validation rule was automatically generated by the system
	// +kubebuilder:validation:Optional
	Generated *bool `json:"generated,omitempty" protobuf:"varint,16,opt,name=generated"`
	// The test case tags, used for filtering.
	// Optional Test Tags
	Tags []string `json:"tags,omitempty" protobuf:"bytes,17,rep,name=tags"`
	// For test that involve two columns (e.g. correlation)
	// +kubebuilder:validation:Optional
	Column2 *string `json:"column2,omitempty" protobuf:"bytes,18,opt,name=column2"`
	// Reference to an entity.
	// +kubebuilder:validation:Optional
	EntityRef2 v1.ObjectReference `json:"entityRef2,omitempty" protobuf:"bytes,19,opt,name=entityRef2"`

	// If unit test is column test, this is the name of the column
	// +kubebuilder:validation:Optional
	Columns []string `json:"columns,omitempty" protobuf:"bytes,20,rep,name=columns"`
	// Filter the filter for this unit test.
	// +kubebuilder:validation:Optional
	FeatureFilter *FeatureFilterType `json:"featureFilter,omitempty" protobuf:"bytes,21,opt,name=featureFilter"`
	// Set the reference type for this unit test
	// +kubebuilder:validation:Optional
	ReferenceType *ReferenceDataType `json:"referenceType,omitempty" protobuf:"bytes,22,opt,name=referenceType"`
	// The length of the past if we are comparing to moving avg
	// +kubebuilder:validation:Optional
	Periods *int32 `json:"periods,omitempty" protobuf:"bytes,23,opt,name=periods"`
}

type TestSuiteResult struct {
	// A reference to the object under test. Best practice is to have one suite for an object
	// +kubebuilder:validation:Optional
	EntityRef v1.ObjectReference `json:"entityRef,omitempty" protobuf:"bytes,1,opt,name=entityRef"`
	// Total number of failures. A failure is an unplanned error, e.g. cannot connect to a dataset
	// +kubebuilder:validation:Optional
	Failures int32 `json:"failures,omitempty" protobuf:"varint,2,opt,name=failures"`
	// Total number of assertion errors.
	// +kubebuilder:validation:Optional
	Errors int32 `json:"errors,omitempty" protobuf:"varint,3,opt,name=errors"`
	// Start time of running the suite
	// +kubebuilder:validation:Optional
	StartedAt *metav1.Time `json:"startedAt,omitempty" protobuf:"bytes,4,opt,name=startedAt"`
	// Stop time of running the suite.
	// +kubebuilder:validation:Optional
	CompletedAt *metav1.Time `json:"completedAt,omitempty" protobuf:"bytes,5,opt,name=completedAt"`
	// The result of executing the test suite. The result contain one result object per test case.
	// +kubebuilder:validation:Optional
	Tests []DataTestCaseResult `json:"tests,omitempty" protobuf:"bytes,6,rep,name=tests"`
}

// Result for a specific case
type DataTestCaseResult struct {
	// The test case name for this result.
	Name string `json:"name" protobuf:"bytes,1,opt,name=name"`
	// Actual observation
	// +kubebuilder:validation:Optional
	Actual Measurement `json:"actual,omitempty" protobuf:"bytes,2,opt,name=actual"`
	// A failure occur on assertion failure
	// +kubebuilder:validation:Optional
	Failure bool `json:"failure,omitempty" protobuf:"varint,3,opt,name=failure"`
	// An error occur if the system cannot execute the test case (e.g. connection error).
	// +kubebuilder:validation:Optional
	Error bool `json:"error,omitempty" protobuf:"varint,4,opt,name=error"`
	// An optional
	// +kubebuilder:validation:Optional
	FailureMsg string `json:"failureMsg,omitempty" protobuf:"bytes,5,opt,name=failureMsg"`
}

// +kubebuilder:validation:Enum="series";"panel";"hierarchical"
type TimeSeriesType string

const (
	TimeSeriesTypeSeries       TimeSeriesType = "series"
	TimeSeriesTypePanel        TimeSeriesType = "panel"
	TimeSeriesTypeHierarchical TimeSeriesType = "hierarchical"
)

type WorkerRunResult struct {
	// Worker ID
	// +kubebuilder:validation:Optional
	ID int32 `json:"id,omitempty" protobuf:"bytes,1,opt,name=id"`
	// URI
	// +kubebuilder:validation:Optional
	URI string `json:"uri,omitempty" protobuf:"bytes,2,opt,name=uri"`

	// +kubebuilder:validation:Optional
	Task TaskName `json:"task,omitempty" protobuf:"bytes,3,opt,name=task"`

	// +kubebuilder:validation:Optional
	Error string `json:"error,omitempty" protobuf:"bytes,4,opt,name=error"`
}

// add or update the worker result
func AddOrUpdateWorkerResult(results []WorkerRunResult, task TaskName, workerID int32, URI string, error string) []WorkerRunResult {
	index := 0
	for _, v := range results {
		if v.Task == task && v.ID == workerID {
			results[index].Error = error
			results[index].URI = URI
			return results
		}
	}
	// at this point we can add the result
	result := WorkerRunResult{
		ID:    workerID,
		URI:   URI,
		Task:  task,
		Error: error,
	}
	results = append(results, result)
	return results
}

func IsWorkerDone(results []WorkerRunResult, task TaskName, workerID int32) bool {
	for _, v := range results {
		if v.Task == task && v.ID == workerID {
			return v.URI != ""
		}
	}
	return false
}

func IsWorkerFailed(results []WorkerRunResult, task TaskName, workerID int32) bool {
	for _, v := range results {
		if v.Task == task && v.ID == workerID {
			return v.Error != ""
		}
	}
	return false
}

// Check if all the workers finished thier task
func IsWorkersFinished(results []WorkerRunResult, task TaskName, totalWorkers int32) bool {
	finished := int32(0)
	for _, v := range results {
		if v.Task == task {
			finished++
		}
	}
	return totalWorkers == finished
}

func IsMultiWorkerTaskFailed(results []WorkerRunResult, task TaskName, totalWorkers int32) bool {
	if !IsWorkersFinished(results, task, totalWorkers) {
		return false
	}

	for _, v := range results {
		if v.Task == task {
			if v.Error != "" {
				return true
			}
		}
	}
	return false

}

// return only the worker result for the task.
func FilterWorkerResult(runs []WorkerRunResult, task TaskName) []WorkerRunResult {
	result := make([]WorkerRunResult, 0)
	for _, v := range runs {
		if v.Task == task {
			result = append(result, v)
		}
	}
	return result

}

// +kubebuilder:validation:Enum="online";"batch";"streaming"
type PredictorType string

const (
	// Use cluster port if the predictor is an internal micro service
	Online    PredictorType = "online"
	Batch     PredictorType = "batch"
	Streaming PredictorType = "streaming"
)

// +kubebuilder:validation:Enum="api-token";"jwt-token";"none"
type AuthMethod string

const (
	ApiToken  AuthMethod = "api-token"
	JwtToken  AuthMethod = "jwt-token"
	NoneToken AuthMethod = "none"
)

type AccessSpec struct {
	// The port number that will be exposed on the Predictor's Pods to serve prediction traffic through the GRPCInferenceService API.
	// The Kubernetes Service created by the Predictor will expose the port and forward GRPC traffic to the backend pods
	// +kubebuilder:validation:Optional
	// +kubebuilder:validation:Minimum=1024
	// +kubebuilder:validation:Maximum=65535
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=8080
	Port *int32 `json:"port,omitempty" protobuf:"varint,1,opt,name=port"`
	// The port number that will be exposed on the external address of every node on the cluster, in the case of the
	// Predictor's access type being NodePort. Traffic from the port will be forwarded to the Predictor's backend service
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Maximum=65535
	// +kubebuilder:validation:Optional
	NodePort *int32 `json:"nodePort,omitempty" protobuf:"varint,2,opt,name=nodePort"`
	// The auto-generated DNS path where the Predictor service can be accessed. If the access type is ClusterIP, it will
	// be a cluster-internal DNS name (i.e. predictor.default-serving-site.svc.cluster.local). In the case of the Ingress
	// access type, it will be determined by the FQDN of the host ServingSite (i.e. predictor.default-serving-site.your-domain.ai).
	// +kubebuilder:validation:MaxLength=256
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	Path *string `json:"path,omitempty" protobuf:"bytes,3,opt,name=path"`
	// The Kubernetes-native access method which specifies how the Kubernetes Service created by the Predictor will be exposed.
	// See https://modela.ai/docs/docs/serving/production/#access-method for a detailed description of each access type
	// (defaults to cluster-ip)
	// +kubebuilder:default:="cluster-ip"
	// +kubebuilder:validation:Optional
	AccessType *AccessType `json:"accessType,omitempty" protobuf:"bytes,4,opt,name=accessType"`
	// Indicates if the prediction service should expose an additional port to serve the GRPCInferenceService API through REST.
	// The port one digit above the number specified by the Port field will be exposed to accept HTTP/1.1 traffic
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	REST *bool `json:"rest,omitempty" protobuf:"varint,5,opt,name=rest"`
	// Indicates
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	AuthMethod *AuthMethod `json:"authMethod,omitempty" protobuf:"bytes,6,opt,name=authMethod"`
	// ApiKeySecretRef references a Kubernetes Secret containing an API key that must be passed in prediction requests to the Predictor
	// +kubebuilder:validation:Optional
	ApiKeySecretRef *v1.SecretReference `json:"apikeySecretRef,omitempty" protobuf:"bytes,7,opt,name=apikeySecretRef"`
}
