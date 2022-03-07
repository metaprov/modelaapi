/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"
	"strconv"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/infra"
	"github.com/metaprov/modelaapi/pkg/util"
	"gopkg.in/yaml.v2"
	corev1 "k8s.io/api/core/v1"
	v1 "k8s.io/api/core/v1"
	meta_v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

//==============================================================================
//  Core api objects
//==============================================================================

func (connection *Connection) Secret(content map[string]string) (*corev1.Secret, error) {
	secret := &corev1.Secret{
		ObjectMeta: metav1.ObjectMeta{
			Name:      connection.Name,
			Namespace: connection.Namespace,
		},
		StringData: content,
	}
	return secret, nil
}

//==============================================================================
//  Finalizer
//==============================================================================

func (connection *Connection) HasFinalizer() bool {
	return util.HasFin(&connection.ObjectMeta, infra.GroupName)
}
func (connection *Connection) AddFinalizer() { util.AddFin(&connection.ObjectMeta, infra.GroupName) }
func (connection *Connection) RemoveFinalizer() {
	util.RemoveFin(&connection.ObjectMeta, infra.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

func (connection *Connection) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(connection)
}

func (connection *Connection) RootUri() string {
	return fmt.Sprintf("tenants/%s/connections/%s", connection.Namespace, connection.Name)
}

func (connection *Connection) ManifestUri() string {
	return fmt.Sprintf("%s/%s-connection.yaml", connection.RootUri(), connection.Name)
}

// Merge or update condition
func (connection *Connection) CreateOrUpdateCond(cond ConnectionCondition) {
	i := connection.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		connection.Status.Conditions = append(connection.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := connection.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	connection.Status.Conditions[i] = current
}

func (connection *Connection) GetCondIdx(t ConnectionConditionType) int {
	for i, v := range connection.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (connection *Connection) GetCond(t ConnectionConditionType) ConnectionCondition {
	for _, v := range connection.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return ConnectionCondition{
		Type:    t,
		Status:  corev1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (connection *Connection) Key() string {
	return fmt.Sprintf("%s/%s/%s", "connections", connection.Namespace, connection.Name)
}

func ParseConnectionYaml(content []byte) (*Connection, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Connection)
	return r, nil
}

func (connection *Connection) IsReady() bool {
	return connection.GetCond(ConnectionReady).Status == corev1.ConditionTrue
}

func (connection *Connection) MarkReady() {
	connection.CreateOrUpdateCond(ConnectionCondition{
		Type:   ConnectionReady,
		Status: corev1.ConditionTrue,
	})
}

func (connection *Connection) MarkArchived() {
	connection.CreateOrUpdateCond(ConnectionCondition{
		Type:   ConnectionSaved,
		Status: corev1.ConditionTrue,
	})
}

// create a new secret based on secret fields.
// currently we place all the fields in the connection.
func (connection *Connection) CreateSecret() *v1.Secret {
	secretName := connection.Name
	if connection.Spec.SecretRef.Name != "" {
		secretName = *&connection.Spec.SecretRef.Name
	}
	result := &v1.Secret{
		ObjectMeta: meta_v1.ObjectMeta{
			Name:      secretName,
			Namespace: connection.Namespace,
		},
	}
	fields := make(map[string]string)
	switch *connection.Spec.Provider {

	case catalog.AmazonAthena:
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.AmazonAthena.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.AmazonAthena.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.AmazonAthena.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.AmazonAthena.URL
	case catalog.AmazonRedshift:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.RedShift.Hostname
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.RedShift.Port))
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.RedShift.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.RedShift.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.RedShift.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.RedShift.URL
	case catalog.ApacheDrill:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.ApacheDrill.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.ApacheDrill.Port))
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.ApacheDrill.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.ApacheDrill.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.ApacheDrill.URL
	case catalog.ApacheDruid:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.ApacheDruid.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.ApacheDruid.Port))
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.ApacheDruid.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.ApacheDruid.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.ApacheDruid.URL
	case catalog.ApacheHive:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.ApacheHive.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.ApacheHive.Port))
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.ApacheHive.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.ApacheHive.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.ApacheHive.URL
	case catalog.AzureSqlDatabase:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.AzureSQLDatabase.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.AzureSQLDatabase.Port))
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.AzureSQLDatabase.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.AzureSQLDatabase.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.AzureSQLDatabase.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.AzureSQLDatabase.URL
	case catalog.GcpBigQuery:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.GcpBigQuery.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.GcpBigQuery.Port))
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.GcpBigQuery.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.GcpBigQuery.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.GcpBigQuery.URL
	case catalog.ApacheCassandra:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.Cassandra.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.Cassandra.Port))
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Cassandra.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.Cassandra.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.Cassandra.URL
	case catalog.CockrouchDB:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.CockroachDB.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.CockroachDB.Port))
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.CockroachDB.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.CockroachDB.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.CockroachDB.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.CockroachDB.URL
	case catalog.Clickhouse:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.Clickhouse.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.Clickhouse.Port))
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.Clickhouse.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Clickhouse.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.Clickhouse.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.Clickhouse.URL
	case catalog.Couchbase:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.Couchbase.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.Couchbase.Port))
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.Couchbase.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Couchbase.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.Couchbase.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.Couchbase.URL
	case catalog.Dermio:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.Dremio.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.Dremio.Port))
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Dremio.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.Dremio.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.Dremio.URL
	case catalog.DB2:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.DB2.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.DB2.Port))
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.DB2.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.DB2.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.DB2.URL
	case catalog.ElasticSearch:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.ElasticSearch.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.ElasticSearch.Port))
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.ElasticSearch.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.ElasticSearch.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.ElasticSearch.URL
	case catalog.Exasol:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.Exasol.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.Exasol.Port))
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Exasol.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.Exasol.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.Exasol.URL
	case catalog.Greenplum:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.Greenplum.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.Greenplum.Port))
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.Greenplum.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Greenplum.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.Greenplum.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.Greenplum.URL
	case catalog.MongoDb:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.MongoDb.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.MongoDb.Port))
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.MongoDb.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.MongoDb.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.MongoDb.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.MongoDb.URL
	case catalog.MySql:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.MySql.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.MySql.Port))
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.MySql.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.MySql.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.MySql.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.MySql.URL
	case catalog.Odbc:
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.Odbc.ConnectionString
	case catalog.Oracle:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.Oracle.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.Oracle.Port))
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Oracle.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.Oracle.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.Oracle.URL
	case catalog.PostgresSQL:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.PostgresSQL.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.PostgresSQL.Port))
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.PostgresSQL.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.PostgresSQL.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.PostgresSQL.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.PostgresSQL.URL
	case catalog.Presto:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.Presto.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.Presto.Port))
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Presto.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.Presto.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.Presto.URL
	case catalog.Snowflake:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.Snowflake.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.Snowflake.Port))
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.Snowflake.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Snowflake.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.Snowflake.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.Snowflake.URL
	case catalog.Sybase:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.Sybase.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.Sybase.Port))
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.Sybase.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Sybase.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.Sybase.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.Sybase.URL
	case catalog.Vertica:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.Vertica.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.Vertica.Port))
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.Vertica.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Vertica.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.Vertica.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.Vertica.URL
	case catalog.Informix:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.Informix.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.Informix.Port))
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.Informix.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Informix.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.Informix.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.Informix.URL
	case catalog.SAPHana:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.SAPHana.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.SAPHana.Port))
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.SAPHana.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.SAPHana.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.SAPHana.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.SAPHana.URL
	case catalog.Teradata:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.Teradata.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.Teradata.Port))
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.Teradata.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Teradata.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.Teradata.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.Teradata.URL
	case catalog.GcpSpanner:
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.GcpSpanner.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.GcpSpanner.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.GcpSpanner.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.GcpSpanner.URL
	case catalog.ApacheSpark:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.Spark.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.Spark.Port))
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Spark.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.Spark.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.Spark.URL
	case catalog.MSSqlServer:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.MSSqlServer.Host
		fields[string(catalog.ApiKeyNamePort)] = strconv.Itoa(int(*connection.Spec.MSSqlServer.Port))
		fields[string(catalog.ApiKeyNameDatabase)] = *connection.Spec.MSSqlServer.Database
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.MSSqlServer.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.MSSqlServer.Password
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.MSSqlServer.URL
	// Cloud Storage
	case catalog.AliCloud:
		fields[string(catalog.ApiKeyNameAccessKey)] = *connection.Spec.AliCloud.AccessKey
		fields[string(catalog.ApiKeyNameSecretKey)] = *connection.Spec.AliCloud.SecretKey
	case catalog.Azure:
		fields[string(catalog.ApiKeyNameAccessKey)] = *connection.Spec.AzureStorage.AccessKey
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.AzureStorage.StorageAccount
	case catalog.DigitalOcean:
		fields[string(catalog.ApiKeyNameAccessKey)] = *connection.Spec.DigitalOcean.AccessKey
		fields[string(catalog.ApiKeyNameSecretKey)] = *connection.Spec.DigitalOcean.SecretKey
		fields[string(catalog.ApiKeyNameToken)] = *connection.Spec.DigitalOcean.Token
	case catalog.Hetzner:
		fields[string(catalog.ApiKeyNameToken)] = *connection.Spec.Hetzner.Token
	case catalog.Linode:
		fields[string(catalog.ApiKeyNameToken)] = *connection.Spec.Linode.Token
	case catalog.Gcp:
		fields[string(catalog.ApiKeyNameKeyFile)] = *connection.Spec.GcpStorage.KeyFile
	case catalog.Minio:
		fields[string(catalog.ApiKeyNameAccessKey)] = *connection.Spec.Minio.AccessKey
		fields[string(catalog.ApiKeyNameSecretKey)] = *connection.Spec.Minio.SecretKey
	case catalog.Ovh:
		fields[string(catalog.ApiKeyNameSecretKey)] = *connection.Spec.Ovh.ConsumerKey
	case catalog.Aws:
		fields[string(catalog.ApiKeyNameAccessKey)] = *connection.Spec.Aws.AccessKey
		fields[string(catalog.ApiKeyNameSecretKey)] = *connection.Spec.Aws.SecretKey
	case catalog.FTP:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.FTP.Host
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.FTP.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.FTP.Password
	case catalog.SFTP:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.SFTP.Host
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.SFTP.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.SFTP.Password
	case catalog.Dropbox:
		fields[string(catalog.ApiKeyNameToken)] = *connection.Spec.Dropbox.Token
	case catalog.Box:
		fields[string(catalog.ApiKeyNameToken)] = *connection.Spec.Box.Token

	case catalog.Dockerhub:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.ImageRegistry.Host
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.ImageRegistry.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.ImageRegistry.Password
	case catalog.ImageRegistry:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.ImageRegistry.Host
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.ImageRegistry.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.ImageRegistry.Password
	// Git Repository
	case catalog.GitHub:
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Github.Username
		fields[string(catalog.ApiKeyNameToken)] = *connection.Spec.Github.Token
	case catalog.Bitbucket:
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Bitbucket.Username
		fields[string(catalog.ApiKeyNameToken)] = *connection.Spec.Bitbucket.Token
	case catalog.Gitlab:
		fields[string(catalog.ApiKeyNameToken)] = *connection.Spec.Gitlab.Token
	// Messaging
	case catalog.SmtpProvider:
		fields[string(catalog.ApiKeyNameHost)] = *connection.Spec.Smtp.Host
		fields[string(catalog.ApiKeyNamePort)] = util.ItoA(connection.Spec.Smtp.Port)
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Smtp.Username
		fields[string(catalog.ApiKeyNamePassword)] = *connection.Spec.Smtp.Password
	case catalog.Slack:
		fields[string(catalog.ApiKeyNameUsername)] = *connection.Spec.Slack.Username
		fields[string(catalog.ApiKeyNameToken)] = *connection.Spec.Slack.Token
	case catalog.Hipchat:
		fields[string(catalog.ApiKeyNameToken)] = *connection.Spec.Hipchat.Token
	case catalog.PageDuty:
		fields[string(catalog.ApiKeyNameApiKey)] = *connection.Spec.PagerDuty.ApiKey
	case catalog.PushOver:
		fields[string(catalog.ApiKeyNameApiKey)] = *connection.Spec.Pushover.ApiKey
	case catalog.OpsGenie:
		fields[string(catalog.ApiKeyNameApiKey)] = *connection.Spec.Opsgenie.ApiKey
	case catalog.Webhook:
	case catalog.VictorOps:
		fields[string(catalog.ApiKeyNameApiKey)] = *connection.Spec.VictorOps.ApiKey
	case catalog.MSTeam:
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.MSTeam.Webhook
	case catalog.MatterMost:
		fields[string(catalog.ApiKeyNameURL)] = *connection.Spec.MatterMost.Url
	}
	result.StringData = fields
	return result

}

