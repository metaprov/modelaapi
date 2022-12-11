package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	corev1 "k8s.io/api/core/v1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ConnectionConditionType is the type of condition
type ConnectionConditionType string

// RegistryConnectionName Condition
const (
	ConnectionReady ConnectionConditionType = "Ready"
	ConnectionSaved ConnectionConditionType = "Saved"
)

// ConnectionCondition describes the state of a connection at a certain point.
type ConnectionCondition struct {
	// Type of account condition.
	Type ConnectionConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ConnectionConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status corev1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=connections,shortName=conn,singular=connection,categories={infra,modela}
// +kubebuilder:storageversion
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Provider",type="string",JSONPath=".spec.provider",description=""
// +kubebuilder:printcolumn:name="Category",type="string",JSONPath=".spec.category",description=""
// +kubebuilder:printcolumn:name="Secret",type="string",JSONPath=".spec.secretRef.name",description="",priority=1
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// Connection define a connection to an external system (e.g. database, public cloud)
type Connection struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ConnectionSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status ConnectionStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ConnectionList is a list of Connections.
type ConnectionList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Connection `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ConnectionSpec defines the desired state of a Connection
type ConnectionSpec struct {
	// The reference to the Tenant which owns the DataProduct. Defaults to `default-tenant`
	// +kubebuilder:validation:Optional
	TenantRef *corev1.ObjectReference `json:"tenantRef" protobuf:"bytes,1,opt,name=tenantRef"`
	// The type of external system which the connection references
	// +kubebuilder:default:="general"
	// +kubebuilder:validation:Optional
	Category *catalog.ConnectionCategory `json:"category" protobuf:"bytes,2,opt,name=category"`
	// Provider specifies the name api provider (E.g. aws)
	// +kubebuilder:validation:Required
	// +required
	Provider *catalog.ProviderName `json:"provider,omitempty" protobuf:"bytes,3,opt,name=provider"`
	// The reference to the secret which stores the sensitive credentials required to connect to the external system
	// +kubebuilder:validation:Required
	// +required
	SecretRef v1.SecretReference `json:"secretRef,omitempty" protobuf:"bytes,4,opt,name=secretRef"`

	// +kubebuilder:validation:Optional
	AmazonAthena *AmazonAthenaSpec `json:"athena,omitempty" protobuf:"bytes,5,opt,name=athena"`

	// +kubebuilder:validation:Optional
	ApacheDrill *ApacheDrillSpec `json:"drill,omitempty" protobuf:"bytes,6,opt,name=drill"`

	// +kubebuilder:validation:Optional
	ApacheDruid *ApacheDruidSpec `json:"druid,omitempty" protobuf:"bytes,7,opt,name=druid"`

	// +kubebuilder:validation:Optional
	ApacheHive *ApacheHiveSpec `json:"hive,omitempty" protobuf:"bytes,8,opt,name=hive"`

	// +kubebuilder:validation:Optional
	RedShift *AmazonRedShiftSpec `json:"redshift,omitempty" protobuf:"bytes,9,opt,name=redshift"`

	// +kubebuilder:validation:Optional
	Dremio *DremioSpec `json:"dremio,omitempty" protobuf:"bytes,10,opt,name=dremio"`

	// +kubebuilder:validation:Optional
	DB2 *DB2Spec `json:"db2,omitempty" protobuf:"bytes,11,opt,name=db2"`

	// +kubebuilder:validation:Optional
	GcpBigQuery *GcpBigQuerySpec `json:"bigquery,omitempty" protobuf:"bytes,12,opt,name=bigquery"`

	// +kubebuilder:validation:Optional
	Cassandra *ApacheCassandraSpec `json:"cassandra,omitempty" protobuf:"bytes,13,opt,name=cassandra"`

	// +kubebuilder:validation:Optional
	AzureSQLDatabase *AzureSQLDatabaseSpec `json:"azuresqldatabase,omitempty" protobuf:"bytes,14,opt,name=azuresqldatabase"`

	// +kubebuilder:validation:Optional
	MongoDb *MongoDbSpec `json:"mongodb,omitempty" protobuf:"bytes,15,opt,name=mongodb"`

	// +kubebuilder:validation:Optional
	MySql *MySqlSpec `json:"mysql,omitempty" protobuf:"bytes,16,opt,name=mysql"`

	// +kubebuilder:validation:Optional
	Odbc *OdbcSpec `json:"odbc,omitempty" protobuf:"bytes,17,opt,name=odbc"`

	// +kubebuilder:validation:Optional
	Oracle *OracleSpec `json:"oracle,omitempty" protobuf:"bytes,18,opt,name=oracle"`

	// +kubebuilder:validation:Optional
	PostgresSQL *PostgresSQLSpec `json:"postgres,omitempty" protobuf:"bytes,19,opt,name=postgres"`

	// +kubebuilder:validation:Optional
	Presto *PrestoSpec `json:"presto,omitempty" protobuf:"bytes,20,opt,name=presto"`

	// +kubebuilder:validation:Optional
	Snowflake *SnowflakeSpec `json:"snowflake,omitempty" protobuf:"bytes,22,opt,name=snowflake"`

	// +kubebuilder:validation:Optional
	Sybase *SybaseSpec `json:"sybase,omitempty" protobuf:"bytes,23,opt,name=sybase"`

	// +kubebuilder:validation:Optional
	Vertica *VerticaSpec `json:"vertica,omitempty" protobuf:"bytes,24,opt,name=vertica"`

	// +kubebuilder:validation:Optional
	CockroachDB *CockroachDBSpec `json:"cockroachdb,omitempty" protobuf:"bytes,25,opt,name=cockroachdb"`

	// +kubebuilder:validation:Optional
	ElasticSearch *ElasticSearchSpec `json:"elasticsearch,omitempty" protobuf:"bytes,26,opt,name=elasticsearch"`

	// +kubebuilder:validation:Optional
	Informix *InformixSpec `json:"informix,omitempty" protobuf:"bytes,27,opt,name=informix"`

	// +kubebuilder:validation:Optional
	SAPHana *SAPHanaSpec `json:"hana,omitempty" protobuf:"bytes,28,opt,name=hana"`

	// +kubebuilder:validation:Optional
	Teradata *TeradataSpec `json:"teradata,omitempty" protobuf:"bytes,29,opt,name=teradata"`

	// +kubebuilder:validation:Optional
	GcpSpanner *GcpSpannerSpec `json:"spanner,omitempty" protobuf:"bytes,30,opt,name=spanner"`

	// +kubebuilder:validation:Optional
	Spark *ApacheSparkSpec `json:"spark,omitempty" protobuf:"bytes,31,opt,name=spark"`

	// +kubebuilder:validation:Optional
	MSSqlServer *MSSqlServerSpec `json:"mssqlserver,omitempty" protobuf:"bytes,32,opt,name=mssqlserver"`

	// +kubebuilder:validation:Optional
	Clickhouse *ClickHouseSpec `json:"clickhouse,omitempty" protobuf:"bytes,33,opt,name=clickhouse"`

	// +kubebuilder:validation:Optional
	Greenplum *GreenPlumSpec `json:"greenplum,omitempty" protobuf:"bytes,34,opt,name=greenplum"`

	// +kubebuilder:validation:Optional
	Couchbase *CouchbaseSpec `json:"couchbase,omitempty" protobuf:"bytes,35,opt,name=couchbase"`

	// +kubebuilder:validation:Optional
	Exasol *ExasolSpec `json:"exasol,omitempty" protobuf:"bytes,36,opt,name=exasol"`

	// +kubebuilder:validation:Optional
	SqlLite *SqliteSpec `json:"sqlite,omitempty" protobuf:"bytes,37,opt,name=sqlite"`

	// +kubebuilder:validation:Optional
	SingleStore *SingleStoreSpec `json:"singlestore,omitempty" protobuf:"bytes,38,opt,name=singlestore"`

	// +kubebuilder:validation:Optional
	GoogleSheets *GoogleSheetsSpec `json:"gsheets,omitempty" protobuf:"bytes,39,opt,name=gsheets"`

	// +kubebuilder:validation:Optional
	AzureStorage *AzureStorageSpec `json:"azurestorage,omitempty" protobuf:"bytes,40,opt,name=azurestorage"`

	// +kubebuilder:validation:Optional
	AliCloud *AliCloudSpec `json:"alicloud,omitempty" protobuf:"bytes,41,opt,name=alicloud"`

	// +kubebuilder:validation:Optional
	DigitalOcean *DigitalOceanSpec `json:"digitalocean,omitempty" protobuf:"bytes,42,opt,name=digitalocean"`

	// +kubebuilder:validation:Optional
	Hetzner *HetznerSpec `json:"hetzner,omitempty" protobuf:"bytes,43,opt,name=hetzner"`

	// +kubebuilder:validation:Optional
	GcpStorage *GcpStorageSpec `json:"gcpstorage,omitempty" protobuf:"bytes,45,opt,name=gcpstorage"`

	// +kubebuilder:validation:Optional
	Linode *LinodeSpec `json:"linode,omitempty" protobuf:"bytes,46,opt,name=linode"`

	// +kubebuilder:validation:Optional
	Minio *MinioSpec `json:"minio,omitempty" protobuf:"bytes,47,opt,name=minio"`

	// +kubebuilder:validation:Optional
	Openstack *OpenstackSpec `json:"openstack,omitempty" protobuf:"bytes,48,opt,name=openstack"`

	// +kubebuilder:validation:Optional
	Ovh *OvhSpec `json:"ovh,omitempty" protobuf:"bytes,49,opt,name=ovh"`

	// +kubebuilder:validation:Optional
	Aws *AwsS3Spec `json:"aws,omitempty" protobuf:"bytes,50,opt,name=aws"`

	// +kubebuilder:validation:Optional
	Smtp *SmtpSpec `json:"smtp,omitempty" protobuf:"bytes,51,opt,name=smtp"`

	// +kubebuilder:validation:Optional
	FTP *FtpSpec `json:"ftp,omitempty" protobuf:"bytes,52,opt,name=ftp"`

	// +kubebuilder:validation:Optional
	SFTP *SFtpSpec `json:"sftp,omitempty" protobuf:"bytes,53,opt,name=sftp"`

	// +kubebuilder:validation:Optional
	Dropbox *DropboxSpec `json:"dropbox,omitempty" protobuf:"bytes,54,opt,name=dropbox"`

	// +kubebuilder:validation:Optional
	Box *BoxSpec `json:"box,omitempty" protobuf:"bytes,55,opt,name=box"`

	// +kubebuilder:validation:Optional
	ImageRegistry *ImageRegistrySpec `json:"imageRegistry,omitempty" protobuf:"bytes,56,opt,name=imageRegistry"`

	// +kubebuilder:validation:Optional
	Github *GithubSpec `json:"github,omitempty" protobuf:"bytes,57,opt,name=github"`

	// +kubebuilder:validation:Optional
	Gitlab *GitlabSpec `json:"gitlab,omitempty" protobuf:"bytes,58,opt,name=gitlab"`

	// +kubebuilder:validation:Optional
	Bitbucket *BitbucketSpec `json:"bitbuckt,omitempty" protobuf:"bytes,59,opt,name=bitbucket"`

	// +kubebuilder:validation:Optional
	Slack *SlackSpec `json:"slack,omitempty" protobuf:"bytes,60,opt,name=slack"`

	// +kubebuilder:validation:Optional
	MSTeam *MSTeamSpec `json:"msteam,omitempty" protobuf:"bytes,61,opt,name=msteam"`

	// +kubebuilder:validation:Optional
	MatterMost *MattermostSpec `json:"matterMost,omitempty" protobuf:"bytes,62,opt,name=matterMost"`

	// +kubebuilder:validation:Optional
	Hipchat *HipchatSpec `json:"hipchat,omitempty" protobuf:"bytes,63,opt,name=hipchat"`

	// +kubebuilder:validation:Optional
	VictorOps *VictorOpSpec `json:"victorop,omitempty" protobuf:"bytes,64,opt,name=victorop"`

	// +kubebuilder:validation:Optional
	PagerDuty *PagerDutySpec `json:"pagerduty,omitempty" protobuf:"bytes,65,opt,name=pagerduty"`

	// +kubebuilder:validation:Optional
	Pushover *PushoverSpec `json:"pushover,omitempty" protobuf:"bytes,66,opt,name=pushover"`

	// +kubebuilder:validation:Optional
	Opsgenie *OpsgenieSpec `json:"opsgenie,omitempty" protobuf:"bytes,67,opt,name=opsgenie"`

	// +kubebuilder:validation:Optional
	Webhook *WebhookSpec `json:"webhook,omitempty" protobuf:"bytes,68,opt,name=webhook"`

	// Social media
	// +kubebuilder:validation:Optional
	Facebook *FacebookSpec `json:"facebook,omitempty" protobuf:"bytes,69,opt,name=facebook"`

	// +kubebuilder:validation:Optional
	Twitter *TwitterSpec `json:"twitter,omitempty" protobuf:"bytes,70,opt,name=twitter"`

	// +kubebuilder:validation:Optional
	RabbitMQ *RabbitMQSpec `json:"rabbitmq,omitempty" protobuf:"bytes,71,opt,name=rabbitmq"`

	// +kubebuilder:validation:Optional
	Kafka *KafkaSpec `json:"kafka,omitempty" protobuf:"bytes,72,opt,name=kafka"`

	// +kubebuilder:validation:Optional
	Neo4j *Neo4JSpec `json:"neo4j,omitempty" protobuf:"bytes,73,opt,name=neo4j"`

	// +kubebuilder:validation:Optional
	Discord *DiscordSpec `json:"discrod,omitempty" protobuf:"bytes,74,opt,name=discord"`

	// +kubebuilder:validation:Optional
	InfluxDb *InfluxDBSpec `json:"influx,omitempty" protobuf:"bytes,75,opt,name=influx"`

	// +kubebuilder:validation:Optional
	TimescaleDB *TimescaleDBSpec `json:"timescale,omitempty" protobuf:"bytes,76,opt,name=timescale"`

	// +kubebuilder:validation:Optional
	VictoriaMetrics *VictoriaMetricsSpec `json:"victoriaMetrics,omitempty" protobuf:"bytes,77,opt,name=victoriaMetrics"`

	// +kubebuilder:validation:Optional
	Saleforce *SaleforceSpec `json:"saleforce,omitempty" protobuf:"bytes,78,opt,name=saleforce"`

	// +kubebuilder:validation:Optional
	SapCRM *SapCRMSpec `json:"sapCrm,omitempty" protobuf:"bytes,79,opt,name=sapCrm"`

	// +kubebuilder:validation:Optional
	AirTable *AirTableSpec `json:"airtable,omitempty" protobuf:"bytes,80,opt,name=airtable"`

	// +kubebuilder:validation:Optional
	AppWrite *AirWriteSpec `json:"appWrite,omitempty" protobuf:"bytes,81,opt,name=appWrite"`

	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,82,opt,name=owner"`
}

