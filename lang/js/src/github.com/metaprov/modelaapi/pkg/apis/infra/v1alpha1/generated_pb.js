// source: github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto
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
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb = require('../../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb);
var k8s_io_api_core_v1_generated_pb = require('../../../../../../../k8s.io/api/core/v1/generated_pb.js');
goog.object.extend(proto, k8s_io_api_core_v1_generated_pb);
var k8s_io_apimachinery_pkg_api_resource_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/api/resource/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_api_resource_generated_pb);
var k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb);
var k8s_io_apimachinery_pkg_runtime_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_runtime_generated_pb);
var k8s_io_apimachinery_pkg_runtime_schema_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_runtime_schema_generated_pb);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec', null, global);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec';
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AccountStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Account items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.repeatedFields_ = [19];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    tenantref: (f = msg.getTenantref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    type: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    username: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    firstname: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    lastname: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    email: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    phone: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    admin: (f = jspb.Message.getBooleanField(msg, 9)) == null ? undefined : f,
    memberof: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    resetpassword: (f = jspb.Message.getBooleanField(msg, 13)) == null ? undefined : f,
    avatar: (f = msg.getAvatar()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.toObject(includeInstance, f),
    favoriteproductsList: (f = jspb.Message.getRepeatedField(msg, 19)) == null ? undefined : f
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.deserializeBinaryFromReader = function(msg, reader) {
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
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemberof(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResetpassword(value);
      break;
    case 18:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.deserializeBinaryFromReader);
      msg.setAvatar(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.addFavoriteproducts(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenantref();
  if (f != null) {
    writer.writeMessage(
      1,
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
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
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
  f = message.getAvatar();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.serializeBinaryToWriter
    );
  }
  f = message.getFavoriteproductsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      19,
      f
    );
  }
};


/**
 * optional k8s.io.api.core.v1.ObjectReference tenantRef = 1;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getTenantref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 1));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setTenantref = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearTenantref = function() {
  return this.setTenantref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasTenantref = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setType = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearType = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string username = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setUsername = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearUsername = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string firstName = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setFirstname = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearFirstname = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasFirstname = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string lastName = 6;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setLastname = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearLastname = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasLastname = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string email = 7;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setEmail = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearEmail = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string phone = 8;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setPhone = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearPhone = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasPhone = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool admin = 9;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setAdmin = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearAdmin = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasAdmin = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string memberOf = 11;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getMemberof = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setMemberof = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearMemberof = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasMemberof = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool resetPassword = 13;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getResetpassword = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setResetpassword = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearResetpassword = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasResetpassword = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation avatar = 18;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getAvatar = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation, 18));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setAvatar = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearAvatar = function() {
  return this.setAvatar(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.hasAvatar = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * repeated string favoriteProducts = 19;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.getFavoriteproductsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 19));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.setFavoriteproductsList = function(value) {
  return jspb.Message.setField(this, 19, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.addFavoriteproducts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 19, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountSpec.prototype.clearFavoriteproductsList = function() {
  return this.setFavoriteproductsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.repeatedFields_ = [11];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    updatedat: (f = msg.getUpdatedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    observedgeneration: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    failurereason: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    failuremessage: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    modelscount: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    modelclassescount: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    predictorscount: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    featuregroupscount: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    datasetscount: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    memberscount: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setUpdatedat(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailurereason(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setModelscount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setModelclassescount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPredictorscount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFeaturegroupscount(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDatasetscount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMemberscount(value);
      break;
    case 11:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdatedat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
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
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time updatedAt = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.getUpdatedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 observedGeneration = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string failureReason = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.getFailurereason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.setFailurereason = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.clearFailurereason = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.hasFailurereason = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string failureMessage = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 modelsCount = 5;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.getModelscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.setModelscount = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.clearModelscount = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.hasModelscount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 modelClassesCount = 6;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.getModelclassescount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.setModelclassescount = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.clearModelclassescount = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.hasModelclassescount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 predictorsCount = 7;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.getPredictorscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.setPredictorscount = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.clearPredictorscount = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.hasPredictorscount = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 featureGroupsCount = 8;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.getFeaturegroupscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.setFeaturegroupscount = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.clearFeaturegroupscount = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.hasFeaturegroupscount = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 datasetsCount = 9;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.getDatasetscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.setDatasetscount = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.clearDatasetscount = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.hasDatasetscount = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 membersCount = 10;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.getMemberscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.setMemberscount = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.clearMemberscount = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.hasMemberscount = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated k8s.io.apimachinery.pkg.apis.meta.v1.Condition conditions = 11;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, 11));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AlertSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AlertStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Alert items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    subject: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    level: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    entityref: (f = msg.getEntityref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    owner: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    fieldsMap: (f = msg.getFieldsMap()) ? f.toObject(includeInstance, undefined) : [],
    url: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    image: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    notification: (f = msg.getNotification()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevel(value);
      break;
    case 3:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setEntityref(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 5:
      var value = msg.getFieldsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.deserializeBinaryFromReader);
      msg.setNotification(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getEntityref();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFieldsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
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
  f = message.getNotification();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string subject = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.setSubject = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.clearSubject = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.hasSubject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string level = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.getLevel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.setLevel = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.clearLevel = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.hasLevel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference entityRef = 3;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.getEntityref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 3));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.setEntityref = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.clearEntityref = function() {
  return this.setEntityref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.hasEntityref = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string owner = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, string> fields = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.getFieldsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.clearFieldsMap = function() {
  this.getFieldsMap().clear();
  return this;};


/**
 * optional string url = 6;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string image = 7;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.setImage = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.clearImage = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.hasImage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec notification = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.getNotification = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.setNotification = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.clearNotification = function() {
  return this.setNotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertSpec.prototype.hasNotification = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.repeatedFields_ = [6];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    firedat: (f = msg.getFiredat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    observedgeneration: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    updatedat: (f = msg.getUpdatedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    failuremessage: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setFiredat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setUpdatedat(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 6:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFiredat();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getUpdatedat();
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
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time firedAt = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.getFiredat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.setFiredat = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.clearFiredat = function() {
  return this.setFiredat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.hasFiredat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 observedGeneration = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time updatedAt = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.getUpdatedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string failureMessage = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated k8s.io.apimachinery.pkg.apis.meta.v1.Condition conditions = 6;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, 6));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AlertStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AttachmentSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AttachmentStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Attachment items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    entityref: (f = msg.getEntityref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    bucketname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    path: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    tenantref: (f = msg.getTenantref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setEntityref(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 6:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setTenantref(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getEntityref();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
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
  f = message.getTenantref();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference entityRef = 3;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.getEntityref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 3));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.setEntityref = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.clearEntityref = function() {
  return this.setEntityref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.hasEntityref = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string bucketName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.getBucketname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.setBucketname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.clearBucketname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.hasBucketname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string path = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.setPath = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.clearPath = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.hasPath = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference tenantRef = 6;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.getTenantref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 6));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.setTenantref = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.clearTenantref = function() {
  return this.setTenantref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentSpec.prototype.hasTenantref = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.repeatedFields_ = [5];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    observedgeneration: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    updatedat: (f = msg.getUpdatedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    failurereason: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    failuremessage: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 2:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setUpdatedat(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailurereason(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 5:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUpdatedat();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
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
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 observedGeneration = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time updatedAt = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.getUpdatedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string failureReason = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.getFailurereason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.setFailurereason = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.clearFailurereason = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.hasFailurereason = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string failureMessage = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated k8s.io.apimachinery.pkg.apis.meta.v1.Condition conditions = 5;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, 5));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AttachmentStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ConnectionSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ConnectionStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Connection items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    category: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    provider: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    secretdataMap: (f = msg.getSecretdataMap()) ? f.toObject(includeInstance, undefined) : [],
    optionsMap: (f = msg.getOptionsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
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
      var value = msg.getSecretdataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 5:
      var value = msg.getOptionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSecretdataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getOptionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setCategory = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearCategory = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string provider = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getProvider = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.setProvider = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearProvider = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.hasProvider = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, string> secretData = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getSecretdataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearSecretdataMap = function() {
  this.getSecretdataMap().clear();
  return this;};


/**
 * map<string, string> options = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.getOptionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionSpec.prototype.clearOptionsMap = function() {
  this.getOptionsMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.repeatedFields_ = [5];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    observedgeneration: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    updatedat: (f = msg.getUpdatedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 2:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setUpdatedat(value);
      break;
    case 5:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUpdatedat();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 observedGeneration = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time updatedAt = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.getUpdatedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated k8s.io.apimachinery.pkg.apis.meta.v1.Condition conditions = 5;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, 5));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ConnectionStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    fqdn: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    grpc: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    http: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    ingressclassname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    issuername: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    clusterissuername: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    tlssecretname: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFqdn(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGrpc(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHttp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIngressclassname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIssuername(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterissuername(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTlssecretname(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
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
 * optional string fqdn = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.getFqdn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.setFqdn = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.clearFqdn = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.hasFqdn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool grpc = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.getGrpc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.setGrpc = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.clearGrpc = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.hasGrpc = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool http = 3;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.getHttp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.setHttp = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.clearHttp = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.hasHttp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string ingressClassName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.getIngressclassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.setIngressclassname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.clearIngressclassname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.hasIngressclassname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string issuerName = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.getIssuername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.setIssuername = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.clearIssuername = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.hasIssuername = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string clusterIssuerName = 6;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.getClusterissuername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.setClusterissuername = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.clearClusterissuername = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.hasClusterissuername = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string tlsSecretName = 7;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.getTlssecretname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.setTlssecretname = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.clearTlssecretname = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.prototype.hasTlssecretname = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LabSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LabStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Lab items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    limits: (f = msg.getLimits()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.toObject(includeInstance, f),
    packagestorage: (f = msg.getPackagestorage()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.deserializeBinaryFromReader = function(msg, reader) {
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
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.deserializeBinaryFromReader);
      msg.setLimits(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.deserializeBinaryFromReader);
      msg.setPackagestorage(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
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
  f = message.getLimits();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.serializeBinaryToWriter
    );
  }
  f = message.getPackagestorage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string owner = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ResourceLimitSpec limits = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.getLimits = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.setLimits = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.clearLimits = function() {
  return this.setLimits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.hasLimits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional VolumeStorageSpec packageStorage = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.getPackagestorage = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.setPackagestorage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.clearPackagestorage = function() {
  return this.setPackagestorage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabSpec.prototype.hasPackagestorage = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.repeatedFields_ = [4];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    observedgeneration: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    volumeclaimname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    updatedat: (f = msg.getUpdatedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeclaimname(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setUpdatedat(value);
      break;
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
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
  f = message.getUpdatedat();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 observedGeneration = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string volumeClaimName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.getVolumeclaimname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.setVolumeclaimname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.clearVolumeclaimname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.hasVolumeclaimname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time updatedAt = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.getUpdatedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated k8s.io.apimachinery.pkg.apis.meta.v1.Condition conditions = 4;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, 4));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LabStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LicenseSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LicenseStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated License items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    secretref: (f = msg.getSecretref()) && k8s_io_api_core_v1_generated_pb.SecretReference.toObject(includeInstance, f),
    email: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    trialstartat: (f = msg.getTrialstartat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    trialendat: (f = msg.getTrialendat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new k8s_io_api_core_v1_generated_pb.SecretReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.SecretReference.deserializeBinaryFromReader);
      msg.setSecretref(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setTrialstartat(value);
      break;
    case 6:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setTrialendat(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecretref();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_api_core_v1_generated_pb.SecretReference.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTrialstartat();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getTrialendat();
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
 * optional k8s.io.api.core.v1.SecretReference secretRef = 2;
 * @return {?proto.k8s.io.api.core.v1.SecretReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getSecretref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.SecretReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.SecretReference, 2));
};


/**
 * @param {?proto.k8s.io.api.core.v1.SecretReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setSecretref = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearSecretref = function() {
  return this.setSecretref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasSecretref = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setEmail = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearEmail = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time trialStartAt = 5;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getTrialstartat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 5));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setTrialstartat = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearTrialstartat = function() {
  return this.setTrialstartat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasTrialstartat = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time trialEndAt = 6;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getTrialendat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 6));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setTrialendat = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearTrialendat = function() {
  return this.setTrialendat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasTrialendat = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 maxProducts = 7;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getMaxproducts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setMaxproducts = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearMaxproducts = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasMaxproducts = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 maxTrainers = 8;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getMaxtrainers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setMaxtrainers = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearMaxtrainers = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasMaxtrainers = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 maxServers = 9;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getMaxservers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setMaxservers = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearMaxservers = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasMaxservers = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 maxUsers = 10;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getMaxusers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setMaxusers = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearMaxusers = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasMaxusers = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int32 maxDataPlanes = 11;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getMaxdataplanes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setMaxdataplanes = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearMaxdataplanes = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasMaxdataplanes = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool forecast = 12;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getForecast = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setForecast = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearForecast = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasForecast = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool nlp = 13;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getNlp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setNlp = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearNlp = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasNlp = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool vision = 14;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getVision = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setVision = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearVision = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasVision = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool chatbot = 15;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getChatbot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setChatbot = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearChatbot = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasChatbot = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string productName = 16;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getProductname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setProductname = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearProductname = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasProductname = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string priceName = 17;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getPricename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setPricename = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearPricename = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasPricename = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time expireAt = 18;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getExpireat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 18));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setExpireat = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearExpireat = function() {
  return this.setExpireat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasExpireat = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string notifierName = 19;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.getNotifiername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.setNotifiername = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.clearNotifiername = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseSpec.prototype.hasNotifiername = function() {
  return jspb.Message.getField(this, 19) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.repeatedFields_ = [5];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    updatedat: (f = msg.getUpdatedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    observedgeneration: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    failurereason: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    failuremessage: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setUpdatedat(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailurereason(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 5:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdatedat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
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
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time updatedAt = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.getUpdatedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 observedGeneration = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string failureReason = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.getFailurereason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.setFailurereason = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.clearFailurereason = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.hasFailurereason = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string failureMessage = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated k8s.io.apimachinery.pkg.apis.meta.v1.Condition conditions = 5;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, 5));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.LicenseStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    server: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    path: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.serializeBinaryToWriter = function(message, writer) {
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
 * optional string server = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.prototype.getServer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.prototype.setServer = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.prototype.clearServer = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.prototype.hasServer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.prototype.setPath = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.prototype.clearPath = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.prototype.hasPath = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    connectionname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    info: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    error: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    destination: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionname(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInfo(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setError(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestination(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
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
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string connectionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.setConnectionname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.clearConnectionname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.hasConnectionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool info = 3;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.getInfo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.setInfo = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.clearInfo = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool error = 4;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.getError = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.setError = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.clearError = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string destination = 7;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.getDestination = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.setDestination = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.clearDestination = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.prototype.hasDestination = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    lastmessageat: (f = msg.getLastmessageat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    failuremessage: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionname(value);
      break;
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastmessageat(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastmessageat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
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
 * optional string connectionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.prototype.setConnectionname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.prototype.clearConnectionname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.prototype.hasConnectionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastMessageAt = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.prototype.getLastmessageat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.prototype.setLastmessageat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.prototype.clearLastmessageat = function() {
  return this.setLastmessageat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.prototype.hasLastmessageat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string failureMessage = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.prototype.hasFailuremessage = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NotifierSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional NotifierStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Notifier items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.repeatedFields_ = [5];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    tenantref: (f = msg.getTenantref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    channelsList: jspb.Message.toObjectList(msg.getChannelsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setTenantref(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.deserializeBinaryFromReader);
      msg.addChannels(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = message.getChannelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference tenantRef = 2;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.getTenantref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 2));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.setTenantref = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.clearTenantref = function() {
  return this.setTenantref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.hasTenantref = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string owner = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated NotificationChannelSpec channels = 5;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.getChannelsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec, 5));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.setChannelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.addChannels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierSpec.prototype.clearChannelsList = function() {
  return this.setChannelsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.repeatedFields_ = [3,4];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    observedgeneration: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    updatedat: (f = msg.getUpdatedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    channelsstatusList: jspb.Message.toObjectList(msg.getChannelsstatusList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.toObject, includeInstance),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 2:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setUpdatedat(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.deserializeBinaryFromReader);
      msg.addChannelsstatus(value);
      break;
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUpdatedat();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getChannelsstatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus.serializeBinaryToWriter
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 observedGeneration = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time updatedAt = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.getUpdatedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated NotificationChannelStatus channelsStatus = 3;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.getChannelsstatusList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus, 3));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.setChannelsstatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.addChannelsstatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotificationChannelStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.clearChannelsstatusList = function() {
  return this.setChannelsstatusList([]);
};


/**
 * repeated k8s.io.apimachinery.pkg.apis.meta.v1.Condition conditions = 4;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, 4));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    quota: (f = msg.getQuota()) && k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec.toObject(includeInstance, f),
    limitrange: (f = msg.getLimitrange()) && k8s_io_api_core_v1_generated_pb.LimitRangeSpec.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = new k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec.deserializeBinaryFromReader);
      msg.setQuota(value);
      break;
    case 3:
      var value = new k8s_io_api_core_v1_generated_pb.LimitRangeSpec;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.LimitRangeSpec.deserializeBinaryFromReader);
      msg.setLimitrange(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getQuota();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec.serializeBinaryToWriter
    );
  }
  f = message.getLimitrange();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_api_core_v1_generated_pb.LimitRangeSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.api.core.v1.ResourceQuotaSpec quota = 2;
 * @return {?proto.k8s.io.api.core.v1.ResourceQuotaSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.prototype.getQuota = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ResourceQuotaSpec} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ResourceQuotaSpec, 2));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ResourceQuotaSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.prototype.setQuota = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.prototype.clearQuota = function() {
  return this.setQuota(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.prototype.hasQuota = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.api.core.v1.LimitRangeSpec limitRange = 3;
 * @return {?proto.k8s.io.api.core.v1.LimitRangeSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.prototype.getLimitrange = function() {
  return /** @type{?proto.k8s.io.api.core.v1.LimitRangeSpec} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.LimitRangeSpec, 3));
};


/**
 * @param {?proto.k8s.io.api.core.v1.LimitRangeSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.prototype.setLimitrange = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.prototype.clearLimitrange = function() {
  return this.setLimitrange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.prototype.hasLimitrange = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    resource: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    verbsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResource(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addVerbs(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVerbsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string resource = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.prototype.getResource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.prototype.setResource = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.prototype.clearResource = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.prototype.hasResource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string verbs = 2;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.prototype.getVerbsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.prototype.setVerbsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.prototype.addVerbs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.prototype.clearVerbsList = function() {
  return this.setVerbsList([]);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ServingSiteSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ServingSiteStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ServingSite items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    limits: (f = msg.getLimits()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.toObject(includeInstance, f),
    ingress: (f = msg.getIngress()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.deserializeBinaryFromReader);
      msg.setLimits(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.deserializeBinaryFromReader);
      msg.setIngress(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getLimits();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec.serializeBinaryToWriter
    );
  }
  f = message.getIngress();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string owner = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ResourceLimitSpec limits = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.getLimits = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ResourceLimitSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.setLimits = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.clearLimits = function() {
  return this.setLimits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.hasLimits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional IngressSpec ingress = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.getIngress = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.IngressSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.setIngress = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.clearIngress = function() {
  return this.setIngress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteSpec.prototype.hasIngress = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.repeatedFields_ = [8,15];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    observedgeneration: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    updatedat: (f = msg.getUpdatedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    activepredictors: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    inactivepredictors: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    totalpredictorservicefailed: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    totalpredictordatadriftfailed: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    totalpredictoraccuracyfailed: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    dailypredictionscountsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    failuremessage: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    grpcingressname: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    restingressname: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 2:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setUpdatedat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActivepredictors(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInactivepredictors(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalpredictorservicefailed(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalpredictordatadriftfailed(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalpredictoraccuracyfailed(value);
      break;
    case 8:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDailypredictionscounts(values[i]);
      }
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrpcingressname(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setRestingressname(value);
      break;
    case 15:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUpdatedat();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
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
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getDailypredictionscountsList();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 observedGeneration = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time updatedAt = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getUpdatedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 activePredictors = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getActivepredictors = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setActivepredictors = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearActivepredictors = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.hasActivepredictors = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 inactivePredictors = 4;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getInactivepredictors = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setInactivepredictors = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearInactivepredictors = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.hasInactivepredictors = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 totalPredictorServiceFailed = 5;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getTotalpredictorservicefailed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setTotalpredictorservicefailed = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearTotalpredictorservicefailed = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.hasTotalpredictorservicefailed = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 totalPredictorDataDriftFailed = 6;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getTotalpredictordatadriftfailed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setTotalpredictordatadriftfailed = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearTotalpredictordatadriftfailed = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.hasTotalpredictordatadriftfailed = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 totalPredictorAccuracyFailed = 7;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getTotalpredictoraccuracyfailed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setTotalpredictoraccuracyfailed = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearTotalpredictoraccuracyfailed = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.hasTotalpredictoraccuracyfailed = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated int32 dailyPredictionsCounts = 8;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getDailypredictionscountsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setDailypredictionscountsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.addDailypredictionscounts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearDailypredictionscountsList = function() {
  return this.setDailypredictionscountsList([]);
};


/**
 * optional string failureMessage = 10;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string grpcIngressName = 11;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getGrpcingressname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setGrpcingressname = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearGrpcingressname = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.hasGrpcingressname = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string restIngressName = 12;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getRestingressname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setRestingressname = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearRestingressname = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.hasRestingressname = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * repeated k8s.io.apimachinery.pkg.apis.meta.v1.Condition conditions = 15;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, 15));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSiteStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TenantSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TenantStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Tenant items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultlabname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    defaultservingsitename: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    defaultbucketname: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    cachebucketname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    permissions: (f = msg.getPermissions()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PermissionsSpec.toObject(includeInstance, f),
    notification: (f = msg.getNotification()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.toObject(includeInstance, f),
    onlinestoreconnection: (f = msg.getOnlinestoreconnection()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    metricstoreconnection: (f = msg.getMetricstoreconnection()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultlabname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultservingsitename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultbucketname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCachebucketname(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PermissionsSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PermissionsSpec.deserializeBinaryFromReader);
      msg.setPermissions(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.deserializeBinaryFromReader);
      msg.setNotification(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setOnlinestoreconnection(value);
      break;
    case 8:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setMetricstoreconnection(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPermissions();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PermissionsSpec.serializeBinaryToWriter
    );
  }
  f = message.getNotification();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.serializeBinaryToWriter
    );
  }
  f = message.getOnlinestoreconnection();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getMetricstoreconnection();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
};


/**
 * optional string defaultLabName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.getDefaultlabname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.setDefaultlabname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.clearDefaultlabname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.hasDefaultlabname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string defaultServingSiteName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.getDefaultservingsitename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.setDefaultservingsitename = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.clearDefaultservingsitename = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.hasDefaultservingsitename = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string defaultBucketName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.getDefaultbucketname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.setDefaultbucketname = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.clearDefaultbucketname = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.hasDefaultbucketname = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string cacheBucketName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.getCachebucketname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.setCachebucketname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.clearCachebucketname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.hasCachebucketname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PermissionsSpec permissions = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PermissionsSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.getPermissions = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PermissionsSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PermissionsSpec, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PermissionsSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.setPermissions = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.clearPermissions = function() {
  return this.setPermissions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.hasPermissions = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec notification = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.getNotification = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.setNotification = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.clearNotification = function() {
  return this.setNotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.hasNotification = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference onlineStoreConnection = 7;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.getOnlinestoreconnection = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 7));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.setOnlinestoreconnection = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.clearOnlinestoreconnection = function() {
  return this.setOnlinestoreconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.hasOnlinestoreconnection = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference metricStoreConnection = 8;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.getMetricstoreconnection = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 8));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.setMetricstoreconnection = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.clearMetricstoreconnection = function() {
  return this.setMetricstoreconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantSpec.prototype.hasMetricstoreconnection = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.repeatedFields_ = [5];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    observedgeneration: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    updatedat: (f = msg.getUpdatedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    failurereason: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    failuremessage: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 2:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setUpdatedat(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailurereason(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 5:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUpdatedat();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
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
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 observedGeneration = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time updatedAt = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.getUpdatedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string failureReason = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.getFailurereason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.setFailurereason = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.clearFailurereason = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.hasFailurereason = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string failureMessage = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated k8s.io.apimachinery.pkg.apis.meta.v1.Condition conditions = 5;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, 5));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.TenantStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserRoleClassSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated UserRoleClass items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.repeatedFields_ = [4];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    tenantref: (f = msg.getTenantref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setOwner(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.deserializeBinaryFromReader);
      msg.addRules(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.api.core.v1.ObjectReference tenantRef = 1;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.getTenantref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 1));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.setTenantref = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.clearTenantref = function() {
  return this.setTenantref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.hasTenantref = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string owner = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated RuleSpec rules = 4;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec, 4));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.RuleSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClassSpec.prototype.clearRulesList = function() {
  return this.setRulesList([]);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VirtualBucketSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional VirtualBucketStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated VirtualBucket items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
 * optional string connectionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.setConnectionname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.clearConnectionname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.hasConnectionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string owner = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.repeatedFields_ = [6];



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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    updatedat: (f = msg.getUpdatedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    observedgeneration: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    failuremessage: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setUpdatedat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 6:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdatedat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
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
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time updatedAt = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.getUpdatedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 observedGeneration = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string failureMessage = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated k8s.io.apimachinery.pkg.apis.meta.v1.Condition conditions = 6;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, 6));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucketStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    volumeclaimname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    volumename: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    storageclassname: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    storage: (f = msg.getStorage()) && k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.toObject(includeInstance, f),
    nfs: (f = msg.getNfs()) && proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeclaimname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStorageclassname(value);
      break;
    case 4:
      var value = new k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity;
      reader.readMessage(value,k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.deserializeBinaryFromReader);
      msg.setStorage(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.deserializeBinaryFromReader);
      msg.setNfs(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getStorage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.serializeBinaryToWriter
    );
  }
  f = message.getNfs();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string volumeClaimName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.getVolumeclaimname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.setVolumeclaimname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.clearVolumeclaimname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.hasVolumeclaimname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string volumeName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.getVolumename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.setVolumename = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.clearVolumename = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.hasVolumename = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string storageClassName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.getStorageclassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.setStorageclassname = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.clearStorageclassname = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.hasStorageclassname = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.api.resource.Quantity storage = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.getStorage = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.api.resource.Quantity} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity, 4));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.setStorage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.clearStorage = function() {
  return this.setStorage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.hasStorage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional NFSVolumeSpec nfs = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.getNfs = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NFSVolumeSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.setNfs = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.clearNfs = function() {
  return this.setNfs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VolumeStorageSpec.prototype.hasNfs = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1);
