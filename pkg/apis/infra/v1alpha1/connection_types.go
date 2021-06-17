package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	corev1 "k8s.io/api/core/v1"
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
	// Status of the condition, one of True, False, AutoScaler.
	Status corev1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// Connection define a connection to an external system (e.g. database, public cloud)
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Provider",type="string",JSONPath=".spec.provider",description=""
// +kubebuilder:printcolumn:name="Category",type="string",JSONPath=".spec.category",description=""
// +kubebuilder:printcolumn:name="Secret",type="string",JSONPath=".spec.secretName",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=connections,shortName=conn,singular=connection,categories={infra,modeld}
type Connection struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ConnectionSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            ConnectionStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ConnectionList is a list of Connections.
type ConnectionList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Connection `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ConnectionSpec defines the desired state of Connection
type ConnectionSpec struct {
	// TenantRef is the tenant of the connection
	// default to the default tenant
	// +kubebuilder:validation:Optional
	TenantRef *corev1.ObjectReference `json:"tenantRef" protobuf:"bytes,1,opt,name=tenantRef"`
	// The connection category
	// +kubebuilder:default:="general"
	// +kubebuilder:validation:Optional
	Category *catalog.ConnectionCategory `json:"category" protobuf:"bytes,2,opt,name=category"`
	// Provider specifies the name api provider (E.g. aws)
	// +kubebuilder:validation:Required
	Provider *catalog.ProviderName `json:"provider,omitempty" protobuf:"bytes,3,opt,name=provider"`
	// SecretName is a reference to a secret which holds the connection credentials
	// +kubebuilder:validation:Required
	SecretName *string `json:"secretName,omitempty" protobuf:"bytes,4,opt,name=secretName"`

	// Databases

	// +kubebuilder:validation:Optional
	AmazonAthena *AmazonAthenaSpec `json:"athena,omitempty" protobuf:"bytes,5,opt,name=athena"`

	// +kubebuilder:validation:Optional
	GcpBigQuery *GcpBigQuerySpec `json:"bigQuery,omitempty" protobuf:"bytes,6,opt,name=bigQuery"`

	// +kubebuilder:validation:Optional
	Cassandra *ApacheCassandraSpec `json:"cassandra,omitempty" protobuf:"bytes,7,opt,name=cassandra"`

	// +kubebuilder:validation:Optional
	AzureSQLDatabase *AzureSQLDatabaseSpec `json:"azureSqlDatabase,omitempty" protobuf:"bytes,8,opt,name=azureSqlDatabase"`

	// +kubebuilder:validation:Optional
	MongoDb *MongoDbSpec `json:"mongodb,omitempty" protobuf:"bytes,9,opt,name=mongodb"`

	// +kubebuilder:validation:Optional
	MySql *MySqlSpec `json:"mysql,omitempty" protobuf:"bytes,10,opt,name=mysql"`

	// +kubebuilder:validation:Optional
	Odbc *OdbcSpec `json:"odbc,omitempty" protobuf:"bytes,11,opt,name=odbc"`

	// +kubebuilder:validation:Optional
	Oracle *OracleSpec `json:"oracle,omitempty" protobuf:"bytes,12,opt,name=oracle"`

	// +kubebuilder:validation:Optional
	PostgresSQL *PostgresSQLSpec `json:"postgres,omitempty" protobuf:"bytes,13,opt,name=postgres"`

	// +kubebuilder:validation:Optional
	Presto *PrestoSpec `json:"presto,omitempty" protobuf:"bytes,14,opt,name=presto"`

	// +kubebuilder:validation:Optional
	RedShift *AmazonRedShiftSpec `json:"redshift,omitempty" protobuf:"bytes,15,opt,name=redshift"`

	// +kubebuilder:validation:Optional
	Hive *ApacheHiveSpec `json:"hive,omitempty" protobuf:"bytes,16,opt,name=hive"`

	// +kubebuilder:validation:Optional
	Snowflake *SnowflakeSpec `json:"snowflake,omitempty" protobuf:"bytes,17,opt,name=snowflake"`

	// +kubebuilder:validation:Optional
	Sybase *SybaseSpec `json:"sybase,omitempty" protobuf:"bytes,18,opt,name=sybase"`

	// +kubebuilder:validation:Optional
	Vertica *VerticaSpec `json:"vertica,omitempty" protobuf:"bytes,19,opt,name=vertica"`

	// +kubebuilder:validation:Optional
	CockroachDB *CockroachDBSpec `json:"cockroachDB,omitempty" protobuf:"bytes,20,opt,name=cockroachDB"`

	// +kubebuilder:validation:Optional
	ElasticSearch *ElasticSearchSpec `json:"elasticSearch,omitempty" protobuf:"bytes,21,opt,name=elasticSearch"`

	// +kubebuilder:validation:Optional
	Informix *InformixSpec `json:"informix,omitempty" protobuf:"bytes,22,opt,name=informix"`

	// +kubebuilder:validation:Optional
	SAPHana *SAPHanaSpec `json:"hana,omitempty" protobuf:"bytes,23,opt,name=hana"`

	// +kubebuilder:validation:Optional
	Teradata *TeradataSpec `json:"teradata,omitempty" protobuf:"bytes,24,opt,name=teradata"`

	// +kubebuilder:validation:Optional
	GcpSpanner *GcpSpannerSpec `json:"spanner,omitempty" protobuf:"bytes,25,opt,name=spanner"`

	// +kubebuilder:validation:Optional
	Spark *ApacheCassandraSpec `json:"spark,omitempty" protobuf:"bytes,26,opt,name=spark"`

	// +kubebuilder:validation:Optional
	MSSqlServer *MSSqlServerSpec `json:"mssqlserver,omitempty" protobuf:"bytes,27,opt,name=mssqlserver"`

	// +kubebuilder:validation:Optional
	Clickhouse *ClickHouseSpec `json:"clickhouse,omitempty" protobuf:"bytes,28,opt,name=clickhouse"`

	// +kubebuilder:validation:Optional
	Greenplum *GreenPlumSpec `json:"greenplum,omitempty" protobuf:"bytes,29,opt,name=greenplum"`

	// +kubebuilder:validation:Optional
	Couchbase *CouchbaseSpec `json:"couchbase,omitempty" protobuf:"bytes,30,opt,name=couchbase"`

	// +kubebuilder:validation:Optional
	Exasol *ExasolSpec `json:"exasol,omitempty" protobuf:"bytes,31,opt,name=exasol"`

	// +kubebuilder:validation:Optional
	SqlLite *SqliteSpec `json:"sqlite,omitempty" protobuf:"bytes,32,opt,name=sqlite"`

	//////////////////////////////////////
	// Cloud storage

	// +kubebuilder:validation:Optional
	AzureStorage *AzureStorageSpec `json:"azureStorage,omitempty" protobuf:"bytes,33,opt,name=azureStorage"`

	// +kubebuilder:validation:Optional
	AliCloud *AliCloudSpec `json:"aliCloud,omitempty" protobuf:"bytes,34,opt,name=aliCloud"`

	// +kubebuilder:validation:Optional
	Bitbucket *BitbucketSpec `json:"bitbuckt,omitempty" protobuf:"bytes,35,opt,name=bitbucket"`

	// +kubebuilder:validation:Optional
	DigitalOcean *DigitalOceanSpec `json:"digitalocean,omitempty" protobuf:"bytes,36,opt,name=digitalocean"`

	// +kubebuilder:validation:Optional
	Hetzner *HetznerSpec `json:"hetzner,omitempty" protobuf:"bytes,37,opt,name=hetzner"`

	// +kubebuilder:validation:Optional
	GcpStorage *GcpStorageSpec `json:"gcpstorage,omitempty" protobuf:"bytes,38,opt,name=gcpstorage"`

	// +kubebuilder:validation:Optional
	Linode *LinodeSpec `json:"linode,omitempty" protobuf:"bytes,39,opt,name=linode"`

	// +kubebuilder:validation:Optional
	Minio *MinioSpec `json:"minio,omitempty" protobuf:"bytes,40,opt,name=minio"`

	// +kubebuilder:validation:Optional
	Openstack *OpenstackSpec `json:"openstack,omitempty" protobuf:"bytes,41,opt,name=openstack"`

	// +kubebuilder:validation:Optional
	Ovh *OvhSpec `json:"ovh,omitempty" protobuf:"bytes,42,opt,name=ovh"`

	// +kubebuilder:validation:Optional
	Aws *AwsS3Spec `json:"aws,omitempty" protobuf:"bytes,43,opt,name=aws"`

	// +kubebuilder:validation:Optional
	Smtp *SmtpSpec `json:"smtp,omitempty" protobuf:"bytes,44,opt,name=smtp"`

	// +kubebuilder:validation:Optional
	ImageRegistry *ImageRegistrySpec `json:"imageRegistry,omitempty" protobuf:"bytes,45,opt,name=imageRegistry"`

	// +kubebuilder:validation:Optional
	Github *GithubSpec `json:"github,omitempty" protobuf:"bytes,46,opt,name=github"`

	// +kubebuilder:validation:Optional
	Gitlab *GitlabSpec `json:"gitlab,omitempty" protobuf:"bytes,47,opt,name=gitlab"`

	// +kubebuilder:validation:Optional
	Slack *SlackSpec `json:"slack,omitempty" protobuf:"bytes,48,opt,name=slack"`

	// +kubebuilder:validation:Optional
	Flock *FlockSpec `json:"flock,omitempty" protobuf:"bytes,49,opt,name=flock"`

	// +kubebuilder:validation:Optional
	MSTeam *MSTeamSpec `json:"msteam,omitempty" protobuf:"bytes,50,opt,name=msteam"`

	// +kubebuilder:validation:Optional
	MatterMost *MattermostSpec `json:"matterMost,omitempty" protobuf:"bytes,51,opt,name=matterMost"`

	// +kubebuilder:validation:Optional
	Hipchat *HipchatSpec `json:"hipchat,omitempty" protobuf:"bytes,52,opt,name=hipchat"`

	// +kubebuilder:validation:Optional
	Webhook *WebhookSpec `json:"webhook,omitempty" protobuf:"bytes,53,opt,name=webhook"`
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,54,opt,name=owner"`
}