// ConnectionStatus is the observed state of a Connection
type ConnectionStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	UpdatedAt *metav1.Time `json:"updatedAt,omitempty" protobuf:"bytes,2,opt,name=updatedAt"`
	// UpdateUpdateStrategy in case of terminal failure
	// Borrowed from cluster api controller
	//+kubebuilder:validation:Optional
	FailureReason *catalog.StatusError `json:"failureReason,omitempty" protobuf:"bytes,3,opt,name=failureReason"`
	// UpdateUpdateStrategy in case of terminal failure message
	//+kubebuilder:validation:Optional
	FailureMessage *string `json:"failureMessage,omitempty" protobuf:"bytes,4,opt,name=failureMessage"`

	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []ConnectionCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,5,rep,name=conditions"`
}

// AthenaSpec defines the connection to Athena db
type AmazonAthenaSpec struct {
	// +kubebuilder:default:=""
	Database *string `json:"hostName,omitempty" protobuf:"bytes,1,opt,name=hostName"`
	// UserName
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,2,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,3,opt,name=password"`
	// +kubebuilder:default:=""
	Region *string `json:"region,omitempty" protobuf:"bytes,4,opt,name=region"`
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,5,opt,name=url"`
}

// BigQuerySpec defines the connection to Google BigQuery
type GcpBigQuerySpec struct {
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 9042
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// UserName
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,3,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,4,opt,name=password"`
	// +kubebuilder:default:=""
	ProjectID *string `json:"projectID,omitempty" protobuf:"bytes,5,opt,name=projectID"`
	// +kubebuilder:default:=""
	OAuthType *string `json:"oauthType,omitempty" protobuf:"bytes,6,opt,name=oauthType"`
	// +kubebuilder:default:=""
	ServiceAccountKeyPath *string `json:"serviceAccountKeyPath,omitempty" protobuf:"bytes,7,opt,name=serviceAccountKeyPath"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,8,opt,name=url"`
}

