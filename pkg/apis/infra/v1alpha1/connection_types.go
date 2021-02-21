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
	Spec              ConnectionSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            ConnectionStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// ConnectionList is a list of Connections.
type ConnectionList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Connection `json:"items" protobuf:"bytes,2,opt,name=items"`
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
	// +kubebuilder:validation:Required
	Provider *catalog.ProviderName `json:"provider,omitempty" protobuf:"bytes,3,opt,name=provider"`
	// +kubebuilder:validation:Required
	SecretName *string `json:"secretName,omitempty" protobuf:"bytes,4,opt,name=secretName"`
	// +kubebuilder:validation:Optional
	// +optional
	Athena *AthenaSpec `json:"athena,omitempty" protobuf:"bytes,5,opt,name=athena"`
	// +kubebuilder:validation:Optional
	// +optional
	AzureStorage *AzureStorageSpec `json:"azureStorage,omitempty" protobuf:"bytes,6,opt,name=azureStorage"`
	// +kubebuilder:validation:Optional
	// +optional
	AliCloud *AliCloudSpec `json:"aliCloud,omitempty" protobuf:"bytes,7,opt,name=aliCloud"`
	// +kubebuilder:validation:Optional
	// +optional
	BigQuery *BigQuerySpec `json:"bigQuery,omitempty" protobuf:"bytes,8,opt,name=bigQuery"`
	// +kubebuilder:validation:Optional
	// +optional
	Bitbucket *BitbucketSpec `json:"bitbuckt,omitempty" protobuf:"bytes,9,opt,name=bitbucket"`
	// +kubebuilder:validation:Optional
	// +optional
	Cassandra *CassandraSpec `json:"cassandra,omitempty" protobuf:"bytes,10,opt,name=cassandra"`
	// +kubebuilder:validation:Optional
	// +optional
	DigitalOcean *DigitalOceanSpec `json:"digitalocean,omitempty" protobuf:"bytes,11,opt,name=digitalocean"`
	// +kubebuilder:validation:Optional
	// +optional
	Smtp *SmtpSpec `json:"smtp,omitempty" protobuf:"bytes,12,opt,name=smtp"`
	// +kubebuilder:validation:Optional
	// +optional
	Hetzner *HetznerSpec `json:"hetzner,omitempty" protobuf:"bytes,13,opt,name=hetzner"`
	// +kubebuilder:validation:Optional
	// +optional
	ImageRegistry *ImageRegistrySpec `json:"imageRegistry,omitempty" protobuf:"bytes,14,opt,name=imageRegistry"`
	// +kubebuilder:validation:Optional
	// +optional
	Github *GithubSpec `json:"github,omitempty" protobuf:"bytes,15,opt,name=github"`
	// +kubebuilder:validation:Optional
	// +optional
	Gitlab *GitlabSpec `json:"gitlab,omitempty" protobuf:"bytes,16,opt,name=gitlab"`
	// +kubebuilder:validation:Optional
	// +optional
	GcpStorage *GcpStorageSpec `json:"gcpstorage,omitempty" protobuf:"bytes,17,opt,name=gcpstorage"`
	// +kubebuilder:validation:Optional
	// +optional
	Linode *LinodeSpec `json:"linode,omitempty" protobuf:"bytes,18,opt,name=linode"`
	// +kubebuilder:validation:Optional
	// +optional
	MongoDb *MongoDbSpec `json:"mongodb,omitempty" protobuf:"bytes,19,opt,name=mongodb"`
	// +kubebuilder:validation:Optional
	// +optional
	MySql *MySqlSpec `json:"mysql,omitempty" protobuf:"bytes,20,opt,name=mysql"`
	// +kubebuilder:validation:Optional
	// +optional
	Minio *MinioSpec `json:"minio,omitempty" protobuf:"bytes,21,opt,name=minio"`
	// +kubebuilder:validation:Optional
	// +optional
	MSSqlServer *MSSqlServerSpec `json:"mssqlserver,omitempty" protobuf:"bytes,22,opt,name=mssqlserver"`
	// +kubebuilder:validation:Optional
	// +optional
	Odbc *OdbcSpec `json:"odbc,omitempty" protobuf:"bytes,23,opt,name=odbc"`
	// +kubebuilder:validation:Optional
	// +optional
	Oracle *OracleSpec `json:"oracle,omitempty" protobuf:"bytes,24,opt,name=oracle"`
	// +kubebuilder:validation:Optional
	// +optional
	Openstack *OpenstackSpec `json:"openstack,omitempty" protobuf:"bytes,25,opt,name=openstack"`
	// +kubebuilder:validation:Optional
	// +optional
	Ovh *OvhSpec `json:"ovh,omitempty" protobuf:"bytes,26,opt,name=ovh"`
	// +kubebuilder:validation:Optional
	// +optional
	PostgresSQL *PostgresSQLSpec `json:"postgres,omitempty" protobuf:"bytes,27,opt,name=postgres"`
	// +kubebuilder:validation:Optional
	// +optional
	Presto *PrestoSpec `json:"presto,omitempty" protobuf:"bytes,28,opt,name=presto"`
	// +kubebuilder:validation:Optional
	// +optional
	RedShift *RedShiftSpec `json:"redshift,omitempty" protobuf:"bytes,29,opt,name=redshift"`
	// +kubebuilder:validation:Optional
	// +optional
	SnowFlake *SnowFlakeSpec `json:"snowflake,omitempty" protobuf:"bytes,30,opt,name=snowflake"`
	// +kubebuilder:validation:Optional
	// +optional
	SqlLight *SqlLightSpec `json:"sqlLight,omitempty" protobuf:"bytes,31,opt,name=sqlLight"`
	// +kubebuilder:validation:Optional
	// +optional
	Aws *AwsSpec `json:"aws,omitempty" protobuf:"bytes,32,opt,name=aws"`
	// +kubebuilder:validation:Optional
	// +optional
	Slack *SlackSpec `json:"slack,omitempty" protobuf:"bytes,33,opt,name=slack"`
	// +kubebuilder:validation:Optional
	// +optional
	Flock *FlockSpec `json:"flock,omitempty" protobuf:"bytes,34,opt,name=flock"`
	// +kubebuilder:validation:Optional
	// +optional
	MSTeam *MSTeamSpec `json:"msteam,omitempty" protobuf:"bytes,35,opt,name=msteam"`
	// +kubebuilder:validation:Optional
	// +optional
	MatterMost *MattermostSpec `json:"matterMost,omitempty" protobuf:"bytes,36,opt,name=matterMost"`
	// +kubebuilder:validation:Optional
	// +optional
	Hipchat *HipchatSpec `json:"hipchat,omitempty" protobuf:"bytes,37,opt,name=hipchat"`
	// +kubebuilder:validation:Optional
	// +optional
	Webhook *WebhookSpec `json:"webhook,omitempty" protobuf:"bytes,38,opt,name=webhook"`
	// +kubebuilder:validation:Optional
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,39,opt,name=owner"`
}