// ask the connection to mask secret fields based on the type of the connection
func (connection *Connection) MaskSecretFields() {
	hiddenPtr := util.StrPtr("[hidden]")
	switch *connection.Spec.Provider {
	case catalog.AmazonAthena:
		connection.Spec.AmazonAthena.Password = hiddenPtr
		connection.Spec.AmazonAthena.URL = hiddenPtr
	case catalog.GcpBigQuery:
		connection.Spec.GcpBigQuery.Password = hiddenPtr
		connection.Spec.GcpBigQuery.URL = hiddenPtr
	case catalog.ApacheCassandra:
		connection.Spec.Cassandra.Username = hiddenPtr
		connection.Spec.Cassandra.Password = hiddenPtr
		connection.Spec.Cassandra.URL = hiddenPtr
	case catalog.AzureSqlDatabase:
		connection.Spec.AzureSQLDatabase.Username = hiddenPtr
		connection.Spec.AzureSQLDatabase.Password = hiddenPtr
		connection.Spec.AzureSQLDatabase.URL = hiddenPtr
	case catalog.MongoDb:
		connection.Spec.MongoDb.Username = hiddenPtr
		connection.Spec.MongoDb.Password = hiddenPtr
		connection.Spec.MongoDb.URL = hiddenPtr
	case catalog.MySql:
		connection.Spec.MySql.Username = hiddenPtr
		connection.Spec.MySql.Password = hiddenPtr
		connection.Spec.MySql.URL = hiddenPtr
	case catalog.Odbc:
	case catalog.Oracle:
		connection.Spec.Oracle.Username = hiddenPtr
		connection.Spec.Oracle.Password = hiddenPtr
		connection.Spec.Oracle.URL = hiddenPtr
	case catalog.PostgresSQL:
		connection.Spec.PostgresSQL.Username = hiddenPtr
		connection.Spec.PostgresSQL.Password = hiddenPtr
		connection.Spec.PostgresSQL.URL = hiddenPtr
	case catalog.Presto:
		connection.Spec.Presto.Username = hiddenPtr
		connection.Spec.Presto.Password = hiddenPtr
		connection.Spec.Presto.URL = hiddenPtr
	case catalog.AmazonRedshift:
		connection.Spec.RedShift.Username = hiddenPtr
		connection.Spec.RedShift.Password = hiddenPtr
		connection.Spec.RedShift.URL = hiddenPtr
	case catalog.ApacheHive:
		connection.Spec.ApacheHive.Username = hiddenPtr
		connection.Spec.ApacheHive.Password = hiddenPtr
		connection.Spec.ApacheHive.URL = hiddenPtr
	case catalog.Snowflake:
		connection.Spec.Snowflake.Username = hiddenPtr
		connection.Spec.Snowflake.Password = hiddenPtr
		connection.Spec.Snowflake.URL = hiddenPtr
	case catalog.Sybase:
		connection.Spec.Sybase.Username = hiddenPtr
		connection.Spec.Sybase.Password = hiddenPtr
		connection.Spec.Sybase.URL = hiddenPtr
	case catalog.Vertica:
		connection.Spec.Vertica.Username = hiddenPtr
		connection.Spec.Vertica.Password = hiddenPtr
		connection.Spec.Vertica.URL = hiddenPtr
	case catalog.CockrouchDB:
		connection.Spec.CockroachDB.Username = hiddenPtr
		connection.Spec.CockroachDB.Password = hiddenPtr
		connection.Spec.CockroachDB.URL = hiddenPtr
	case catalog.ElasticSearch:
		connection.Spec.ElasticSearch.Username = hiddenPtr
		connection.Spec.ElasticSearch.Password = hiddenPtr
		connection.Spec.ElasticSearch.URL = hiddenPtr
	case catalog.Informix:
		connection.Spec.Informix.Username = hiddenPtr
		connection.Spec.Informix.Password = hiddenPtr
		connection.Spec.Informix.URL = hiddenPtr
	case catalog.SAPHana:
		connection.Spec.SAPHana.Username = hiddenPtr
		connection.Spec.SAPHana.Password = hiddenPtr
		connection.Spec.SAPHana.URL = hiddenPtr
	case catalog.Teradata:
		connection.Spec.Teradata.Username = hiddenPtr
		connection.Spec.Teradata.Password = hiddenPtr
		connection.Spec.Teradata.URL = hiddenPtr
	case catalog.GcpSpanner:
		connection.Spec.GcpSpanner.Username = hiddenPtr
		connection.Spec.GcpSpanner.Password = hiddenPtr
		connection.Spec.GcpSpanner.URL = hiddenPtr
	case catalog.ApacheSpark:
		connection.Spec.Spark.Username = hiddenPtr
		connection.Spec.Spark.Password = hiddenPtr
		connection.Spec.Spark.URL = hiddenPtr
	case catalog.MSSqlServer:
		connection.Spec.MSSqlServer.Username = hiddenPtr
		connection.Spec.MSSqlServer.Password = hiddenPtr
		connection.Spec.MSSqlServer.URL = hiddenPtr
	case catalog.Clickhouse:
		connection.Spec.Clickhouse.Username = hiddenPtr
		connection.Spec.Clickhouse.Password = hiddenPtr
		connection.Spec.Clickhouse.URL = hiddenPtr
	case catalog.Greenplum:
		connection.Spec.Greenplum.Username = hiddenPtr
		connection.Spec.Greenplum.Password = hiddenPtr
		connection.Spec.Greenplum.URL = hiddenPtr
	case catalog.Couchbase:
		connection.Spec.Couchbase.Username = hiddenPtr
		connection.Spec.Couchbase.Password = hiddenPtr
		connection.Spec.Couchbase.URL = hiddenPtr
	case catalog.Exasol:
		connection.Spec.Exasol.Username = hiddenPtr
		connection.Spec.Exasol.Password = hiddenPtr
		connection.Spec.Exasol.URL = hiddenPtr
	// Cloud Storage
	case catalog.AliCloud:
		connection.Spec.AliCloud.AccessKey = hiddenPtr
		connection.Spec.AliCloud.SecretKey = hiddenPtr
	case catalog.Azure:
		connection.Spec.AzureStorage.AccessKey = hiddenPtr
	case catalog.DigitalOcean:
		connection.Spec.DigitalOcean.AccessKey = hiddenPtr
		connection.Spec.DigitalOcean.SecretKey = hiddenPtr
		connection.Spec.DigitalOcean.Token = hiddenPtr
	case catalog.Hetzner:
		connection.Spec.Hetzner.Token = hiddenPtr
	case catalog.Linode:
		connection.Spec.Linode.Token = hiddenPtr
	case catalog.Gcp:
		connection.Spec.GcpStorage.KeyFile = hiddenPtr
	case catalog.Minio:
		connection.Spec.Minio.AccessKey = hiddenPtr
		connection.Spec.Minio.SecretKey = hiddenPtr
	case catalog.Ovh:
		connection.Spec.Ovh.ConsumerKey = hiddenPtr
	case catalog.Aws:
		connection.Spec.Aws.AccessKey = hiddenPtr
		connection.Spec.Aws.SecretKey = hiddenPtr
	// Docker Image Registry
	case catalog.Dockerhub:
		connection.Spec.ImageRegistry.Password = hiddenPtr
	case catalog.ImageRegistry:
		connection.Spec.ImageRegistry.Password = hiddenPtr
	// Git Repository
	case catalog.GitHub:
		connection.Spec.Github.Token = hiddenPtr
		connection.Spec.Github.SSH = hiddenPtr
	case catalog.Bitbucket:
		connection.Spec.Bitbucket.Token = hiddenPtr
		connection.Spec.Bitbucket.SSH = hiddenPtr
	case catalog.Gitlab:
		connection.Spec.Gitlab.Token = hiddenPtr
		connection.Spec.Gitlab.SSH = hiddenPtr
	// Messaging
	case catalog.SmtpProvider:
		connection.Spec.Smtp.Password = hiddenPtr
	case catalog.Slack:
		connection.Spec.Slack.Token = hiddenPtr
	case catalog.Hipchat:
		connection.Spec.Hipchat.Token = hiddenPtr
	case catalog.PageDuty:
		connection.Spec.PagerDuty.ApiKey = hiddenPtr
	case catalog.PushOver:
		connection.Spec.Pushover.ApiKey = hiddenPtr
	case catalog.OpsGenie:
		connection.Spec.Opsgenie.ApiKey = hiddenPtr
	case catalog.Webhook:
		connection.Spec.Webhook.Url = hiddenPtr
	case catalog.VictorOps:
		connection.Spec.VictorOps.ApiKey = hiddenPtr
	case catalog.MSTeam:
		connection.Spec.MSTeam.Webhook = hiddenPtr
	case catalog.MatterMost:
		connection.Spec.MatterMost.Url = hiddenPtr
	}

}

