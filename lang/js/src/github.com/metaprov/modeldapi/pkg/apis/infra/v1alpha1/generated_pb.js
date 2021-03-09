// source: github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb = require('../../../../../../../github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb);
var k8s_io_api_core_v1_generated_pb = require('../../../../../../../k8s.io/api/core/v1/generated_pb.js');
goog.object.extend(proto, k8s_io_api_core_v1_generated_pb);
var k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb);
var k8s_io_apimachinery_pkg_runtime_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_runtime_generated_pb);
var k8s_io_apimachinery_pkg_runtime_schema_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_runtime_schema_generated_pb);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AccountStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLasttransitiontime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Account items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    role: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string entity = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.prototype.getEntity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.prototype.setEntity = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.prototype.clearEntity = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.prototype.hasEntity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string role = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.prototype.setRole = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.prototype.clearRole = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.prototype.hasRole = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.repeatedFields_ = [12,13,14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    tenantref: (f = msg.getTenantref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    groupname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    type: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    firstname: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    lastname: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    email: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    phone: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    admin: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    emailpassword: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
    resetpassword: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f,
    productbindingsList: jspb.Message.toObjectList(msg.getProductbindingsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.toObject, includeInstance),
    labbindingsList: jspb.Message.toObjectList(msg.getLabbindingsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.toObject, includeInstance),
    sitebindingsList: jspb.Message.toObjectList(msg.getSitebindingsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setTenantref(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAdmin(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmailpassword(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResetpassword(value);
      break;
    case 12:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.deserializeBinaryFromReader);
      msg.addProductbindings(value);
      break;
    case 13:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.deserializeBinaryFromReader);
      msg.addLabbindings(value);
      break;
    case 14:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.deserializeBinaryFromReader);
      msg.addSitebindings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenantref();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBool(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getProductbindingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.serializeBinaryToWriter
    );
  }
  f = message.getLabbindingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.serializeBinaryToWriter
    );
  }
  f = message.getSitebindingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.api.core.v1.ObjectReference tenantRef = 1;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getTenantref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 1));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setTenantref = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearTenantref = function() {
  return this.setTenantref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasTenantref = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string groupName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getGroupname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setGroupname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearGroupname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasGroupname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setType = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearType = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string username = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string firstName = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setFirstname = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearFirstname = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasFirstname = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string lastName = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setLastname = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearLastname = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasLastname = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string email = 7;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setEmail = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearEmail = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string phone = 8;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setPhone = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearPhone = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasPhone = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool admin = 9;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setAdmin = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearAdmin = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasAdmin = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool emailPassword = 10;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getEmailpassword = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setEmailpassword = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearEmailpassword = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasEmailpassword = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool resetPassword = 11;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getResetpassword = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setResetpassword = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearResetpassword = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasResetpassword = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated AccountRoleBinding productBindings = 12;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getProductbindingsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding, 12));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setProductbindingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.addProductbindings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearProductbindingsList = function() {
  return this.setProductbindingsList([]);
};