// CassandraSpec defines the connection to cassandra
type ApacheCassandraSpec struct {
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 9042
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`

	KeySpace *string `json:"keyspace,omitempty" protobuf:"bytes,3,opt,name=keyspace"`

	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`

	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`

	ProtocolVersion *string `json:"protocolVersion,omitempty" protobuf:"bytes,6,opt,name=protocolVersion"`

	LocalDC *string `json:"localDC,omitempty" protobuf:"bytes,7,opt,name=localDC"`

	LoadBalancePolicy *string `json:"loadBalancePolicy,omitempty" protobuf:"bytes,8,opt,name=loadBalancePolicy"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,9,opt,name=url"`
}

// ApacheDruid defines the connection to Apache Druid
type ApacheDruidSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 9042
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	KeySpace *string `json:"keyspace,omitempty" protobuf:"bytes,3,opt,name=keyspace"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

// ApacheDruid
type ApacheDrillSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 9042
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	KeySpace *string `json:"keyspace,omitempty" protobuf:"bytes,3,opt,name=keyspace"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

// CassandraSpec defines the connection to cassandra
type AzureSQLDatabaseSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 1433
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,3,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,4,opt,name=password"`
	// URL override the other settings
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,5,opt,name=database"`
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type MongoDbSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=27017
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type MySqlSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=3306
	// +kubebuilder:validation:Minimum=0
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type OdbcSpec struct {
	// +kubebuilder:default:=""
	ConnectionString *string `json:"connectionString,omitempty" protobuf:"bytes,1,opt,name=conntectionString"`
}

type OracleSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=1521
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:="XE"
	SID *string `json:"sid,omitempty" protobuf:"bytes,3,opt,name=sid"`
	// +kubebuilder:default:="thin"
	Driver *string `json:"driver,omitempty" protobuf:"bytes,4,opt,name=driver"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,5,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,6,opt,name=password"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,7,opt,name=url"`
}

type PostgresSQLSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=5432
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// Schema
	Schema *string `json:"schema,omitempty" protobuf:"bytes,4,opt,name=schema"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,5,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,6,opt,name=password"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,7,opt,name=url"`
}

type PrestoSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=8080
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Catalog *string `json:"catalog,omitempty" protobuf:"bytes,3,opt,name=catalog"`
	// +kubebuilder:default:=""
	Schema *string `json:"schema,omitempty" protobuf:"bytes,4,opt,name=schema"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,5,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,6,opt,name=password"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,7,opt,name=url"`
}

type AmazonRedShiftSpec struct {
	// +kubebuilder:default:=""
	Hostname *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=5439
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
	// AWS Region
	Region string `json:"region,omitempty" protobuf:"bytes,7,opt,name=region"`
	// redshift cluster id
	ClusterID string `json:"clusterID,omitempty" protobuf:"bytes,8,opt,name=clusterID"`
	// s3 staging location
	S3StagingLocation string `json:"s3StagingLocation,omitempty" protobuf:"bytes,9,opt,name=s3StagingLocation"`
	// IAM Role
	IAMRole string `json:"iamRole,omitempty" protobuf:"bytes,10,opt,name=iamRole"`
}

type ApacheHiveSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=10000
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Schema *string `json:"schema,omitempty" protobuf:"bytes,3,opt,name=schema"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type SnowflakeSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=443
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,3,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,4,opt,name=password"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,5,opt,name=database"`
	// +kubebuilder:default:=""
	Schema *string `json:"schema,omitempty" protobuf:"bytes,6,opt,name=schema"`
	// +kubebuilder:default:=""
	Warehouse *string `json:"warehouse,omitempty" protobuf:"bytes,7,opt,name=warehouse"`
	// +kubebuilder:default:=""
	Role *string `json:"role,omitempty" protobuf:"bytes,8,opt,name=role"`
	// URL Override the other
	URL *string `json:"url,omitempty" protobuf:"bytes,9,opt,name=url"`
}

type SybaseSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=5000
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type VerticaSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=5433
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type CockroachDBSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=5432
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type ElasticSearchSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=5432
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Prefix *string `json:"prefix,omitempty" protobuf:"bytes,3,opt,name=prefix"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type InformixSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=1526
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type InfluxDBSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type SAPHanaSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=1526
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type TeradataSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=6666
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type GcpSpannerSpec struct {
	// +kubebuilder:default:=""
	Project *string `json:"project,omitempty" protobuf:"bytes,1,opt,name=project"`
	// +kubebuilder:default:=""
	Instance *string `json:"instance,omitempty" protobuf:"bytes,2,opt,name=instance"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,3,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,4,opt,name=password"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,5,opt,name=database"`
	// URL Override the other
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type ApacheSparkSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=5433
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Schema *string `json:"schema,omitempty" protobuf:"bytes,3,opt,name=schema"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type MSSqlServerSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=1433
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default:=""
	Instance *string `json:"instance,omitempty" protobuf:"bytes,4,opt,name=instance"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,5,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,6,opt,name=password"`
	// URL Override the other
	URL *string `json:"url,omitempty" protobuf:"bytes,7,opt,name=url"`
}

type ClickHouseSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=8123
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type GreenPlumSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=5432
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type CouchbaseSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=8123
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	DefaultBucket *string `json:"defaultBucket,omitempty" protobuf:"bytes,6,opt,name=defaultBucket"`
	// URL Override the other
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,7,opt,name=url"`
}

type ExasolSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,7,opt,name=url"`
}

type SingleStoreSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,7,opt,name=url"`
}

type Neo4JSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,7,opt,name=url"`
}

type KafkaSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Channel *string `json:"channel,omitempty" protobuf:"bytes,3,opt,name=channel"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type SqliteSpec struct {
	// +kubebuilder:default:="general"
	Filename *string `json:"fileName,omitempty" protobuf:"bytes,1,opt,name=fileName"`
}

// //////////////////////////
// Cloud connection
// //////////////////////////
type AwsS3Spec struct {
	// Default zone.
	// +kubebuilder:default:=""
	DefaultRegion *string `json:"defaultRegion,omitempty" protobuf:"bytes,1,opt,name=defaultRegion"`
	// Aws Access key. This is an hidden fields which are stored in the secret
	// +kubebuilder:default:=""
	AccessKey *string `json:"accessKey,omitempty" protobuf:"bytes,2,opt,name=accessKey"`
	// Aws StorageSecret key. This is an hidden fields which are stored in the secret
	// +kubebuilder:default:=""
	SecretKey *string `json:"secretKey,omitempty" protobuf:"bytes,3,opt,name=secretKey"`
}

type AzureStorageSpec struct {
	// +kubebuilder:default:=""
	StorageAccount *string `json:"storageAccount,omitempty" protobuf:"bytes,1,opt,name=storageAccount"`
	// This is an hidden field which is stored in a p
	// +kubebuilder:default:=""
	AccessKey *string `json:"accessKey,omitempty" protobuf:"bytes,2,opt,name=accessKey"`
}

type GcpStorageSpec struct {
	// +kubebuilder:default:=""
	KeyFile *string `json:"keyFile,omitempty" protobuf:"bytes,1,opt,name=keyFile"`
	// +kubebuilder:default:=""
	Project *string `json:"project,omitempty" protobuf:"bytes,2,opt,name=project"`
}

type DigitalOceanSpec struct {
	// Token for digital ocean
	// +kubebuilder:default:=""
	Token *string `json:"token,omitempty" protobuf:"bytes,1,opt,name=token"`
	// Access Key for digital ocean spaces
	// +kubebuilder:default:=""
	AccessKey *string `json:"accessKey,omitempty" protobuf:"bytes,2,opt,name=accessKey"`
	// StorageSecret Key for digital ocean spaces
	// +kubebuilder:default:=""
	SecretKey *string `json:"secretKey,omitempty" protobuf:"bytes,3,opt,name=secretKey"`
	// Default digital ocean
	// +kubebuilder:default:=""
	DefaultRegion *string `json:"defaultRegion,omitempty" protobuf:"bytes,4,opt,name=defaultRegion"`
	// url or connection string
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,5,opt,name=host"`
}

type MinioSpec struct {
	// Access key for minio
	// +kubebuilder:default:=""
	AccessKey *string `json:"accessKey,omitempty" protobuf:"bytes,1,opt,name=accessKey"`
	// StorageSecret key for minio
	// +kubebuilder:default:=""
	SecretKey *string `json:"secretKey,omitempty" protobuf:"bytes,2,opt,name=secretKey"`
	// Minio url connection.
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,3,opt,name=host"`
}

type ImageRegistrySpec struct {
	// Hostname for the image registry
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// Username for image registry
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,2,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,3,opt,name=password"`
}

type SlackSpec struct {
	// +kubebuilder:default:=""
	Token *string `json:"token,omitempty" protobuf:"bytes,4,opt,name=token"`
}

type SmtpSpec struct {
	// SMTP server Host
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// SMTP Server Port
	// +kubebuilder:default:=25
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// The SMTP domain name
	// +kubebuilder:default:=""
	Helo *string `json:"helo,omitempty" protobuf:"bytes,3,opt,name=helo"`
	// The smtp email
	Email *string `json:"email,omitempty" protobuf:"bytes,4,opt,name=email"`
	// Use SSL when connecting to SMTP server
	// +kubebuilder:default:=false
	SSL *bool `json:"ssl,omitempty" protobuf:"varint,5,opt,name=ssl"`
	// +kubebuilder:default:=false
	VerifyPeer *bool `json:"verifyPeer,omitempty" protobuf:"varint,6,opt,name=verifyPeer"`
	// +kubebuilder:default:=false
	VerifyHost *bool `json:"verifyHost,omitempty" protobuf:"varint,7,opt,name=verifyHost"`
	// Use user name password auth
	// +kubebuilder:default:=true
	PasswordAuth *bool `json:"passwordAuth,omitempty" protobuf:"varint,8,opt,name=passwordAuth"`
	// User name when using user name and password
	Username *string `json:"username,omitempty" protobuf:"bytes,9,opt,name=username"`
	// Password when using user name and password
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,10,opt,name=password"`
}

type GithubSpec struct {
	// +kubebuilder:default:=""
	Token *string `json:"token,omitempty" protobuf:"bytes,1,opt,name=token"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,2,opt,name=username"`
	// +kubebuilder:default:=""
	SSH *string `json:"ssh,omitempty" protobuf:"bytes,3,opt,name=ssh"`
}

type BitbucketSpec struct {
	// +kubebuilder:default:=""
	Token *string `json:"token,omitempty" protobuf:"bytes,1,opt,name=token"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,2,opt,name=username"`
	// +kubebuilder:default:=""
	SSH *string `json:"ssh,omitempty" protobuf:"bytes,3,opt,name=ssh"`
}

