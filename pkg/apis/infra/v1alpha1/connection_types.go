package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

/// RegistryConnectionName conditions
type ConnectionConditionType string

// RegistryConnectionName Condition
const (
	ConnectionReady ConnectionConditionType = "Ready"
	ConnectionInDb  ConnectionConditionType = "InDb"
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

//==============================================================================
// RegistryConnectionName
//==============================================================================

// +genclient
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +k8s:openapi-gen=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Provider",type="string",JSONPath=".spec.provider",description=""
// +kubebuilder:printcolumn:name="StorageSecret",type="string",JSONPath=".spec.secretName",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=connections,shortName=cred,singular=connection,categories={infra,modeld}
type Connection struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ConnectionSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status ConnectionStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// ConnectionList is a list of Connections.
type ConnectionList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Connection `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// ConnectionSpec defines the desired state of Connection
type ConnectionSpec struct {
	// The owner of the connection
	// default to the default tenant
	// +optional
	TenantRef *corev1.ObjectReference `json:"tenantRef" protobuf:"bytes,1,opt,name=tenantRef"`
	// The connection category
	// default for general
	// +optional
	Category *catalog.ConnectionCategory `json:"category" protobuf:"bytes,2,opt,name=category"`
	// Provider specifies the name api provider (E.g. aws)
	// required
	Provider catalog.ProviderName `json:"provider" protobuf:"bytes,3,opt,name=provider"`

	SecretName string `json:"secretName" protobuf:"bytes,4,opt,name=secretName"`
	// +optional
	Athena *AthenaSpec `json:"athena,omitempty" protobuf:"bytes,5,opt,name=athena"`
	// +optional
	AzureStorage *AzureStorageSpec `json:"azureStorage,omitempty" protobuf:"bytes,6,opt,name=azureStorage"`
	// +optional
	AliCloud *AliCloudSpec `json:"aliCloud,omitempty" protobuf:"bytes,7,opt,name=aliCloud"`
	// +optional
	BigQuery *BigQuerySpec `json:"bigQuery,omitempty" protobuf:"bytes,8,opt,name=bigQuery"`
	// +optional
	Bitbucket *BitbucketSpec `json:"bitbuckt,omitempty" protobuf:"bytes,9,opt,name=bitbucket"`
	// +optional
	Cassandra *CassandraSpec `json:"cassandra,omitempty" protobuf:"bytes,10,opt,name=cassandra"`
	// +optional
	DigitalOcean *DigitalOceanSpec `json:"digitalocean,omitempty" protobuf:"bytes,11,opt,name=digitalocean"`
	// +optional
	Smtp *SmtpSpec `json:"smtp,omitempty" protobuf:"bytes,12,opt,name=smtp"`
	// +optional
	Hetzner *HetznerSpec `json:"hetzner,omitempty" protobuf:"bytes,13,opt,name=hetzner"`
	// +optional
	ImageRegistry *ImageRegistrySpec `json:"imageRegistry,omitempty" protobuf:"bytes,14,opt,name=imageRegistry"`
	// +optional
	Github *GithubSpec `json:"github,omitempty" protobuf:"bytes,15,opt,name=github"`
	// +optional
	Gitlab *GitlabSpec `json:"gitlab,omitempty" protobuf:"bytes,16,opt,name=gitlab"`
	// +optional
	GcpStorage *GcpStorageSpec `json:"gcpstorage,omitempty" protobuf:"bytes,17,opt,name=gcpstorage"`
	// +optional
	Linode *LinodeSpec `json:"linode,omitempty" protobuf:"bytes,18,opt,name=linode"`
	// +optional
	MongoDb *MongoDbSpec `json:"mongodb,omitempty" protobuf:"bytes,19,opt,name=mongodb"`
	// +optional
	MySql *MySqlSpec `json:"mysql,omitempty" protobuf:"bytes,20,opt,name=mysql"`
	// +optional
	Minio *MinioSpec `json:"minio,omitempty" protobuf:"bytes,21,opt,name=minio"`
	// +optional
	MSSqlServer *MSSqlServerSpec `json:"mssqlserver,omitempty" protobuf:"bytes,22,opt,name=mssqlserver"`
	// +optional
	Odbc *OdbcSpec `json:"odbc,omitempty" protobuf:"bytes,23,opt,name=odbc"`
	// +optional
	Oracle *OracleSpec `json:"oracle,omitempty" protobuf:"bytes,24,opt,name=oracle"`
	// +optional
	Openstack *OpenstackSpec `json:"openstack,omitempty" protobuf:"bytes,25,opt,name=openstack"`
	// +optional
	Ovh *OvhSpec `json:"ovh,omitempty" protobuf:"bytes,26,opt,name=ovh"`
	// +optional
	PostgresSQL *PostgresSQLSpec `json:"postgres,omitempty" protobuf:"bytes,27,opt,name=postgres"`
	// +optional
	Presto *PrestoSpec `json:"presto,omitempty" protobuf:"bytes,28,opt,name=presto"`
	// +optional
	RedShift *RedShiftSpec `json:"redshift,omitempty" protobuf:"bytes,29,opt,name=redshift"`
	// +optional
	SnowFlake *SnowFlakeSpec `json:"snowflake,omitempty" protobuf:"bytes,30,opt,name=snowflake"`
	// +optional
	SqlLight *SqlLightSpec `json:"sqlLight,omitempty" protobuf:"bytes,31,opt,name=sqlLight"`
	// +optional
	Aws *AwsSpec `json:"aws,omitempty" protobuf:"bytes,32,opt,name=aws"`
	// +optional
	Slack *SlackSpec `json:"slack,omitempty" protobuf:"bytes,33,opt,name=slack"`
	// +optional
	Flock *FlockSpec `json:"flock,omitempty" protobuf:"bytes,34,opt,name=flock"`
	// +optional
	MSTeam *MSTeamSpec `json:"msteam,omitempty" protobuf:"bytes,35,opt,name=msteam"`
	// +optional
	MatterMost *MattermostSpec `json:"matterMost,omitempty" protobuf:"bytes,36,opt,name=matterMost"`
	// +optional
	Hipchat *HipchatSpec `json:"hipchat,omitempty" protobuf:"bytes,37,opt,name=hipchat"`
	// +optional
	Webhook *WebhookSpec `json:"webhook,omitempty" protobuf:"bytes,38,opt,name=webhook"`
	// Owner
	Owner string `json:"owner,omitempty" protobuf:"bytes,39,opt,name=owner"`
}

// ConnectionStatus is the observed state of a Connection
type ConnectionStatus struct {
	//+optional
	Conditions []ConnectionCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}

// =================== Definitions of spec files for each type

type AthenaSpec struct {
	Database         string `json:"hostName,omitempty" protobuf:"bytes,1,rep,name=hostName"`
	S3OutputLocation string `json:"s3OutputLocation,omitempty" protobuf:"bytes,2,rep,name=s3OutputLocation"`
	AccessKey        string `json:"accessKey,omitempty" protobuf:"bytes,3,rep,name=accessKey"`
	SecretKey        string `json:"secretKey,omitempty" protobuf:"bytes,4,rep,name=secretKey"`
}

type BigQuerySpec struct {
	ServiceAccount string `json:"serviceAccount,omitempty" protobuf:"bytes,1,rep,name=serviceAccount"`
}

type CassandraSpec struct {
	Hostname string `json:"hostName,omitempty" protobuf:"bytes,1,rep,name=hostName"`
	// default 9042
	Port     int32  `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	Database string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	Username string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	Password string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
}