// Place the values back in the connection string from the secret
func (connection *Connection) UnmaskSecretFields(secret v1.Secret) {
	token := util.StrPtr(string(secret.Data[string(catalog.ApiKeyNameToken)]))
	apikey := util.StrPtr(string(secret.Data[string(catalog.ApiKeyNameApiKey)]))
	accessKey := util.StrPtr(string(secret.Data[string(catalog.ApiKeyNameAccessKey)]))
	secretKey := util.StrPtr(string(secret.Data[string(catalog.ApiKeyNameSecretKey)]))
	database := util.StrPtr(string(secret.Data[string(catalog.ApiKeyNameDatabase)]))
	username := util.StrPtr(string(secret.Data[string(catalog.ApiKeyNameUsername)]))
	password := util.StrPtr(string(secret.Data[string(catalog.ApiKeyNamePassword)]))
	url := util.StrPtr(string(secret.Data[string(catalog.ApiKeyNameURL)]))
	keyfile := util.StrPtr(string(secret.Data[string(catalog.ApiKeyNameKeyFile)]))
	webhook := util.StrPtr(string(secret.Data[string(catalog.ApiKeyNameURL)]))
	switch *connection.Spec.Provider {

	case catalog.AmazonAthena:
		connection.Spec.AmazonAthena.Database = database
		connection.Spec.AmazonAthena.Username = username
		connection.Spec.AmazonAthena.Password = password
		connection.Spec.AmazonAthena.URL = url
	case catalog.AmazonRedshift:
		connection.Spec.RedShift.Database = database
		connection.Spec.RedShift.Username = username
		connection.Spec.RedShift.Password = password
		connection.Spec.RedShift.URL = url
	case catalog.ApacheDrill:
		connection.Spec.ApacheDrill.Username = username
		connection.Spec.ApacheDrill.Password = password
		connection.Spec.ApacheDrill.URL = url
	case catalog.ApacheDruid:
		connection.Spec.ApacheDruid.Username = username
		connection.Spec.ApacheDruid.Password = password
		connection.Spec.ApacheDruid.URL = url
	case catalog.ApacheHive:
		connection.Spec.ApacheHive.Username = username
		connection.Spec.ApacheHive.Password = password
		connection.Spec.ApacheHive.URL = url
	case catalog.AzureSqlDatabase:
		connection.Spec.AzureSQLDatabase.Database = database
		connection.Spec.AzureSQLDatabase.Username = username
		connection.Spec.AzureSQLDatabase.Password = password
		connection.Spec.AzureSQLDatabase.URL = url
	case catalog.GcpBigQuery:
		connection.Spec.GcpBigQuery.Username = username
		connection.Spec.GcpBigQuery.Password = password
		connection.Spec.GcpBigQuery.URL = url
	case catalog.ApacheCassandra:
		connection.Spec.Cassandra.Username = username
		connection.Spec.Cassandra.Password = password
		connection.Spec.Cassandra.URL = url
	case catalog.CockrouchDB:
		connection.Spec.CockroachDB.Username = username
		connection.Spec.CockroachDB.Password = password
		connection.Spec.CockroachDB.URL = url
		connection.Spec.CockroachDB.Database = database
	case catalog.Clickhouse:
		connection.Spec.Clickhouse.Username = username
		connection.Spec.Clickhouse.Password = password
		connection.Spec.Clickhouse.URL = url
		connection.Spec.Clickhouse.Database = database
	case catalog.Couchbase:
		connection.Spec.Couchbase.Username = username
		connection.Spec.Couchbase.Password = password
		connection.Spec.Couchbase.URL = url
		connection.Spec.Couchbase.Database = database
	case catalog.Dermio:
		connection.Spec.Dremio.Username = username
		connection.Spec.Dremio.Password = password
		connection.Spec.Dremio.URL = url
	case catalog.DB2:
		connection.Spec.DB2.Username = username
		connection.Spec.DB2.Password = password
		connection.Spec.DB2.URL = url
	case catalog.ElasticSearch:
		connection.Spec.ElasticSearch.Username = username
		connection.Spec.ElasticSearch.Password = password
		connection.Spec.ElasticSearch.URL = url
	case catalog.Exasol:
		connection.Spec.Exasol.Username = username
		connection.Spec.Exasol.Password = password
		connection.Spec.Exasol.URL = url
	case catalog.Greenplum:
		connection.Spec.Greenplum.Username = username
		connection.Spec.Greenplum.Password = password
		connection.Spec.Greenplum.URL = url
		connection.Spec.Greenplum.Database = database
	case catalog.MongoDb:
		connection.Spec.Greenplum.Username = username
		connection.Spec.Greenplum.Password = password
		connection.Spec.Greenplum.URL = url
		connection.Spec.Greenplum.Database = database
	case catalog.MySql:
		connection.Spec.MySql.Username = username
		connection.Spec.MySql.Password = password
		connection.Spec.MySql.URL = url
		connection.Spec.MySql.Database = database
	case catalog.Odbc:
		connection.Spec.Odbc.ConnectionString = url
	case catalog.Oracle:
		connection.Spec.Oracle.Username = username
		connection.Spec.Oracle.Password = password
		connection.Spec.Oracle.URL = url
	case catalog.PostgresSQL:
		connection.Spec.PostgresSQL.Username = username
		connection.Spec.PostgresSQL.Password = password
		connection.Spec.PostgresSQL.URL = url
		connection.Spec.PostgresSQL.Database = database
	case catalog.Presto:
		connection.Spec.Presto.Username = username
		connection.Spec.Presto.Password = password
		connection.Spec.Presto.URL = url
	case catalog.Snowflake:
		connection.Spec.Snowflake.Username = username
		connection.Spec.Snowflake.Password = password
		connection.Spec.Snowflake.URL = url
	case catalog.Sybase:
		connection.Spec.Sybase.Username = username
		connection.Spec.Sybase.Password = password
		connection.Spec.Sybase.URL = url
	case catalog.Vertica:
		connection.Spec.Vertica.Username = username
		connection.Spec.Vertica.Password = password
		connection.Spec.Vertica.URL = url
	case catalog.Informix:
		connection.Spec.Vertica.Username = username
		connection.Spec.Vertica.Password = password
		connection.Spec.Vertica.URL = url
	case catalog.SAPHana:
		connection.Spec.SAPHana.Username = username
		connection.Spec.SAPHana.Password = password
		connection.Spec.SAPHana.URL = url
	case catalog.Teradata:
		connection.Spec.Teradata.Username = username
		connection.Spec.Teradata.Password = password
		connection.Spec.Teradata.URL = url
	case catalog.GcpSpanner:
		connection.Spec.GcpSpanner.Username = username
		connection.Spec.GcpSpanner.Password = password
		connection.Spec.GcpSpanner.URL = url
	case catalog.ApacheSpark:
		connection.Spec.Spark.Username = username
		connection.Spec.Spark.Password = password
		connection.Spec.Spark.URL = url
	case catalog.MSSqlServer:
		connection.Spec.MSSqlServer.Username = username
		connection.Spec.MSSqlServer.Password = password
		connection.Spec.MSSqlServer.URL = url
	case catalog.AliCloud:
		connection.Spec.AliCloud.AccessKey = accessKey
		connection.Spec.AliCloud.SecretKey = secretKey
	case catalog.Azure:
		connection.Spec.AzureStorage.AccessKey = accessKey
		connection.Spec.AzureStorage.StorageAccount = username
	case catalog.DigitalOcean:
		connection.Spec.DigitalOcean.AccessKey = accessKey
		connection.Spec.DigitalOcean.SecretKey = password
		connection.Spec.DigitalOcean.Token = token
	case catalog.Hetzner:
		connection.Spec.Hetzner.Token = token
	case catalog.Linode:
		connection.Spec.Linode.Token = token
	case catalog.Gcp:
		connection.Spec.GcpStorage.KeyFile = keyfile
	case catalog.Minio:
		connection.Spec.Minio.AccessKey = accessKey
		connection.Spec.Minio.SecretKey = secretKey
	case catalog.Ovh:
		connection.Spec.Ovh.ConsumerKey = secretKey
	case catalog.Aws:
		connection.Spec.Aws.AccessKey = accessKey
		connection.Spec.Aws.SecretKey = secretKey
	case catalog.FTP:
		connection.Spec.FTP.Password = password
		connection.Spec.FTP.Username = username
	case catalog.SFTP:
		connection.Spec.SFTP.Password = password
		connection.Spec.SFTP.Username = username
	case catalog.Dropbox:
		connection.Spec.Dropbox.Token = token
	case catalog.Box:
		connection.Spec.Box.Token = token
	case catalog.Dockerhub:
		connection.Spec.ImageRegistry.Password = password
		connection.Spec.ImageRegistry.Username = username
	// Git Repository
	case catalog.GitHub:
		connection.Spec.Github.Username = username
		connection.Spec.Github.Token = token
	case catalog.Bitbucket:
		connection.Spec.Bitbucket.Username = username
		connection.Spec.Bitbucket.Token = token
	case catalog.Gitlab:
		connection.Spec.Gitlab.Token = token
	// Messaging
	case catalog.SmtpProvider:
		connection.Spec.Smtp.Password = password
		connection.Spec.Smtp.Username = username
	case catalog.Slack:
		connection.Spec.Slack.Token = token
		connection.Spec.Slack.Username = username
	case catalog.Hipchat:
		connection.Spec.Hipchat.Token = token
	case catalog.PageDuty:
		connection.Spec.PagerDuty.ApiKey = apikey
	case catalog.PushOver:
		connection.Spec.Pushover.ApiKey = apikey
	case catalog.OpsGenie:
		connection.Spec.Opsgenie.ApiKey = apikey
	case catalog.Webhook:
		connection.Spec.Webhook.Token = token
	case catalog.VictorOps:
		connection.Spec.VictorOps.ApiKey = apikey
	case catalog.MSTeam:
		connection.Spec.MSTeam.Webhook = webhook
	}

}