type AliCloudSpec struct {
	// +kubebuilder:default:=""
	AccessKey *string `json:"accessKey,omitempty" protobuf:"bytes,1,opt,name=accessKey"`
	// +kubebuilder:default:=""
	SecretKey *string `json:"secretKey,omitempty" protobuf:"bytes,2,opt,name=secretKey"`
	// +kubebuilder:default:=""
	Region *string `json:"region,omitempty" protobuf:"bytes,3,opt,name=region"`
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,4,opt,name=host"`
}

type GitlabSpec struct {
	// +kubebuilder:default:=""
	Token *string `json:"token,omitempty" protobuf:"bytes,1,opt,name=token"`
	// +kubebuilder:default:=""
	SSH *string `json:"ssh,omitempty" protobuf:"bytes,2,opt,name=ssh"`
}

type HetznerSpec struct {
	// +kubebuilder:default:=""
	Token *string `json:"token,omitempty" protobuf:"bytes,1,opt,name=token"`
	// +kubebuilder:default:=""
	SSH *string `json:"ssh,omitempty" protobuf:"bytes,2,opt,name=ssh"`
}

type OpenstackSpec struct {
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,1,opt,name=username"`
	// +kubebuilder:default:=""
	Tenantname *string `json:"tenantName,omitempty" protobuf:"bytes,2,opt,name=tenantName"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,3,opt,name=password"`
	// +kubebuilder:default:=""
	Authurl *string `json:"authUrl,omitempty" protobuf:"bytes,4,opt,name=authUrl"`
	// +kubebuilder:default:=""
	Region *string `json:"region,omitempty" protobuf:"bytes,5,opt,name=region"`
}

type OvhSpec struct {
	// +kubebuilder:default:=""
	Endpoint *string `json:"endpoint,omitempty" protobuf:"bytes,1,opt,name=endpoint"`
	// +kubebuilder:default:=""
	Application *string `json:"application,omitempty" protobuf:"bytes,2,opt,name=application"`
	// +kubebuilder:default:=""
	Secret *string `json:"secret,omitempty" protobuf:"bytes,3,opt,name=secret"`
	// +kubebuilder:default:=""
	ConsumerKey *string `json:"consumerkey,omitempty" protobuf:"bytes,4,opt,name=consumerkey"`
}

type LinodeSpec struct {
	// +kubebuilder:default:=""
	Token *string `json:"token,omitempty" protobuf:"bytes,1,opt,name=token"`
}

type MSTeamSpec struct {
	// +kubebuilder:default:=""
	Webhook *string `json:"webhook,omitempty" protobuf:"bytes,1,opt,name=webhook"`
}

type MattermostSpec struct {
	// +kubebuilder:default:=""
	Url *string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
	// +kubebuilder:default:=""
	Channel *string `json:"channel,omitempty" protobuf:"bytes,2,opt,name=channel"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,3,opt,name=username"`
}

type HipchatSpec struct {
	// +kubebuilder:default:=""
	Url *string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
	// +kubebuilder:default:=""
	Token *string `json:"token,omitempty" protobuf:"bytes,2,opt,name=token"`
	// +kubebuilder:default:=""
	Room *string `json:"room,omitempty" protobuf:"bytes,3,opt,name=room"`
}

type VictorOpSpec struct {
	// +kubebuilder:default:=""
	ID *string `json:"apiID,omitempty" protobuf:"bytes,1,opt,name=apiID"`
	// +kubebuilder:default:=""
	ApiKey *string `json:"apiKey,omitempty" protobuf:"bytes,2,opt,name=apiKey"`
	// +kubebuilder:default:=""
	Url *string `json:"url,omitempty" protobuf:"bytes,3,opt,name=url"`
}

type PagerDutySpec struct {
	// +kubebuilder:default:=""
	ID *string `json:"apiID,omitempty" protobuf:"bytes,1,opt,name=apiID"`
	// +kubebuilder:default:=""
	ApiKey *string `json:"apiKey,omitempty" protobuf:"bytes,2,opt,name=apiKey"`
	// +kubebuilder:default:=""
	Url *string `json:"url,omitempty" protobuf:"bytes,3,opt,name=url"`
}

type PushoverSpec struct {
	// +kubebuilder:default:=""
	ID *string `json:"apiID,omitempty" protobuf:"bytes,1,opt,name=apiID"`
	// +kubebuilder:default:=""
	ApiKey *string `json:"apiKey,omitempty" protobuf:"bytes,2,opt,name=apiKey"`
	// +kubebuilder:default:=""
	Url *string `json:"url,omitempty" protobuf:"bytes,3,opt,name=url"`
}