// ConnectionStatus is the observed state of a Connection
type ConnectionStatus struct {
	//+optional
	Conditions []ConnectionCondition `json:"conditions,omitempty" protobuf:"bytes,1,opt,name=conditions"`
}

// =================== Definitions of spec files for each type

type AthenaSpec struct {
	// +kubebuilder:default=""
	Database *string `json:"hostName,omitempty" protobuf:"bytes,1,opt,name=hostName"`
	// +kubebuilder:default=""
	S3OutputLocation *string `json:"s3OutputLocation,omitempty" protobuf:"bytes,2,opt,name=s3OutputLocation"`
	// +kubebuilder:default=""
	AccessKey *string `json:"accessKey,omitempty" protobuf:"bytes,3,opt,name=accessKey"`
	// +kubebuilder:default=""
	SecretKey *string `json:"secretKey,omitempty" protobuf:"bytes,4,opt,name=secretKey"`
}

type BigQuerySpec struct {
	// +kubebuilder:default=""
	ServiceAccount *string `json:"serviceAccount,omitempty" protobuf:"bytes,1,opt,name=serviceAccount"`
}

type CassandraSpec struct {
	// +kubebuilder:default=""
	Hostname *string `json:"hostName,omitempty" protobuf:"bytes,1,opt,name=hostName"`
	// +kubebuilder:default= 9042
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
}