// ConnectionStatus is the observed state of a Connection
type ConnectionStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`
	//+optional
	Conditions []ConnectionCondition `json:"conditions,omitempty" protobuf:"bytes,3,rep,name=conditions"`
}

// =================== Definitions of spec files for each type
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

// BigQuerySpec defines the connection to big query
type GcpBigQuerySpec struct {
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 9042
	// +kubebuilder:validation:Minimum=0
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
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,7,opt,name=url"`
}

// CassandraSpec defines the connection to cassandra
type ApacheCassandraSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:= 9042
	// +kubebuilder:validation:Minimum=0
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
	// +kubebuilder:validation:Minimum=0
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
	// +kubebuilder:validation:Minimum=0
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
	// +kubebuilder:validation:Minimum=0
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL override the other settings
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type PrestoSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=8080
	// +kubebuilder:validation:Minimum=0
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
	// +kubebuilder:validation:Minimum=0
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

type ApacheHiveSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=10000
	// +kubebuilder:validation:Minimum=0
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
	// +kubebuilder:validation:Minimum=0
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default:=""
	Schema *string `json:"schema,omitempty" protobuf:"bytes,4,opt,name=schema"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,5,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,6,opt,name=password"`
	// URL Override the other
	URL *string `json:"url,omitempty" protobuf:"bytes,7,opt,name=url"`
}

type SybaseSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=5000
	// +kubebuilder:validation:Minimum=0
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
	// +kubebuilder:validation:Minimum=0
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
	// +kubebuilder:validation:Minimum=0
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
	// +kubebuilder:validation:Minimum=0
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
	// +kubebuilder:validation:Minimum=0
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
	// +kubebuilder:validation:Minimum=0
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
	// +kubebuilder:validation:Minimum=0
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
	Project *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=5432
	// +kubebuilder:validation:Minimum=0
	Instance *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Prefix *string `json:"prefix,omitempty" protobuf:"bytes,3,opt,name=prefix"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	URL *string `json:"url,omitempty" protobuf:"bytes,6,opt,name=url"`
}

type ApacheSparkSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=5433
	// +kubebuilder:validation:Minimum=0
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
	// +kubebuilder:validation:Minimum=0
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
	// +kubebuilder:validation:Minimum=0
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
	// +kubebuilder:validation:Minimum=0
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
	// +kubebuilder:validation:Minimum=0
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
	// +kubebuilder:validation:Minimum=0
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
	// URL Override the other
	// +kubebuilder:default:=""
	URL *string `json:"url,omitempty" protobuf:"bytes,7,opt,name=url"`
}

type SqliteSpec struct {
	// +kubebuilder:default:="general"
	Filename *string `json:"fileName,omitempty" protobuf:"bytes,1,opt,name=fileName"`
}

////////////////////////////
// Cloud connection
////////////////////////////
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
	WebHookUrl *string `json:"webhookUrl,omitempty" protobuf:"bytes,1,opt,name=webhookUrl"`
	// +kubebuilder:default:=""
	Channel *string `json:"channel,omitempty" protobuf:"bytes,2,opt,name=channel"`
	// +kubebuilder:default:=""
	Username *string `json:"userName,omitempty" protobuf:"bytes,3,opt,name=userName"`
	// +kubebuilder:default:=""
	Token *string `json:"token,omitempty" protobuf:"bytes,4,opt,name=token"`
}

type SmtpSpec struct {
	// +kubebuilder:default:=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default:=25
	// +kubebuilder:validation:Minimum=0
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default:=""
	Username *string `json:"userName,omitempty" protobuf:"bytes,3,opt,name=userName"`
	// +kubebuilder:default:=""
	Password *string `json:"password,omitempty" protobuf:"bytes,4,opt,name=password"`
}

type GithubSpec struct {
	// +kubebuilder:default:=""
	Token *string `json:"token,omitempty" protobuf:"bytes,1,opt,name=token"`
	// +kubebuilder:default:=""
	Username *string `json:"userName,omitempty" protobuf:"bytes,2,opt,name=userName"`
	// +kubebuilder:default:=""
	SSH *string `json:"ssh,omitempty" protobuf:"bytes,3,opt,name=ssh"`
}

type BitbucketSpec struct {
	// +kubebuilder:default:=""
	Token *string `json:"token,omitempty" protobuf:"bytes,1,opt,name=token"`
	// +kubebuilder:default:=""
	Username *string `json:"userName,omitempty" protobuf:"bytes,2,opt,name=userName"`
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
	Username *string `json:"userName,omitempty" protobuf:"bytes,1,opt,name=userName"`
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
	ApiKey *string `json:"apikey,omitempty" protobuf:"bytes,1,opt,name=apikey"`
}

type FlockSpec struct {
	// +kubebuilder:default:=""
	Url *string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
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

type WebhookSpec struct {
	// +kubebuilder:default:=""
	Url *string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
}