type OpsgenieSpec struct {
	// +kubebuilder:default:=""
	ID *string `json:"apiID,omitempty" protobuf:"bytes,1,opt,name=apiID"`
	// +kubebuilder:default:=""
	ApiKey *string `json:"apiKey,omitempty" protobuf:"bytes,2,opt,name=apiKey"`
	// +kubebuilder:default:=""
	Url *string `json:"url,omitempty" protobuf:"bytes,3,opt,name=url"`
}

type WebhookSpec struct {
	// +kubebuilder:default:=""
	Url *string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
	// Content type
	// +kubebuilder:default:="application/json"
	ContentType *string `json:"contentType,omitempty" protobuf:"bytes,2,opt,name=contentType"`
	// The webhook secret token
	Token *string `json:"token,omitempty" protobuf:"bytes,3,opt,name=token"`
	// custom headers to send
	Headers map[string]string `json:"headers,omitempty" protobuf:"bytes,4,opt,name=headers"`
	// +kubebuilder:default:=false
	SSL *bool `json:"ssl,omitempty" protobuf:"varint,5,opt,name=ssl"`
}

type DiscordSpec struct {
	// Discrod webhook
	// +kubebuilder:default:=""
	Url *string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
	// Content type
	// +kubebuilder:default:="application/json"
	ContentType *string `json:"contentType,omitempty" protobuf:"bytes,2,opt,name=contentType"`
	// The webhook secret token
	Token *string `json:"token,omitempty" protobuf:"bytes,3,opt,name=token"`
	// custom headers to send
	Headers map[string]string `json:"headers,omitempty" protobuf:"bytes,4,opt,name=headers"`
	// +kubebuilder:default:=false
	SSL *bool `json:"ssl,omitempty" protobuf:"varint,5,opt,name=ssl"`
}

type GoogleSheetsSpec struct {
	// +kubebuilder:default:=""
	Scopes *string `json:"scopes,omitempty" protobuf:"bytes,1,opt,name=scopes"`
	// +kubebuilder:default:= ""
	ID *string `json:"id,omitempty" protobuf:"varint,2,opt,name=id"`
	// +kubebuilder:default:=""
	DataToPull *string `json:"dataToPull,omitempty" protobuf:"bytes,3,opt,name=dataToPull"`
}

type FTPSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 9042
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	KeySpace *string `json:"keyspace,omitempty" protobuf:"bytes,3,opt,name=keyspace"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type SFTPSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 9042
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	KeySpace *string `json:"keyspace,omitempty" protobuf:"bytes,3,opt,name=keyspace"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type DropboxSpec struct {
	// +kubebuilder:default:=""
	Token *string `json:"token,omitempty" protobuf:"bytes,1,opt,name=token"`
}

type BoxSpec struct {
	// +kubebuilder:default:=""
	Token *string `json:"token,omitempty" protobuf:"bytes,1,opt,name=token"`
}

type FacebookSpec struct {
	// +kubebuilder:default:=""
	Token *string `json:"token,omitempty" protobuf:"bytes,1,opt,name=token"`
}

type TwitterSpec struct {
	// +kubebuilder:default:=""
	Token *string `json:"token,omitempty" protobuf:"bytes,1,opt,name=token"`
}

type DB2Spec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 9042
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	KeySpace *string `json:"keyspace,omitempty" protobuf:"bytes,3,opt,name=keyspace"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type DremioSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 9042
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	KeySpace *string `json:"keyspace,omitempty" protobuf:"bytes,3,opt,name=keyspace"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type FtpSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 21
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,3,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,4,opt,name=password"`
}

type SFtpSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 21
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,3,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,4,opt,name=password"`
}

type RabbitMQSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 21
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,3,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,4,opt,name=password"`
}

type TimescaleDBSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 9042
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	KeySpace *string `json:"keyspace,omitempty" protobuf:"bytes,3,opt,name=keyspace"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type VictoriaMetricsSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 9042
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	KeySpace *string `json:"keyspace,omitempty" protobuf:"bytes,3,opt,name=keyspace"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type SaleforceSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 9042
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	KeySpace *string `json:"keyspace,omitempty" protobuf:"bytes,3,opt,name=keyspace"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type SapCRMSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 9042
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	KeySpace *string `json:"keyspace,omitempty" protobuf:"bytes,3,opt,name=keyspace"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type AirTableSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 9042
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	KeySpace *string `json:"keyspace,omitempty" protobuf:"bytes,3,opt,name=keyspace"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

// +kubebuilder:validation:Optional

type AirWriteSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 9042
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=65535
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	KeySpace *string `json:"keyspace,omitempty" protobuf:"bytes,3,opt,name=keyspace"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}