type MongoDbSpec struct {
	// +kubebuilder:default=""
	Hostname *string `json:"hostName,omitempty" protobuf:"bytes,1,opt,name=hostName"`
	// +kubebuilder:default=27017
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
}

type MySqlSpec struct {
	// +kubebuilder:default=""
	Hostname *string `json:"hostName,omitempty" protobuf:"bytes,1,opt,name=hostName"`
	// +kubebuilder:default = 3306
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
}

type OdbcSpec struct {
	// +kubebuilder:default=""
	ConnectionString *string `json:"connectionString,omitempty" protobuf:"bytes,1,opt,name=conntectionString"`
}

type OracleSpec struct {
	// +kubebuilder:default=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default = 1521
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default=""
	ServiceName *string `json:"serviceName,omitempty" protobuf:"bytes,4,opt,name=serviceName"`
	// +kubebuilder:default=""
	Role *string `json:"role,omitempty" protobuf:"bytes,5,opt,name=role"`
	// +kubebuilder:default=""
	Username *string `json:"username,omitempty" protobuf:"bytes,6,opt,name=username"`
	// +kubebuilder:default=""
	Password *string `json:"password,omitempty" protobuf:"bytes,7,opt,name=password"`
}

type PostgresSQLSpec struct {
	// +kubebuilder:default=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default = 5432
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
}

type PrestoSpec struct {
	// +kubebuilder:default=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default = 8080
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default=""
	Catalog *string `json:"catalog,omitempty" protobuf:"bytes,3,opt,name=catalog"`
	// +kubebuilder:default=""
	Schema *string `json:"schema,omitempty" protobuf:"bytes,4,opt,name=schema"`
	// +kubebuilder:default=""
	Username *string `json:"username,omitempty" protobuf:"bytes,5,opt,name=username"`
	// +kubebuilder:default=""
	Password *string `json:"password,omitempty" protobuf:"bytes,6,opt,name=password"`
}

type RedShiftSpec struct {
	// +kubebuilder:default=""
	Hostname *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default = 5439
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
}

type SnowFlakeSpec struct {
	// +kubebuilder:default=""
	Account *string `json:"account,omitempty" protobuf:"bytes,1,opt,name=account"`
	// +kubebuilder:default=""
	Warehouse *string `json:"warehouse,omitempty" protobuf:"bytes,2,opt,name=warehouse"`
	// +kubebuilder:default=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default=""
	Username *string `json:"username,omitempty" protobuf:"bytes,4,opt,name=username"`
	// +kubebuilder:default=""
	Password *string `json:"password,omitempty" protobuf:"bytes,5,opt,name=password"`
}

type MSSqlServerSpec struct {
	// +kubebuilder:default=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default = 1433
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default=""
	Database *string `json:"database,omitempty" protobuf:"bytes,3,opt,name=database"`
	// +kubebuilder:default=""
	Domain *string `json:"domain,omitempty" protobuf:"bytes,4,opt,name=domain"`
	// +kubebuilder:default=""
	Username *string `json:"username,omitempty" protobuf:"bytes,5,opt,name=username"`
	// +kubebuilder:default=""
	Password *string `json:"password,omitempty" protobuf:"bytes,6,opt,name=password"`
}

type SqlLightSpec struct {
	Filename *string `json:"fileName,omitempty" protobuf:"bytes,1,opt,name=fileName"`
}

////////////////////////////
// Cloud connection
////////////////////////////
type AwsSpec struct {
	// Default zone.
	// +kubebuilder:default=""
	DefaultRegion *string `json:"defaultRegion,omitempty" protobuf:"bytes,1,opt,name=defaultRegion"`
	// Aws Access key. This is an hidden fields which are stored in the secret
	// +kubebuilder:default=""
	AccessKey *string `json:"accessKey,omitempty" protobuf:"bytes,2,opt,name=accessKey"`
	// Aws StorageSecret key. This is an hidden fields which are stored in the secret
	// +kubebuilder:default=""
	SecretKey *string `json:"secretKey,omitempty" protobuf:"bytes,3,opt,name=secretKey"`
}

