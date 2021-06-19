/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modeldapi/pkg/apis/infra"
	"github.com/metaprov/modeldapi/pkg/util"
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
	if *connection.Spec.SecretName != "" {
		secretName = *connection.Spec.SecretName
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
		fields[string(catalog.Username)] = *connection.Spec.AmazonAthena.Username
		fields[string(catalog.Password)] = *connection.Spec.AmazonAthena.Password
		fields[string(catalog.URL)] = *connection.Spec.AmazonAthena.URL
	case catalog.GcpBigQuery:
		fields[string(catalog.Username)] = *connection.Spec.GcpBigQuery.Username
		fields[string(catalog.Password)] = *connection.Spec.GcpBigQuery.Password
		fields[string(catalog.URL)] = *connection.Spec.GcpBigQuery.URL
	case catalog.ApacheCassandra:
		fields[string(catalog.Username)] = *connection.Spec.Cassandra.Username
		fields[string(catalog.Password)] = *connection.Spec.Cassandra.Password
		fields[string(catalog.URL)] = *connection.Spec.Cassandra.URL
	case catalog.AzureSqlDatabase:
		fields[string(catalog.Username)] = *connection.Spec.AzureSQLDatabase.Username
		fields[string(catalog.Password)] = *connection.Spec.AzureSQLDatabase.Password
		fields[string(catalog.URL)] = *connection.Spec.AzureSQLDatabase.URL
	case catalog.MongoDb:
		fields[string(catalog.Username)] = *connection.Spec.MongoDb.Username
		fields[string(catalog.Password)] = *connection.Spec.MongoDb.Password
		fields[string(catalog.URL)] = *connection.Spec.MongoDb.URL
	case catalog.MySql:
		fields[string(catalog.Username)] = *connection.Spec.MySql.Username
		fields[string(catalog.Password)] = *connection.Spec.MySql.Password
		fields[string(catalog.URL)] = *connection.Spec.MySql.URL
	case catalog.Odbc:
		fields[string(catalog.URL)] = *connection.Spec.Odbc.ConnectionString
	case catalog.Oracle:
		fields[string(catalog.Username)] = *connection.Spec.Oracle.Username
		fields[string(catalog.Password)] = *connection.Spec.Oracle.Password
		fields[string(catalog.URL)] = *connection.Spec.Oracle.URL
	case catalog.Postgres:
		fields[string(catalog.Username)] = *connection.Spec.PostgresSQL.Username
		fields[string(catalog.Password)] = *connection.Spec.PostgresSQL.Password
		fields[string(catalog.URL)] = *connection.Spec.PostgresSQL.URL
	case catalog.Presto:
		fields[string(catalog.Username)] = *connection.Spec.Presto.Username
		fields[string(catalog.Password)] = *connection.Spec.Presto.Password
		fields[string(catalog.URL)] = *connection.Spec.Presto.URL
	case catalog.AmazonRedshift:
		fields[string(catalog.Username)] = *connection.Spec.RedShift.Username
		fields[string(catalog.Password)] = *connection.Spec.RedShift.Password
		fields[string(catalog.URL)] = *connection.Spec.RedShift.URL
	case catalog.ApacheHive:
		fields[string(catalog.Username)] = *connection.Spec.Hive.Username
		fields[string(catalog.Password)] = *connection.Spec.Hive.Password
		fields[string(catalog.URL)] = *connection.Spec.Hive.URL
	case catalog.Snowflake:
		fields[string(catalog.Username)] = *connection.Spec.Snowflake.Username
		fields[string(catalog.Password)] = *connection.Spec.Snowflake.Password
		fields[string(catalog.URL)] = *connection.Spec.Snowflake.URL
	case catalog.Sybase:
		fields[string(catalog.Username)] = *connection.Spec.Sybase.Username
		fields[string(catalog.Password)] = *connection.Spec.Sybase.Password
		fields[string(catalog.URL)] = *connection.Spec.Sybase.URL
	case catalog.Vertica:
		fields[string(catalog.Username)] = *connection.Spec.Vertica.Username
		fields[string(catalog.Password)] = *connection.Spec.Vertica.Password
		fields[string(catalog.URL)] = *connection.Spec.Vertica.URL
	case catalog.CockrouchDB:
		fields[string(catalog.Username)] = *connection.Spec.CockroachDB.Username
		fields[string(catalog.Password)] = *connection.Spec.CockroachDB.Password
		fields[string(catalog.URL)] = *connection.Spec.CockroachDB.URL
	case catalog.ElasticSearch:
		fields[string(catalog.Username)] = *connection.Spec.ElasticSearch.Username
		fields[string(catalog.Password)] = *connection.Spec.ElasticSearch.Password
		fields[string(catalog.URL)] = *connection.Spec.ElasticSearch.URL
	case catalog.Informix:
		fields[string(catalog.Username)] = *connection.Spec.Informix.Username
		fields[string(catalog.Password)] = *connection.Spec.Informix.Password
		fields[string(catalog.URL)] = *connection.Spec.Informix.URL
	case catalog.SAPHana:
		fields[string(catalog.Username)] = *connection.Spec.SAPHana.Username
		fields[string(catalog.Password)] = *connection.Spec.SAPHana.Password
		fields[string(catalog.URL)] = *connection.Spec.SAPHana.URL
	case catalog.Teradata:
		fields[string(catalog.Username)] = *connection.Spec.Teradata.Username
		fields[string(catalog.Password)] = *connection.Spec.Teradata.Password
		fields[string(catalog.URL)] = *connection.Spec.Teradata.URL
	case catalog.GcpSpanner:
		fields[string(catalog.Username)] = *connection.Spec.GcpSpanner.Username
		fields[string(catalog.Password)] = *connection.Spec.GcpSpanner.Password
		fields[string(catalog.URL)] = *connection.Spec.GcpSpanner.URL
	case catalog.ApacheSpark:
		fields[string(catalog.Username)] = *connection.Spec.Spark.Username
		fields[string(catalog.Password)] = *connection.Spec.Spark.Password
		fields[string(catalog.URL)] = *connection.Spec.Spark.URL
	case catalog.MSSqlServer:
		fields[string(catalog.Username)] = *connection.Spec.MSSqlServer.Username
		fields[string(catalog.Password)] = *connection.Spec.MSSqlServer.Password
		fields[string(catalog.URL)] = *connection.Spec.MSSqlServer.URL
	case catalog.Clickhouse:
		fields[string(catalog.Username)] = *connection.Spec.Clickhouse.Username
		fields[string(catalog.Password)] = *connection.Spec.Clickhouse.Password
		fields[string(catalog.URL)] = *connection.Spec.Clickhouse.URL
	case catalog.Greenplum:
		fields[string(catalog.Username)] = *connection.Spec.Greenplum.Username
		fields[string(catalog.Password)] = *connection.Spec.Greenplum.Password
		fields[string(catalog.URL)] = *connection.Spec.Greenplum.URL
	case catalog.Couchbase:
		fields[string(catalog.Username)] = *connection.Spec.Couchbase.Username
		fields[string(catalog.Password)] = *connection.Spec.Couchbase.Password
		fields[string(catalog.URL)] = *connection.Spec.Couchbase.URL
	case catalog.Exasol:
		fields[string(catalog.Username)] = *connection.Spec.Exasol.Username
		fields[string(catalog.Password)] = *connection.Spec.Exasol.Password
		fields[string(catalog.URL)] = *connection.Spec.Exasol.URL
	// Cloud Storage
	case catalog.AliCloud:
		fields[string(catalog.AccessKey)] = *connection.Spec.AliCloud.AccessKey
		fields[string(catalog.SecretKey)] = *connection.Spec.AliCloud.SecretKey
	case catalog.Azure:
		fields[string(catalog.AccessKey)] = *connection.Spec.AzureStorage.AccessKey
		fields[string(catalog.Username)] = *connection.Spec.AzureStorage.StorageAccount
	case catalog.DigitalOcean:
		fields[string(catalog.AccessKey)] = *connection.Spec.DigitalOcean.AccessKey
		fields[string(catalog.SecretKey)] = *connection.Spec.DigitalOcean.SecretKey
		fields[string(catalog.Token)] = *connection.Spec.DigitalOcean.Token
	case catalog.Hetzner:
		fields[string(catalog.Token)] = *connection.Spec.Hetzner.Token
	case catalog.Linode:
		fields[string(catalog.Token)] = *connection.Spec.Linode.Token
	case catalog.Gcp:
		fields[string(catalog.KeyFile)] = *connection.Spec.GcpStorage.KeyFile
	case catalog.Minio:
		fields[string(catalog.AccessKey)] = *connection.Spec.Minio.AccessKey
		fields[string(catalog.SecretKey)] = *connection.Spec.Minio.SecretKey
	case catalog.Ovh:
		fields[string(catalog.SecretKey)] = *connection.Spec.Ovh.ConsumerKey
	case catalog.Aws:
		fields[string(catalog.AccessKey)] = *connection.Spec.Aws.AccessKey
		fields[string(catalog.SecretKey)] = *connection.Spec.Aws.SecretKey
	case catalog.Dockerhub:
		fields[string(catalog.Host)] = *connection.Spec.ImageRegistry.Host
		fields[string(catalog.Username)] = *connection.Spec.ImageRegistry.Username
		fields[string(catalog.Password)] = *connection.Spec.ImageRegistry.Password
	case catalog.ImageRegistry:
		fields[string(catalog.Host)] = *connection.Spec.ImageRegistry.Host
		fields[string(catalog.Username)] = *connection.Spec.ImageRegistry.Username
		fields[string(catalog.Password)] = *connection.Spec.ImageRegistry.Password
	// Git Repository
	case catalog.GitHub:
		fields[string(catalog.Token)] = *connection.Spec.Github.Token
	case catalog.Bitbucket:
		fields[string(catalog.Token)] = *connection.Spec.Bitbucket.Token
	case catalog.Gitlab:
		fields[string(catalog.Token)] = *connection.Spec.Gitlab.Token
	// Messaging
	case catalog.SmtpProvider:
		fields[string(catalog.Host)] = *connection.Spec.Smtp.Host
		fields[string(catalog.Port)] = util.ItoA(connection.Spec.Smtp.Port)
		fields[string(catalog.Username)] = *connection.Spec.Smtp.Username
		fields[string(catalog.Password)] = *connection.Spec.Smtp.Password
	case catalog.Slack:
		fields[string(catalog.Username)] = *connection.Spec.Slack.Username
		fields[string(catalog.Token)] = *connection.Spec.Slack.Token
	case catalog.Hipchat:
		fields[string(catalog.Token)] = *connection.Spec.Hipchat.Token
	case catalog.PageDuty:
		fields[string(catalog.ApiKey)] = *connection.Spec.PagerDuty.ApiKey
	case catalog.PushOver:
		fields[string(catalog.ApiKey)] = *connection.Spec.Pushover.ApiKey
	case catalog.OpsGenie:
		fields[string(catalog.ApiKey)] = *connection.Spec.Opsgenie.ApiKey
	case catalog.Webhook:
	case catalog.VictorOps:
		fields[string(catalog.ApiKey)] = *connection.Spec.VictorOps.ApiKey
	case catalog.MSTeam:
		fields[string(catalog.URL)] = *connection.Spec.MSTeam.Webhook
	case catalog.MatterMost:
		fields[string(catalog.URL)] = *connection.Spec.MatterMost.Url
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
	case catalog.Postgres:
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
		connection.Spec.Hive.Username = hiddenPtr
		connection.Spec.Hive.Password = hiddenPtr
		connection.Spec.Hive.URL = hiddenPtr
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
