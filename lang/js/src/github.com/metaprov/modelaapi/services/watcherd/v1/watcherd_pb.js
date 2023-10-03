// source: github.com/metaprov/modelaapi/services/watcherd/v1/watcherd.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb);
var github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb);
var github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb);
var github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb);
var github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb);
var github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modelaapi/pkg/apis/team/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb);
var k8s_io_api_core_v1_generated_pb = require('../../../../../../k8s.io/api/core/v1/generated_pb.js');
goog.object.extend(proto, k8s_io_api_core_v1_generated_pb);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent', null, global);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.displayName = 'proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent';
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    namespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    latest: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLatest(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLatest();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string namespace = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool latest = 3;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions.prototype.getLatest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRequestOptions.prototype.setLatest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataPipeline object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataPipeline}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataPipeline} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataPipeline|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DataPipelineEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.DataPipelineEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataPipelineRun object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataPipelineRun}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataPipelineRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataPipelineRun|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DataPipelineRunEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.DataPipelineRunEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataPipelineRunResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DataProductEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.DataProductEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataProductResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated EntityEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.EntityEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchEntityResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated FeatureHistogramEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.FeatureHistogramEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureHistogramResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated FeatureGroupEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.FeatureGroupEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchFeatureGroupResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated RecipeEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.RecipeEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.RecipeRun object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.RecipeRun}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.RecipeRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.RecipeRun|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated RecipeRunEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.RecipeRunEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRecipeRunResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DatasetEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.DatasetEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DatasetSnapshot object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DatasetSnapshot}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DatasetSnapshot} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSnapshot, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DatasetSnapshot|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DatasetSnapshotEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.DatasetSnapshotEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDatasetSnapshotResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DataSourceEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.DataSourceEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataSourceResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ModelEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.ModelEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ModelClassEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.ModelClassEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ModelClassRunEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.ModelClassRunEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchModelClassRunResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ReportEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.ReportEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReportResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated StudyEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.StudyEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.StudyRun object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.StudyRun}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.StudyRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.StudyRun, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.StudyRun|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated StudyRunEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.StudyRunEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchStudyRunResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Account, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated AccountEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.AccountEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAccountResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Alert, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Alert|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated AlertEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.AlertEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAlertResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Attachment, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Attachment|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated AttachmentEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.AttachmentEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchAttachmentResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ConnectionEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.ConnectionEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchConnectionResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Lab, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Lab|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated LabEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.LabEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLabResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.License, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.License|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated LicenseEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.LicenseEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchLicenseResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated NotifierEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.NotifierEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchNotifierResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.ServingSite|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ServingSiteEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.ServingSiteEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchServingSiteResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Tenant|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated TenantEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.TenantEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTenantResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClass.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClass;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClass.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClass.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.UserRoleClass, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.UserRoleClass|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated UserRoleClassEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.UserRoleClassEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchUserRoleClassResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated VirtualBucketEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.VirtualBucketEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchVirtualBucketResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.DataApp, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DataAppEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.DataAppEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchDataAppResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated PredictionEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.PredictionEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRun.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRun;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRun.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRun.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.PredictionRun, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated PredictionRunEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.PredictionRunEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictionRunResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated PredictorEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.PredictorEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPredictorResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.PostMortem object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.PostMortem}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.PostMortem} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.PostMortem|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated PostmortemEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.PostmortemEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchPostmortemResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.PostMortem object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.PostMortem}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.PostMortem} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.PostMortem|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ReviewEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.ReviewEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchReviewResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.RunBook object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.RunBook}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.RunBook} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.RunBook, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.RunBook|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated RunbookEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.RunbookEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchRunbookResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.repeatedFields_ = [2];



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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    generation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGeneration(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.serializeBinaryToWriter
    );
  }
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    object: (f = msg.getObject()) && github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent;
  return proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.prototype.getEvent = function() {
  return /** @type {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.Todo object = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.Todo}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.prototype.getObject = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.Todo} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_team_v1alpha1_generated_pb.Todo, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.Todo|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent.prototype.hasObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 generation = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated TodoEvent events = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent>}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.TodoEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.WatchTodoResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};


/**
 * @enum {number}
 */
proto.github.com.metaprov.modelaapi.services.watcherd.v1.EventType = {
  EVENT_UPDATE: 0,
  EVENT_DELETE: 1
};

goog.object.extend(exports, proto.github.com.metaprov.modelaapi.services.watcherd.v1);