type MongoDbSpec struct {
	Hostname string `json:"hostName,omitempty" protobuf:"bytes,1,rep,name=hostName"`
	// default 27017
	Port     int32  `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	Database string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	Username string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	Password string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
}

type MySqlSpec struct {
	Hostname string `json:"hostName,omitempty" protobuf:"bytes,1,rep,name=hostName"`
	// default 3306
	Port     int32  `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	Database string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	Username string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	Password string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
}

type OdbcSpec struct {
	ConnectionString string `json:"connectionString,omitempty" protobuf:"bytes,1,rep,name=conntectionString"`
}

type OracleSpec struct {
	Hostname string `json:"hostName,omitempty" protobuf:"bytes,1,rep,name=hostName"`
	// Default 1521
	Port        int32  `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	Database    string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	ServiceName string `json:"serviceName,omitempty" protobuf:"bytes,4,opt,name=serviceName"`
	Role        string `json:"role,omitempty" protobuf:"bytes,5,opt,name=role"`
	Username    string `json:"username,omitempty" protobuf:"bytes,6,opt,name=username"`
	Password    string `json:"password,omitempty" protobuf:"bytes,7,opt,name=password"`
}

type PostgresSQLSpec struct {
	Hostname string `json:"hostName,omitempty" protobuf:"bytes,1,rep,name=hostName"`
	//5432
	Port     int32  `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	Database string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	Username string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	Password string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
}

