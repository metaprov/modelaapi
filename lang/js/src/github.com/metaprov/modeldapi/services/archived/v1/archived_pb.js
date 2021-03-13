// source: github.com/metaprov/modeldapi/services/archived/v1/archived.proto
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

var github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb);
var github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb);
var github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb);
var github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb);
var github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modeldapi/pkg/apis/team/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest', null, global);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Account|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordAccountRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConnectionRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Lab|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Tenant|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordTenantRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.ServingSite|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordServingSiteRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.License|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLicenseRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Notifier|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotifierRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualBucketRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualClusterRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordVirtualVolumeRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataPipeline item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataPipeline}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataPipeline} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataPipeline|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataPipelineRun item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataPipelineRun}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataPipelineRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataPipelineRun|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataPipelineRunRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataProductVersionRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDatasetRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordDataSourceRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Entity item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Entity}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Entity} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Entity|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordEntityRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Featureset item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Featureset}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Featureset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Featureset|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturesetRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Feature item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Feature}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Feature} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Feature|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeatureRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipeline item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipeline}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipeline} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipeline|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipelineRun item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipelineRun}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipelineRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipelineRun|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordFeaturePipelineRunRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipeline item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipeline}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipeline} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipeline|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipelineRun item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipelineRun}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipelineRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipelineRun|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordLabelingPipelineRunRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRecipeRunRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelAutoBuilderRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipeline|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordModelPipelineRunRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Notebook|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordNotebookRunRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordReportRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordStudyRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordCurtainRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictorRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipeline.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipeline;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipeline.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipeline.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipeline, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipeline|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRun.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRun;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRun.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRun.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionPipelineRun, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionPipelineRun|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPredictionPipelineRunRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.team.v1alpha1.Conversation item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.team.v1alpha1.Conversation}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.team.v1alpha1.Conversation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.team.v1alpha1.Conversation|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordConversationRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.team.v1alpha1.PostMortem item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.team.v1alpha1.PostMortem}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.team.v1alpha1.PostMortem} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.team.v1alpha1.PostMortem|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordPostmortemRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.toObject(includeInstance, f),
    pb_delete: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDelete(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.team.v1alpha1.RunBook item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.team.v1alpha1.RunBook}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.team.v1alpha1.RunBook} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.team.v1alpha1.RunBook|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest.prototype.hasItem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool delete = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest.prototype.getDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordRunbookRequest.prototype.setDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


goog.object.extend(exports, proto.github.com.metaprov.modeldapi.services.archived.v1);