type AzureStorageSpec struct {
	// +kubebuilder:default=""
	StorageAccount *string `json:"storageAccount,omitempty" protobuf:"bytes,1,opt,name=storageAccount"`
	// This is an hidden field which is stored in a p
	// +kubebuilder:default=""
	AccessKey *string `json:"accessKey,omitempty" protobuf:"bytes,2,opt,name=accessKey"`
}

type GcpStorageSpec struct {
	// +kubebuilder:default=""
	KeyFile *string `json:"keyFile,omitempty" protobuf:"bytes,1,opt,name=keyFile"`
	// +kubebuilder:default=""
	Project *string `json:"project,omitempty" protobuf:"bytes,2,opt,name=project"`
}

type DigitalOceanSpec struct {
	// Token for digital ocean
	// +kubebuilder:default=""
	Token *string `json:"token,omitempty" protobuf:"bytes,1,opt,name=token"`
	// Access Key for digital ocean spaces
	// +kubebuilder:default=""
	AccessKey *string `json:"accessKey,omitempty" protobuf:"bytes,2,opt,name=accessKey"`
	// StorageSecret Key for digital ocean spaces
	// +kubebuilder:default=""
	SecretKey *string `json:"secretKey,omitempty" protobuf:"bytes,3,opt,name=secretKey"`
	// Default digital ocean
	// +kubebuilder:default=""
	DefaultRegion *string `json:"defaultRegion,omitempty" protobuf:"bytes,4,opt,name=defaultRegion"`
	// url or connection string
	// +kubebuilder:default=""
	Host *string `json:"host,omitempty" protobuf:"bytes,5,opt,name=host"`
}

type MinioSpec struct {
	// Access key for minio
	// +kubebuilder:default=""
	AccessKey *string `json:"accessKey,omitempty" protobuf:"bytes,1,opt,name=accessKey"`
	// StorageSecret key for minio
	// +kubebuilder:default=""
	SecretKey *string `json:"secretKey,omitempty" protobuf:"bytes,2,opt,name=secretKey"`
	// Minio url connection.
	// +kubebuilder:default=""
	Host *string `json:"host,omitempty" protobuf:"bytes,3,opt,name=host"`
}

type ImageRegistrySpec struct {
	// Hostname for the image registry
	// +kubebuilder:default=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// Username for image registry
	// +kubebuilder:default=""
	Username *string `json:"username,omitempty" protobuf:"bytes,2,opt,name=username"`
	// +kubebuilder:default=""
	Password *string `json:"password,omitempty" protobuf:"bytes,3,opt,name=password"`
}

type SlackSpec struct {
	// +kubebuilder:default=""
	WebHookUrl *string `json:"webhookUrl,omitempty" protobuf:"bytes,1,opt,name=webhookUrl"`
	// +kubebuilder:default=""
	Channel *string `json:"channel,omitempty" protobuf:"bytes,2,opt,name=channel"`
	// +kubebuilder:default=""
	Username *string `json:"userName,omitempty" protobuf:"bytes,3,opt,name=userName"`
	// +kubebuilder:default=""
	Token *string `json:"token,omitempty" protobuf:"bytes,4,opt,name=token"`
}

type SmtpSpec struct {
	// +kubebuilder:default=""
	Host *string `json:"host,omitempty" protobuf:"bytes,1,opt,name=host"`
	// +kubebuilder:default=25
	Port *int32 `json:"port,omitempty" protobuf:"varint,2,opt,name=port"`
	// +kubebuilder:default=""
	Username *string `json:"userName,omitempty" protobuf:"bytes,3,opt,name=userName"`
	// +kubebuilder:default=""
	Password *string `json:"password,omitempty" protobuf:"bytes,4,opt,name=password"`
}

type GithubSpec struct {
	// +kubebuilder:default=""
	Token *string `json:"token,omitempty" protobuf:"bytes,1,opt,name=token"`
	// +kubebuilder:default=""
	Username *string `json:"userName,omitempty" protobuf:"bytes,2,opt,name=userName"`
	// +kubebuilder:default=""
	SSH *string `json:"ssh,omitempty" protobuf:"bytes,3,opt,name=ssh"`
}