type PrestoSpec struct {
	Hostname string `json:"hostName,omitempty" protobuf:"bytes,1,rep,name=hostName"`
	// Default 8080
	Port     int32  `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	Catalog  string `json:"catalog,omitempty" protobuf:"bytes,3,opt,name=catalog"`
	Schema   string `json:"schema,omitempty" protobuf:"bytes,4,opt,name=schema"`
	Username string `json:"username,omitempty" protobuf:"bytes,5,opt,name=username"`
	Password string `json:"password,omitempty" protobuf:"bytes,6,opt,name=password"`
}

type RedShiftSpec struct {
	Hostname string `json:"hostName,omitempty" protobuf:"bytes,1,rep,name=hostName"`
	// Default 5439
	Port     int32  `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	Database string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	Username string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	Password string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
}

type SnowFlakeSpec struct {
	Account   string `json:"account,omitempty" protobuf:"bytes,1,rep,name=account"`
	Warehouse string `json:"warehouse,omitempty" protobuf:"bytes,2,rep,name=warehouse"`
	Database  string `json:"database,omitempty" protobuf:"bytes,3,rep,name=database"`
	Username  string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	Password  string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
}

type MSSqlServerSpec struct {
	Hostname string `json:"hostName,omitempty" protobuf:"bytes,1,rep,name=hostName"`
	// Default 1433
	Port     int32  `json:"port,omitempty" protobuf:"varint,2,rep,name=port"`
	Database string `json:"database,omitempty" protobuf:"bytes,3,rep,name=database"`
	Domain   string `json:"domain,omitempty" protobuf:"bytes,4,rep,name=domain"`
	Username string `json:"username,omitempty" protobuf:"bytes,5,opt,name=username"`
	Password string `json:"password,omitempty" protobuf:"bytes,6,opt,name=password"`
}

type SqlLightSpec struct {
	Filename string `json:"fileName,omitempty" protobuf:"bytes,1,rep,name=fileName"`
}

////////////////////////////
// Cloud connection
////////////////////////////
type AwsSpec struct {
	// Default zone.
	DefaultRegion string `json:"defaultRegion,omitempty" protobuf:"bytes,1,rep,name=defaultRegion"`
	// Aws Access key. This is an hidden fields which are stored in the secret
	AccessKey string `json:"accessKey,omitempty" protobuf:"bytes,2,rep,name=accessKey"`
	// Aws StorageSecret key. This is an hidden fields which are stored in the secret
	SecretKey string `json:"secretKey,omitempty" protobuf:"bytes,3,rep,name=secretKey"`
}

type AzureStorageSpec struct {
	StorageAccount string `json:"storageAccount,omitempty" protobuf:"bytes,1,rep,name=storageAccount"`
	// This is an hidden field which is stored in a p
	AccessKey string `json:"accessKey,omitempty" protobuf:"bytes,2,rep,name=accessKey"`
}

type GcpStorageSpec struct {
	KeyFile string `json:"keyFile,omitempty" protobuf:"bytes,1,rep,name=keyFile"`
	Project string `json:"project,omitempty" protobuf:"bytes,2,rep,name=project"`
}

type DigitalOceanSpec struct {
	// Token for digital ocean
	Token string `json:"token,omitempty" protobuf:"bytes,1,rep,name=token"`
	// Access Key for digital ocean spaces
	AccessKey string `json:"accessKey,omitempty" protobuf:"bytes,2,rep,name=accessKey"`
	// StorageSecret Key for digital ocean spaces
	SecretKey string `json:"secretKey,omitempty" protobuf:"bytes,3,rep,name=secretKey"`
	// Default digital ocean
	DefaultRegion string `json:"defaultRegion,omitempty" protobuf:"bytes,4,rep,name=defaultRegion"`
	// url or connection string
	Host string `json:"host,omitempty" protobuf:"bytes,5,rep,name=host"`
}

type MinioSpec struct {
	// Access key for minio
	AccessKey string `json:"accessKey,omitempty" protobuf:"bytes,1,rep,name=accessKey"`
	// StorageSecret key for minio
	SecretKey string `json:"secretKey,omitempty" protobuf:"bytes,2,rep,name=secretKey"`
	// Minio url connection.
	Host string `json:"host,omitempty" protobuf:"bytes,3,rep,name=host"`
}

type ImageRegistrySpec struct {
	// Hostname for the image registry
	Host string `json:"host,omitempty" protobuf:"bytes,1,rep,name=host"`
	// Username for image registry
	Username string `json:"username,omitempty" protobuf:"bytes,2,rep,name=username"`
	Password string `json:"password,omitempty" protobuf:"bytes,3,rep,name=password"`
}