/**
 * repeated AccountRoleBinding labBindings = 13;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getLabbindingsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding, 13));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setLabbindingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.addLabbindings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearLabbindingsList = function() {
  return this.setLabbindingsList([]);
};


/**
 * repeated AccountRoleBinding siteBindings = 14;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getSitebindingsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding, 14));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setSitebindingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.addSitebindings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountRoleBinding, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearSitebindingsList = function() {
  return this.setSitebindingsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AccountCondition conditions = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    accesskey: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    secretkey: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    region: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    host: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesskey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretkey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string accessKey = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.getAccesskey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.setAccesskey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.clearAccesskey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.hasAccesskey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string secretKey = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.getSecretkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.setSecretkey = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.clearSecretkey = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.hasSecretkey = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string region = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.setRegion = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.clearRegion = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.hasRegion = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string host = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.setHost = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.clearHost = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.prototype.hasHost = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    s3outputlocation: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    accesskey: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    secretkey: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setS3outputlocation(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesskey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string hostName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.setHostname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.clearHostname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.hasHostname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string s3OutputLocation = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.getS3outputlocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.setS3outputlocation = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.clearS3outputlocation = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.hasS3outputlocation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string accessKey = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.getAccesskey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.setAccesskey = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.clearAccesskey = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.hasAccesskey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string secretKey = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.getSecretkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.setSecretkey = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.clearSecretkey = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.prototype.hasSecretkey = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultregion: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    accesskey: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    secretkey: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultregion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesskey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string defaultRegion = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.prototype.getDefaultregion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.prototype.setDefaultregion = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.prototype.clearDefaultregion = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.prototype.hasDefaultregion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string accessKey = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.prototype.getAccesskey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.prototype.setAccesskey = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.prototype.clearAccesskey = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.prototype.hasAccesskey = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string secretKey = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.prototype.getSecretkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.prototype.setSecretkey = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.prototype.clearSecretkey = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.prototype.hasSecretkey = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    storageaccount: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    accesskey: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStorageaccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesskey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string storageAccount = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.prototype.getStorageaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.prototype.setStorageaccount = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.prototype.clearStorageaccount = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.prototype.hasStorageaccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string accessKey = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.prototype.getAccesskey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.prototype.setAccesskey = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.prototype.clearAccesskey = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.prototype.hasAccesskey = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceaccount: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceaccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string serviceAccount = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec.prototype.getServiceaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec.prototype.setServiceaccount = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec.prototype.clearServiceaccount = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec.prototype.hasServiceaccount = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    ssh: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSsh(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.prototype.setToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.prototype.clearToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.prototype.hasToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string userName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string ssh = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.prototype.getSsh = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.prototype.setSsh = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.prototype.clearSsh = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.prototype.hasSsh = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    port: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    database: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    password: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.setHost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.clearHost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.hasHost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.clearPort = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.hasPort = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string database = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.setDatabase = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.clearDatabase = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.hasDatabase = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string username = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string password = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ConnectionSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ConnectionStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLasttransitiontime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string reason = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string message = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Connection items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    tenantref: (f = msg.getTenantref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    category: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    provider: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    secretname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    athena: (f = msg.getAthena()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.toObject(includeInstance, f),
    azurestorage: (f = msg.getAzurestorage()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.toObject(includeInstance, f),
    alicloud: (f = msg.getAlicloud()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.toObject(includeInstance, f),
    bigquery: (f = msg.getBigquery()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec.toObject(includeInstance, f),
    bitbucket: (f = msg.getBitbucket()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.toObject(includeInstance, f),
    cassandra: (f = msg.getCassandra()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.toObject(includeInstance, f),
    digitalocean: (f = msg.getDigitalocean()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.toObject(includeInstance, f),
    smtp: (f = msg.getSmtp()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.toObject(includeInstance, f),
    hetzner: (f = msg.getHetzner()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.toObject(includeInstance, f),
    imageregistry: (f = msg.getImageregistry()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.toObject(includeInstance, f),
    github: (f = msg.getGithub()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.toObject(includeInstance, f),
    gitlab: (f = msg.getGitlab()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.toObject(includeInstance, f),
    gcpstorage: (f = msg.getGcpstorage()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.toObject(includeInstance, f),
    linode: (f = msg.getLinode()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec.toObject(includeInstance, f),
    mongodb: (f = msg.getMongodb()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.toObject(includeInstance, f),
    mysql: (f = msg.getMysql()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.toObject(includeInstance, f),
    minio: (f = msg.getMinio()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.toObject(includeInstance, f),
    mssqlserver: (f = msg.getMssqlserver()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.toObject(includeInstance, f),
    odbc: (f = msg.getOdbc()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec.toObject(includeInstance, f),
    oracle: (f = msg.getOracle()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.toObject(includeInstance, f),
    openstack: (f = msg.getOpenstack()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.toObject(includeInstance, f),
    ovh: (f = msg.getOvh()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.toObject(includeInstance, f),
    postgres: (f = msg.getPostgres()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.toObject(includeInstance, f),
    presto: (f = msg.getPresto()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.toObject(includeInstance, f),
    redshift: (f = msg.getRedshift()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.toObject(includeInstance, f),
    snowflake: (f = msg.getSnowflake()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.toObject(includeInstance, f),
    sqllight: (f = msg.getSqllight()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec.toObject(includeInstance, f),
    aws: (f = msg.getAws()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.toObject(includeInstance, f),
    slack: (f = msg.getSlack()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.toObject(includeInstance, f),
    flock: (f = msg.getFlock()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec.toObject(includeInstance, f),
    msteam: (f = msg.getMsteam()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec.toObject(includeInstance, f),
    mattermost: (f = msg.getMattermost()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.toObject(includeInstance, f),
    hipchat: (f = msg.getHipchat()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.toObject(includeInstance, f),
    webhook: (f = msg.getWebhook()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec.toObject(includeInstance, f),
    owner: (f = jspb.Message.getField(msg, 39)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setTenantref(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvider(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretname(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.deserializeBinaryFromReader);
      msg.setAthena(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.deserializeBinaryFromReader);
      msg.setAzurestorage(value);
      break;
    case 7:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.deserializeBinaryFromReader);
      msg.setAlicloud(value);
      break;
    case 8:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec.deserializeBinaryFromReader);
      msg.setBigquery(value);
      break;
    case 9:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.deserializeBinaryFromReader);
      msg.setBitbucket(value);
      break;
    case 10:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.deserializeBinaryFromReader);
      msg.setCassandra(value);
      break;
    case 11:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.deserializeBinaryFromReader);
      msg.setDigitalocean(value);
      break;
    case 12:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.deserializeBinaryFromReader);
      msg.setSmtp(value);
      break;
    case 13:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.deserializeBinaryFromReader);
      msg.setHetzner(value);
      break;
    case 14:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.deserializeBinaryFromReader);
      msg.setImageregistry(value);
      break;
    case 15:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.deserializeBinaryFromReader);
      msg.setGithub(value);
      break;
    case 16:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.deserializeBinaryFromReader);
      msg.setGitlab(value);
      break;
    case 17:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.deserializeBinaryFromReader);
      msg.setGcpstorage(value);
      break;
    case 18:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec.deserializeBinaryFromReader);
      msg.setLinode(value);
      break;
    case 19:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.deserializeBinaryFromReader);
      msg.setMongodb(value);
      break;
    case 20:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.deserializeBinaryFromReader);
      msg.setMysql(value);
      break;
    case 21:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.deserializeBinaryFromReader);
      msg.setMinio(value);
      break;
    case 22:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.deserializeBinaryFromReader);
      msg.setMssqlserver(value);
      break;
    case 23:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec.deserializeBinaryFromReader);
      msg.setOdbc(value);
      break;
    case 24:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.deserializeBinaryFromReader);
      msg.setOracle(value);
      break;
    case 25:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.deserializeBinaryFromReader);
      msg.setOpenstack(value);
      break;
    case 26:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.deserializeBinaryFromReader);
      msg.setOvh(value);
      break;
    case 27:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.deserializeBinaryFromReader);
      msg.setPostgres(value);
      break;
    case 28:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.deserializeBinaryFromReader);
      msg.setPresto(value);
      break;
    case 29:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.deserializeBinaryFromReader);
      msg.setRedshift(value);
      break;
    case 30:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.deserializeBinaryFromReader);
      msg.setSnowflake(value);
      break;
    case 31:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec.deserializeBinaryFromReader);
      msg.setSqllight(value);
      break;
    case 32:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.deserializeBinaryFromReader);
      msg.setAws(value);
      break;
    case 33:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.deserializeBinaryFromReader);
      msg.setSlack(value);
      break;
    case 34:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec.deserializeBinaryFromReader);
      msg.setFlock(value);
      break;
    case 35:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec.deserializeBinaryFromReader);
      msg.setMsteam(value);
      break;
    case 36:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.deserializeBinaryFromReader);
      msg.setMattermost(value);
      break;
    case 37:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.deserializeBinaryFromReader);
      msg.setHipchat(value);
      break;
    case 38:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec.deserializeBinaryFromReader);
      msg.setWebhook(value);
      break;
    case 39:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenantref();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAthena();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec.serializeBinaryToWriter
    );
  }
  f = message.getAzurestorage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec.serializeBinaryToWriter
    );
  }
  f = message.getAlicloud();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec.serializeBinaryToWriter
    );
  }
  f = message.getBigquery();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec.serializeBinaryToWriter
    );
  }
  f = message.getBitbucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec.serializeBinaryToWriter
    );
  }
  f = message.getCassandra();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec.serializeBinaryToWriter
    );
  }
  f = message.getDigitalocean();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.serializeBinaryToWriter
    );
  }
  f = message.getSmtp();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.serializeBinaryToWriter
    );
  }
  f = message.getHetzner();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.serializeBinaryToWriter
    );
  }
  f = message.getImageregistry();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.serializeBinaryToWriter
    );
  }
  f = message.getGithub();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.serializeBinaryToWriter
    );
  }
  f = message.getGitlab();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.serializeBinaryToWriter
    );
  }
  f = message.getGcpstorage();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.serializeBinaryToWriter
    );
  }
  f = message.getLinode();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec.serializeBinaryToWriter
    );
  }
  f = message.getMongodb();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.serializeBinaryToWriter
    );
  }
  f = message.getMysql();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.serializeBinaryToWriter
    );
  }
  f = message.getMinio();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.serializeBinaryToWriter
    );
  }
  f = message.getMssqlserver();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.serializeBinaryToWriter
    );
  }
  f = message.getOdbc();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec.serializeBinaryToWriter
    );
  }
  f = message.getOracle();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.serializeBinaryToWriter
    );
  }
  f = message.getOpenstack();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.serializeBinaryToWriter
    );
  }
  f = message.getOvh();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.serializeBinaryToWriter
    );
  }
  f = message.getPostgres();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.serializeBinaryToWriter
    );
  }
  f = message.getPresto();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.serializeBinaryToWriter
    );
  }
  f = message.getRedshift();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.serializeBinaryToWriter
    );
  }
  f = message.getSnowflake();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.serializeBinaryToWriter
    );
  }
  f = message.getSqllight();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec.serializeBinaryToWriter
    );
  }
  f = message.getAws();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec.serializeBinaryToWriter
    );
  }
  f = message.getSlack();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.serializeBinaryToWriter
    );
  }
  f = message.getFlock();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec.serializeBinaryToWriter
    );
  }
  f = message.getMsteam();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec.serializeBinaryToWriter
    );
  }
  f = message.getMattermost();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.serializeBinaryToWriter
    );
  }
  f = message.getHipchat();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.serializeBinaryToWriter
    );
  }
  f = message.getWebhook();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 39));
  if (f != null) {
    writer.writeString(
      39,
      f
    );
  }
};


/**
 * optional k8s.io.api.core.v1.ObjectReference tenantRef = 1;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getTenantref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 1));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setTenantref = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearTenantref = function() {
  return this.setTenantref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasTenantref = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setCategory = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearCategory = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string provider = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getProvider = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setProvider = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearProvider = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasProvider = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string secretName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getSecretname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setSecretname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearSecretname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasSecretname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AthenaSpec athena = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getAthena = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec, 5));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AthenaSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setAthena = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearAthena = function() {
  return this.setAthena(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasAthena = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AzureStorageSpec azureStorage = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getAzurestorage = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec, 6));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AzureStorageSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setAzurestorage = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearAzurestorage = function() {
  return this.setAzurestorage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasAzurestorage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AliCloudSpec aliCloud = 7;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getAlicloud = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec, 7));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AliCloudSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setAlicloud = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearAlicloud = function() {
  return this.setAlicloud(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasAlicloud = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional BigQuerySpec bigQuery = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getBigquery = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec, 8));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BigQuerySpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setBigquery = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearBigquery = function() {
  return this.setBigquery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasBigquery = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional BitbucketSpec bitbucket = 9;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getBitbucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec, 9));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.BitbucketSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setBitbucket = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearBitbucket = function() {
  return this.setBitbucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasBitbucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional CassandraSpec cassandra = 10;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getCassandra = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec, 10));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.CassandraSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setCassandra = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearCassandra = function() {
  return this.setCassandra(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasCassandra = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional DigitalOceanSpec digitalocean = 11;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getDigitalocean = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec, 11));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setDigitalocean = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearDigitalocean = function() {
  return this.setDigitalocean(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasDigitalocean = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional SmtpSpec smtp = 12;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getSmtp = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec, 12));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setSmtp = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearSmtp = function() {
  return this.setSmtp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasSmtp = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional HetznerSpec hetzner = 13;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getHetzner = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec, 13));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setHetzner = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearHetzner = function() {
  return this.setHetzner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasHetzner = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ImageRegistrySpec imageRegistry = 14;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getImageregistry = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec, 14));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setImageregistry = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearImageregistry = function() {
  return this.setImageregistry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasImageregistry = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional GithubSpec github = 15;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getGithub = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec, 15));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setGithub = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearGithub = function() {
  return this.setGithub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasGithub = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional GitlabSpec gitlab = 16;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getGitlab = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec, 16));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setGitlab = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearGitlab = function() {
  return this.setGitlab(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasGitlab = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional GcpStorageSpec gcpstorage = 17;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getGcpstorage = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec, 17));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setGcpstorage = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearGcpstorage = function() {
  return this.setGcpstorage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasGcpstorage = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional LinodeSpec linode = 18;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getLinode = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec, 18));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setLinode = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearLinode = function() {
  return this.setLinode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasLinode = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional MongoDbSpec mongodb = 19;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getMongodb = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec, 19));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setMongodb = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearMongodb = function() {
  return this.setMongodb(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasMongodb = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional MySqlSpec mysql = 20;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getMysql = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec, 20));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setMysql = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearMysql = function() {
  return this.setMysql(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasMysql = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional MinioSpec minio = 21;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getMinio = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec, 21));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setMinio = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearMinio = function() {
  return this.setMinio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasMinio = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional MSSqlServerSpec mssqlserver = 22;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getMssqlserver = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec, 22));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setMssqlserver = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearMssqlserver = function() {
  return this.setMssqlserver(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasMssqlserver = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional OdbcSpec odbc = 23;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getOdbc = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec, 23));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setOdbc = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearOdbc = function() {
  return this.setOdbc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasOdbc = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional OracleSpec oracle = 24;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getOracle = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec, 24));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setOracle = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearOracle = function() {
  return this.setOracle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasOracle = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional OpenstackSpec openstack = 25;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getOpenstack = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec, 25));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setOpenstack = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearOpenstack = function() {
  return this.setOpenstack(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasOpenstack = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional OvhSpec ovh = 26;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getOvh = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec, 26));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setOvh = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearOvh = function() {
  return this.setOvh(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasOvh = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional PostgresSQLSpec postgres = 27;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getPostgres = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec, 27));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setPostgres = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearPostgres = function() {
  return this.setPostgres(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasPostgres = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional PrestoSpec presto = 28;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getPresto = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec, 28));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setPresto = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearPresto = function() {
  return this.setPresto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasPresto = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional RedShiftSpec redshift = 29;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getRedshift = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec, 29));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setRedshift = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearRedshift = function() {
  return this.setRedshift(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasRedshift = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional SnowFlakeSpec snowflake = 30;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getSnowflake = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec, 30));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setSnowflake = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearSnowflake = function() {
  return this.setSnowflake(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasSnowflake = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional SqlLightSpec sqlLight = 31;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getSqllight = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec, 31));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setSqllight = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearSqllight = function() {
  return this.setSqllight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasSqllight = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional AwsSpec aws = 32;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getAws = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec, 32));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.AwsSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setAws = function(value) {
  return jspb.Message.setWrapperField(this, 32, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearAws = function() {
  return this.setAws(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasAws = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional SlackSpec slack = 33;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getSlack = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec, 33));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setSlack = function(value) {
  return jspb.Message.setWrapperField(this, 33, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearSlack = function() {
  return this.setSlack(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasSlack = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional FlockSpec flock = 34;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getFlock = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec, 34));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setFlock = function(value) {
  return jspb.Message.setWrapperField(this, 34, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearFlock = function() {
  return this.setFlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasFlock = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional MSTeamSpec msteam = 35;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getMsteam = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec, 35));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setMsteam = function(value) {
  return jspb.Message.setWrapperField(this, 35, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearMsteam = function() {
  return this.setMsteam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasMsteam = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional MattermostSpec matterMost = 36;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getMattermost = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec, 36));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setMattermost = function(value) {
  return jspb.Message.setWrapperField(this, 36, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearMattermost = function() {
  return this.setMattermost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasMattermost = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional HipchatSpec hipchat = 37;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getHipchat = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec, 37));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setHipchat = function(value) {
  return jspb.Message.setWrapperField(this, 37, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearHipchat = function() {
  return this.setHipchat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasHipchat = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional WebhookSpec webhook = 38;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getWebhook = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec, 38));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setWebhook = function(value) {
  return jspb.Message.setWrapperField(this, 38, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearWebhook = function() {
  return this.setWebhook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasWebhook = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional string owner = 39;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 39, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 39, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 39, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 39) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ConnectionCondition conditions = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    accesskey: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    secretkey: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    defaultregion: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    host: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesskey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretkey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultregion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.setToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.clearToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.hasToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string accessKey = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.getAccesskey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.setAccesskey = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.clearAccesskey = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.hasAccesskey = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string secretKey = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.getSecretkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.setSecretkey = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.clearSecretkey = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.hasSecretkey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string defaultRegion = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.getDefaultregion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.setDefaultregion = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.clearDefaultregion = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.hasDefaultregion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string host = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.setHost = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.clearHost = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.DigitalOceanSpec.prototype.hasHost = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.FlockSpec.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyfile: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    project: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyfile(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string keyFile = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.prototype.getKeyfile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.prototype.setKeyfile = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.prototype.clearKeyfile = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.prototype.hasKeyfile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string project = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.prototype.setProject = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.prototype.clearProject = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GcpStorageSpec.prototype.hasProject = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    ssh: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSsh(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.prototype.setToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.prototype.clearToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.prototype.hasToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string userName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string ssh = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.prototype.getSsh = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.prototype.setSsh = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.prototype.clearSsh = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GithubSpec.prototype.hasSsh = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    ssh: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSsh(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.prototype.setToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.prototype.clearToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.prototype.hasToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string ssh = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.prototype.getSsh = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.prototype.setSsh = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.prototype.clearSsh = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.GitlabSpec.prototype.hasSsh = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    ssh: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSsh(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.prototype.setToken = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.prototype.clearToken = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.prototype.hasToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string ssh = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.prototype.getSsh = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.prototype.setSsh = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.prototype.clearSsh = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HetznerSpec.prototype.hasSsh = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    token: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    room: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.prototype.setToken = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.prototype.clearToken = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.prototype.hasToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string room = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.prototype.getRoom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.prototype.setRoom = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.prototype.clearRoom = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.HipchatSpec.prototype.hasRoom = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    password: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.prototype.setHost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.prototype.clearHost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.prototype.hasHost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ImageRegistrySpec.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LabSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LabStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLasttransitiontime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Lab items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    tenantref: (f = msg.getTenantref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    quotaspec: (f = msg.getQuotaspec()) && k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec.toObject(includeInstance, f),
    limitrangespec: (f = msg.getLimitrangespec()) && k8s_io_api_core_v1_generated_pb.LimitRangeSpec.toObject(includeInstance, f),
    clustername: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setTenantref(value);
      break;
    case 3:
      var value = new k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec.deserializeBinaryFromReader);
      msg.setQuotaspec(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.LimitRangeSpec;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.LimitRangeSpec.deserializeBinaryFromReader);
      msg.setLimitrangespec(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClustername(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTenantref();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getQuotaspec();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec.serializeBinaryToWriter
    );
  }
  f = message.getLimitrangespec();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.LimitRangeSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference tenantRef = 2;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.getTenantref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 2));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.setTenantref = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.clearTenantref = function() {
  return this.setTenantref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.hasTenantref = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.api.core.v1.ResourceQuotaSpec quotaSpec = 3;
 * @return {?proto.k8s.io.api.core.v1.ResourceQuotaSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.getQuotaspec = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ResourceQuotaSpec} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec, 3));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ResourceQuotaSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.setQuotaspec = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.clearQuotaspec = function() {
  return this.setQuotaspec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.hasQuotaspec = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.LimitRangeSpec limitRangeSpec = 4;
 * @return {?proto.k8s.io.api.core.v1.LimitRangeSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.getLimitrangespec = function() {
  return /** @type{?proto.k8s.io.api.core.v1.LimitRangeSpec} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.LimitRangeSpec, 4));
};


/**
 * @param {?proto.k8s.io.api.core.v1.LimitRangeSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.setLimitrangespec = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.clearLimitrangespec = function() {
  return this.setLimitrangespec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.hasLimitrangespec = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string clusterName = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.getClustername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.setClustername = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.clearClustername = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.hasClustername = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string owner = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LabCondition conditions = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LicenseSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LicenseStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLasttransitiontime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated License items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    tenantref: (f = msg.getTenantref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    secretname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    email: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    trialstart: (f = msg.getTrialstart()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    trialend: (f = msg.getTrialend()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    maxproducts: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    maxtrainers: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    maxservers: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    maxusers: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    maxdataplanes: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    forecast: (f = jspb.Message.getBooleanField(msg, 12)) == null ? undefined : f,
    nlp: (f = jspb.Message.getBooleanField(msg, 13)) == null ? undefined : f,
    vision: (f = jspb.Message.getBooleanField(msg, 14)) == null ? undefined : f,
    chatbot: (f = jspb.Message.getBooleanField(msg, 15)) == null ? undefined : f,
    productname: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f,
    pricename: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f,
    expireat: (f = msg.getExpireat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    notifiername: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setTenantref(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setTrialstart(value);
      break;
    case 6:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setTrialend(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxproducts(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxtrainers(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxservers(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxusers(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxdataplanes(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForecast(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNlp(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVision(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setChatbot(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductname(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setPricename(value);
      break;
    case 18:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setExpireat(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotifiername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenantref();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTrialstart();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getTrialend();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBool(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeBool(
      14,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBool(
      15,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeString(
      16,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getExpireat();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeString(
      19,
      f
    );
  }
};


/**
 * optional k8s.io.api.core.v1.ObjectReference tenantRef = 1;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getTenantref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 1));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setTenantref = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearTenantref = function() {
  return this.setTenantref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasTenantref = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string secretName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getSecretname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setSecretname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearSecretname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasSecretname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string owner = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setEmail = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearEmail = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time trialStart = 5;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getTrialstart = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 5));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setTrialstart = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearTrialstart = function() {
  return this.setTrialstart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasTrialstart = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time trialEnd = 6;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getTrialend = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 6));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setTrialend = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearTrialend = function() {
  return this.setTrialend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasTrialend = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 maxProducts = 7;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getMaxproducts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setMaxproducts = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearMaxproducts = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasMaxproducts = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 maxTrainers = 8;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getMaxtrainers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setMaxtrainers = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearMaxtrainers = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasMaxtrainers = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 maxServers = 9;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getMaxservers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setMaxservers = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearMaxservers = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasMaxservers = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 maxUsers = 10;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getMaxusers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setMaxusers = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearMaxusers = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasMaxusers = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int32 maxDataPlanes = 11;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getMaxdataplanes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setMaxdataplanes = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearMaxdataplanes = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasMaxdataplanes = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool forecast = 12;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getForecast = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setForecast = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearForecast = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasForecast = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool nlp = 13;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getNlp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setNlp = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearNlp = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasNlp = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool vision = 14;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getVision = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setVision = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearVision = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasVision = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool chatbot = 15;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getChatbot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setChatbot = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearChatbot = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasChatbot = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string productName = 16;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getProductname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setProductname = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearProductname = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasProductname = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string priceName = 17;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getPricename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setPricename = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearPricename = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasPricename = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time expireAt = 18;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getExpireat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 18));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setExpireat = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearExpireat = function() {
  return this.setExpireat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasExpireat = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string notifierName = 19;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getNotifiername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setNotifiername = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearNotifiername = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasNotifiername = function() {
  return jspb.Message.getField(this, 19) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LicenseCondition conditions = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    apikey: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApikey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string apikey = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec.prototype.getApikey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec.prototype.setApikey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec.prototype.clearApikey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.LinodeSpec.prototype.hasApikey = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    port: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    database: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    domain: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    password: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.setHost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.clearHost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.hasHost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.clearPort = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.hasPort = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string database = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.setDatabase = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.clearDatabase = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.hasDatabase = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string domain = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.setDomain = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.clearDomain = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.hasDomain = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string username = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string password = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSSqlServerSpec.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    webhook: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebhook(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string webhook = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec.prototype.getWebhook = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec.prototype.setWebhook = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec.prototype.clearWebhook = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MSTeamSpec.prototype.hasWebhook = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    channel: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string channel = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.prototype.getChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.prototype.setChannel = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.prototype.clearChannel = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string username = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MattermostSpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    accesskey: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    secretkey: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    host: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesskey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretkey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string accessKey = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.prototype.getAccesskey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.prototype.setAccesskey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.prototype.clearAccesskey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.prototype.hasAccesskey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string secretKey = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.prototype.getSecretkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.prototype.setSecretkey = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.prototype.clearSecretkey = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.prototype.hasSecretkey = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string host = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.prototype.setHost = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.prototype.clearHost = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MinioSpec.prototype.hasHost = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    port: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    database: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    password: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.setHost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.clearHost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.hasHost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.clearPort = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.hasPort = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string database = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.setDatabase = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.clearDatabase = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.hasDatabase = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string username = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string password = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MongoDbSpec.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    port: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    database: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    password: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.setHost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.clearHost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.hasHost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.clearPort = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.hasPort = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string database = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.setDatabase = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.clearDatabase = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.hasDatabase = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string username = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string password = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.MySqlSpec.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NotifierSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional NotifierStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLasttransitiontime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Notifier items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    tenantref: (f = msg.getTenantref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    to: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    from: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    connectionname: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setTenantref(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenantref();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional k8s.io.api.core.v1.ObjectReference tenantRef = 1;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.getTenantref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 1));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.setTenantref = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.clearTenantref = function() {
  return this.setTenantref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.hasTenantref = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string to = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.setTo = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.clearTo = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.hasTo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string from = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.setFrom = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.clearFrom = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string connectionName = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.setConnectionname = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.clearConnectionname = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.hasConnectionname = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string owner = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NotifierCondition conditions = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    conntectionstring: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConntectionstring(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string conntectionString = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec.prototype.getConntectionstring = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec.prototype.setConntectionstring = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec.prototype.clearConntectionstring = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OdbcSpec.prototype.hasConntectionstring = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    tenantname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    password: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    authurl: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    region: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenantname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthurl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string userName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tenantName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.getTenantname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.setTenantname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.clearTenantname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.hasTenantname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string authUrl = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.getAuthurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.setAuthurl = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.clearAuthurl = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.hasAuthurl = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string region = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.setRegion = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.clearRegion = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OpenstackSpec.prototype.hasRegion = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    port: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    database: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    servicename: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    role: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    password: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setServicename(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.setHost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.clearHost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.hasHost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.clearPort = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.hasPort = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string database = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.setDatabase = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.clearDatabase = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.hasDatabase = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string serviceName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.getServicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.setServicename = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.clearServicename = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.hasServicename = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string role = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.setRole = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.clearRole = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.hasRole = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string username = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string password = 7;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OracleSpec.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    endpoint: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    application: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    secret: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    consumerkey: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplication(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsumerkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string endpoint = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.setEndpoint = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.clearEndpoint = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.hasEndpoint = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string application = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.getApplication = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.setApplication = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.clearApplication = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.hasApplication = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string secret = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.setSecret = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.clearSecret = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string consumerkey = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.getConsumerkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.setConsumerkey = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.clearConsumerkey = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.OvhSpec.prototype.hasConsumerkey = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    port: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    database: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    password: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.setHost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.clearHost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.hasHost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.clearPort = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.hasPort = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string database = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.setDatabase = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.clearDatabase = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.hasDatabase = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string username = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string password = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PostgresSQLSpec.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    port: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    catalog: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    schema: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    password: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCatalog(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.setHost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.clearHost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.hasHost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.clearPort = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.hasPort = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string catalog = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.getCatalog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.setCatalog = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.clearCatalog = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.hasCatalog = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string schema = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.setSchema = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.clearSchema = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.hasSchema = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string username = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string password = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.PrestoSpec.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    port: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    database: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    password: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.setHost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.clearHost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.hasHost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.clearPort = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.hasPort = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string database = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.setDatabase = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.clearDatabase = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.hasDatabase = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string username = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string password = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.RedShiftSpec.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ServingSiteSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ServingSiteStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLasttransitiontime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ServingSite items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    tenantref: (f = msg.getTenantref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    quotaspec: (f = msg.getQuotaspec()) && k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec.toObject(includeInstance, f),
    limitrangespec: (f = msg.getLimitrangespec()) && k8s_io_api_core_v1_generated_pb.LimitRangeSpec.toObject(includeInstance, f),
    ingressname: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    fdqn: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    clustername: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setTenantref(value);
      break;
    case 3:
      var value = new k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec.deserializeBinaryFromReader);
      msg.setQuotaspec(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.LimitRangeSpec;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.LimitRangeSpec.deserializeBinaryFromReader);
      msg.setLimitrangespec(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIngressname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFdqn(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setClustername(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTenantref();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getQuotaspec();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec.serializeBinaryToWriter
    );
  }
  f = message.getLimitrangespec();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.LimitRangeSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference tenantRef = 2;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.getTenantref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 2));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.setTenantref = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.clearTenantref = function() {
  return this.setTenantref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.hasTenantref = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.api.core.v1.ResourceQuotaSpec quotaSpec = 3;
 * @return {?proto.k8s.io.api.core.v1.ResourceQuotaSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.getQuotaspec = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ResourceQuotaSpec} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec, 3));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ResourceQuotaSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.setQuotaspec = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.clearQuotaspec = function() {
  return this.setQuotaspec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.hasQuotaspec = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.LimitRangeSpec limitRangeSpec = 4;
 * @return {?proto.k8s.io.api.core.v1.LimitRangeSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.getLimitrangespec = function() {
  return /** @type{?proto.k8s.io.api.core.v1.LimitRangeSpec} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.LimitRangeSpec, 4));
};


/**
 * @param {?proto.k8s.io.api.core.v1.LimitRangeSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.setLimitrangespec = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.clearLimitrangespec = function() {
  return this.setLimitrangespec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.hasLimitrangespec = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string ingressName = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.getIngressname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.setIngressname = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.clearIngressname = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.hasIngressname = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string fdqn = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.getFdqn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.setFdqn = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.clearFdqn = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.hasFdqn = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string clusterName = 7;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.getClustername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.setClustername = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.clearClustername = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.hasClustername = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string owner = 8;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.repeatedFields_ = [1,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.toObject, includeInstance),
    activepredictors: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    inactivepredictors: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    totalpredictorservicefailed: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    totalpredictordatadriftfailed: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    totalpredictoraccuracyfailed: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    lastdailypredictionsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActivepredictors(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInactivepredictors(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalpredictorservicefailed(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalpredictordatadriftfailed(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalpredictoraccuracyfailed(value);
      break;
    case 7:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addLastdailypredictions(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getLastdailypredictionsList();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      7,
      f
    );
  }
};


/**
 * repeated ServingSiteCondition conditions = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};


/**
 * optional int32 activePredictors = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getActivepredictors = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setActivepredictors = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearActivepredictors = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.hasActivepredictors = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 inactivePredictors = 3;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getInactivepredictors = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setInactivepredictors = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearInactivepredictors = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.hasInactivepredictors = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 totalPredictorServiceFailed = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getTotalpredictorservicefailed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setTotalpredictorservicefailed = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearTotalpredictorservicefailed = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.hasTotalpredictorservicefailed = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 totalPredictorDataDriftFailed = 5;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getTotalpredictordatadriftfailed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setTotalpredictordatadriftfailed = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearTotalpredictordatadriftfailed = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.hasTotalpredictordatadriftfailed = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 totalPredictorAccuracyFailed = 6;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getTotalpredictoraccuracyfailed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setTotalpredictoraccuracyfailed = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearTotalpredictoraccuracyfailed = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.hasTotalpredictoraccuracyfailed = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated int32 lastDailyPredictions = 7;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getLastdailypredictionsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setLastdailypredictionsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.addLastdailypredictions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearLastdailypredictionsList = function() {
  return this.setLastdailypredictionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    webhookurl: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    channel: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    token: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebhookurl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string webhookUrl = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.getWebhookurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.setWebhookurl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.clearWebhookurl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.hasWebhookurl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string channel = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.getChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.setChannel = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.clearChannel = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string userName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string token = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.setToken = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.clearToken = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SlackSpec.prototype.hasToken = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    port: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    password: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.setHost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.clearHost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.hasHost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.clearPort = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.hasPort = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string userName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SmtpSpec.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    warehouse: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    database: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    password: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWarehouse(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.setAccount = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.clearAccount = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string warehouse = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.getWarehouse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.setWarehouse = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.clearWarehouse = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.hasWarehouse = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string database = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.setDatabase = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.clearDatabase = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.hasDatabase = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string username = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string password = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.setPassword = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.clearPassword = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SnowFlakeSpec.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    filename: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string fileName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec.prototype.setFilename = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec.prototype.clearFilename = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.SqlLightSpec.prototype.hasFilename = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TenantSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TenantStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLasttransitiontime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Tenant items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultlab: (f = msg.getDefaultlab()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    defaultservingsiteref: (f = msg.getDefaultservingsiteref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setDefaultlab(value);
      break;
    case 2:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setDefaultservingsiteref(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultlab();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getDefaultservingsiteref();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional k8s.io.api.core.v1.ObjectReference defaultLab = 1;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.getDefaultlab = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 1));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.setDefaultlab = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.clearDefaultlab = function() {
  return this.setDefaultlab(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.hasDefaultlab = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference defaultServingSiteRef = 2;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.getDefaultservingsiteref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 2));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.setDefaultservingsiteref = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.clearDefaultservingsiteref = function() {
  return this.setDefaultservingsiteref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.hasDefaultservingsiteref = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string owner = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TenantCondition conditions = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VirtualBucketSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional VirtualBucketStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLasttransitiontime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated VirtualBucket items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    tenantref: (f = msg.getTenantref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    connectionname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setTenantref(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenantref();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional k8s.io.api.core.v1.ObjectReference tenantRef = 1;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.getTenantref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 1));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.setTenantref = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.clearTenantref = function() {
  return this.setTenantref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.hasTenantref = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string connectionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.setConnectionname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.clearConnectionname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.hasConnectionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string owner = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated VirtualBucketCondition conditions = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VirtualClusterSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional VirtualClusterStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLasttransitiontime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated VirtualCluster items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    nodes: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    nodeclassname: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    gpus: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    gpuclassname: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    volumesize: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    spot: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    connectionname: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNodes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeclassname(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGpus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGpuclassname(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVolumesize(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSpot(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionname(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 nodes = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.getNodes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.setNodes = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.clearNodes = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.hasNodes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string nodeClassName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.getNodeclassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.setNodeclassname = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.clearNodeclassname = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.hasNodeclassname = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 gpus = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.getGpus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.setGpus = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.clearGpus = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.hasGpus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string gpuClassName = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.getGpuclassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.setGpuclassname = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.clearGpuclassname = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.hasGpuclassname = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 volumeSize = 6;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.getVolumesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.setVolumesize = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.clearVolumesize = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.hasVolumesize = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool spot = 7;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.getSpot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.setSpot = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.clearSpot = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.hasSpot = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string connectionName = 8;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.setConnectionname = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.clearConnectionname = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.hasConnectionname = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string owner = 9;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    availablenodes: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    availablegpus: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAvailablenodes(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAvailablegpus(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 availableNodes = 1;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.prototype.getAvailablenodes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.prototype.setAvailablenodes = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.prototype.clearAvailablenodes = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.prototype.hasAvailablenodes = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 availableGpus = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.prototype.getAvailablegpus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.prototype.setAvailablegpus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.prototype.clearAvailablegpus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.prototype.hasAvailablegpus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated VirtualClusterCondition conditions = 3;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition, 3));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterStatus.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VirtualVolumeSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional VirtualVolumeStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    reason: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLasttransitiontime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLasttransitiontime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string reason = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string message = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated VirtualVolume items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    tenantref: (f = msg.getTenantref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    connectionname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setTenantref(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenantref();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional k8s.io.api.core.v1.ObjectReference tenantRef = 1;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.getTenantref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 1));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.setTenantref = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.clearTenantref = function() {
  return this.setTenantref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.hasTenantref = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string connectionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.setConnectionname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.clearConnectionname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.hasConnectionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string owner = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated VirtualVolumeCondition conditions = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeStatus.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.WebhookSpec.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1);