type BitbucketSpec struct {
	// +kubebuilder:default=""
	Token *string `json:"token,omitempty" protobuf:"bytes,1,opt,name=token"`
	// +kubebuilder:default=""
	Username *string `json:"userName,omitempty" protobuf:"bytes,2,opt,name=userName"`
	// +kubebuilder:default=""
	SSH *string `json:"ssh,omitempty" protobuf:"bytes,3,opt,name=ssh"`
}

type AliCloudSpec struct {
	// +kubebuilder:default=""
	AccessKey *string `json:"accessKey,omitempty" protobuf:"bytes,1,opt,name=accessKey"`
	// +kubebuilder:default=""
	SecretKey *string `json:"secretKey,omitempty" protobuf:"bytes,2,opt,name=secretKey"`
	// +kubebuilder:default=""
	Region *string `json:"region,omitempty" protobuf:"bytes,3,opt,name=region"`
	// +kubebuilder:default=""
	Host *string `json:"host,omitempty" protobuf:"bytes,4,opt,name=host"`
}

type GitlabSpec struct {
	// +kubebuilder:default=""
	Token *string `json:"token,omitempty" protobuf:"bytes,1,opt,name=token"`
	// +kubebuilder:default=""
	SSH *string `json:"ssh,omitempty" protobuf:"bytes,2,opt,name=ssh"`
}

type HetznerSpec struct {
	// +kubebuilder:default=""
	Token *string `json:"token,omitempty" protobuf:"bytes,1,opt,name=token"`
	// +kubebuilder:default=""
	SSH *string `json:"ssh,omitempty" protobuf:"bytes,2,opt,name=ssh"`
}

type OpenstackSpec struct {
	// +kubebuilder:default=""
	Username *string `json:"userName,omitempty" protobuf:"bytes,1,opt,name=userName"`
	// +kubebuilder:default=""
	Tenantname *string `json:"tenantName,omitempty" protobuf:"bytes,2,opt,name=tenantName"`
	// +kubebuilder:default=""
	Password *string `json:"password,omitempty" protobuf:"bytes,3,opt,name=password"`
	// +kubebuilder:default=""
	Authurl *string `json:"authUrl,omitempty" protobuf:"bytes,4,opt,name=authUrl"`
	// +kubebuilder:default=""
	Region *string `json:"region,omitempty" protobuf:"bytes,5,opt,name=region"`
}

type OvhSpec struct {
	// +kubebuilder:default=""
	Endpoint *string `json:"endpoint,omitempty" protobuf:"bytes,1,opt,name=endpoint"`
	// +kubebuilder:default=""
	Application *string `json:"application,omitempty" protobuf:"bytes,2,opt,name=application"`
	// +kubebuilder:default=""
	Secret *string `json:"secret,omitempty" protobuf:"bytes,3,opt,name=secret"`
	// +kubebuilder:default=""
	ConsumerKey *string `json:"consumerkey,omitempty" protobuf:"bytes,4,opt,name=consumerkey"`
}

type LinodeSpec struct {
	// +kubebuilder:default=""
	ApiKey *string `json:"apikey,omitempty" protobuf:"bytes,1,opt,name=apikey"`
}

type FlockSpec struct {
	// +kubebuilder:default=""
	Url *string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
}

type MSTeamSpec struct {
	// +kubebuilder:default=""
	Webhook *string `json:"webhook,omitempty" protobuf:"bytes,1,opt,name=webhook"`
}

type MattermostSpec struct {
	// +kubebuilder:default=""
	Url *string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
	// +kubebuilder:default=""
	Channel *string `json:"channel,omitempty" protobuf:"bytes,2,opt,name=channel"`
	// +kubebuilder:default=""
	Username *string `json:"username,omitempty" protobuf:"bytes,3,opt,name=username"`
}

type HipchatSpec struct {
	// +kubebuilder:default=""
	Url *string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
	// +kubebuilder:default=""
	Token *string `json:"token,omitempty" protobuf:"bytes,2,opt,name=token"`
	// +kubebuilder:default=""
	Room *string `json:"room,omitempty" protobuf:"bytes,3,opt,name=room"`
}

type WebhookSpec struct {
	// +kubebuilder:default=""
	Url *string `json:"url,omitempty" protobuf:"bytes,1,opt,name=url"`
}