type SlackSpec struct {
	WebHookUrl string `json:"webhookUrl,omitempty" protobuf:"bytes,1,rep,name=webhookUrl"`
	Channel    string `json:"channel,omitempty" protobuf:"bytes,2,rep,name=channel"`
	Username   string `json:"userName,omitempty" protobuf:"bytes,3,rep,name=userName"`
	Token      string `json:"token,omitempty" protobuf:"bytes,4,rep,name=token"`
}

type SmtpSpec struct {
	Host     string `json:"host,omitempty" protobuf:"bytes,1,rep,name=host"`
	Port     int32  `json:"port,omitempty" protobuf:"varint,2,rep,name=port"`
	Username string `json:"userName,omitempty" protobuf:"bytes,3,rep,name=userName"`
	Password string `json:"password,omitempty" protobuf:"bytes,4,rep,name=password"`
}

type GithubSpec struct {
	Token    string `json:"token,omitempty" protobuf:"bytes,1,rep,name=token"`
	Username string `json:"userName,omitempty" protobuf:"bytes,2,rep,name=userName"`
	SSH      string `json:"ssh,omitempty" protobuf:"bytes,3,rep,name=ssh"`
}

type BitbucketSpec struct {
	Token    string `json:"token,omitempty" protobuf:"bytes,1,rep,name=token"`
	Username string `json:"userName,omitempty" protobuf:"bytes,2,rep,name=userName"`
	SSH      string `json:"ssh,omitempty" protobuf:"bytes,3,rep,name=ssh"`
}

type AliCloudSpec struct {
	AccessKey string `json:"accessKey,omitempty" protobuf:"bytes,1,rep,name=accessKey"`
	SecretKey string `json:"secretKey,omitempty" protobuf:"bytes,2,rep,name=secretKey"`
	Region    string `json:"region,omitempty" protobuf:"bytes,3,rep,name=region"`
	Host      string `json:"host,omitempty" protobuf:"bytes,4,rep,name=host"`
}

type GitlabSpec struct {
	Token string `json:"token,omitempty" protobuf:"bytes,1,rep,name=token"`
	SSH   string `json:"ssh,omitempty" protobuf:"bytes,2,rep,name=ssh"`
}

type HetznerSpec struct {
	Token string `json:"token,omitempty" protobuf:"bytes,1,rep,name=token"`
	SSH   string `json:"ssh,omitempty" protobuf:"bytes,2,rep,name=ssh"`
}

type OpenstackSpec struct {
	Username   string `json:"userName,omitempty" protobuf:"bytes,1,rep,name=userName"`
	Tenantname string `json:"tenantName,omitempty" protobuf:"bytes,2,rep,name=tenantName"`
	Password   string `json:"password,omitempty" protobuf:"bytes,3,rep,name=password"`
	Authurl    string `json:"authUrl,omitempty" protobuf:"bytes,4,rep,name=authUrl"`
	Region     string `json:"region,omitempty" protobuf:"bytes,5,rep,name=region"`
}

type OvhSpec struct {
	Endpoint    string `json:"endpoint,omitempty" protobuf:"bytes,1,rep,name=endpoint"`
	Application string `json:"application,omitempty" protobuf:"bytes,2,rep,name=application"`
	Secret      string `json:"secret,omitempty" protobuf:"bytes,3,rep,name=secret"`
	ConsumerKey string `json:"consumerkey,omitempty" protobuf:"bytes,4,rep,name=consumerkey"`
}

type LinodeSpec struct {
	ApiKey string `json:"apikey,omitempty" protobuf:"bytes,1,rep,name=apikey"`
}

type FlockSpec struct {
	Url string `json:"url,omitempty" protobuf:"bytes,1,rep,name=url"`
}

type MSTeamSpec struct {
	Webhook string `json:"webhook,omitempty" protobuf:"bytes,1,rep,name=webhook"`
}

type MattermostSpec struct {
	Url      string `json:"url,omitempty" protobuf:"bytes,1,rep,name=url"`
	Channel  string `json:"channel,omitempty" protobuf:"bytes,2,rep,name=channel"`
	Username string `json:"username,omitempty" protobuf:"bytes,3,rep,name=username"`
}

type HipchatSpec struct {
	Url   string `json:"url,omitempty" protobuf:"bytes,1,rep,name=url"`
	Token string `json:"token,omitempty" protobuf:"bytes,2,rep,name=token"`
	Room  string `json:"room,omitempty" protobuf:"bytes,3,rep,name=room"`
}

type WebhookSpec struct {
	Url string `json:"url,omitempty" protobuf:"bytes,1,rep,name=url"`
}
