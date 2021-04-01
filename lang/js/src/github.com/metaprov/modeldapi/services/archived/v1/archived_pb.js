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
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest', null, global);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse.displayName = 'proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse';
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 3, ""),
    blob: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlob(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBlob();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string kind = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string blob = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.prototype.getBlob = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.prototype.setBlob = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.deserializeBinaryFromReader);
      msg.setItem(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.serializeBinaryToWriter
    );
  }
};


/**
 * optional ModeldBlob item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.RecordObjectRequest.prototype.hasItem = function() {
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
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.deserializeBinaryFromReader);
      msg.setItem(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.serializeBinaryToWriter
    );
  }
};


/**
 * optional ModeldBlob item = 1;
 * @return {?proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse.prototype.getItem = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse.prototype.setItem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.GetObjectResponse.prototype.hasItem = function() {
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selectorMap: (f = msg.getSelectorMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = msg.getSelectorMap();
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelectorMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> selector = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest.prototype.getSelectorMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectRequest.prototype.clearSelectorMap = function() {
  this.getSelectorMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ModeldBlob items = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob>} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.services.archived.v1.ModeldBlob, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListObjectResponse.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.DeleteObjectRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selectorMap: (f = msg.getSelectorMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = msg.getSelectorMap();
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelectorMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> selector = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest.prototype.getSelectorMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetRequest.prototype.clearSelectorMap = function() {
  this.getSelectorMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset items = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset>} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListDatasetResponse.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun.serializeBinaryToWriter
    );
  }
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipelineRun items = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipelineRun>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipelineRun>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipelineRun>} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipelineRun=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipelineRun}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipelineRun, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListFeaturePipelineRunResponse.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selectorMap: (f = msg.getSelectorMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = msg.getSelectorMap();
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelectorMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> selector = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest.prototype.getSelectorMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunRequest.prototype.clearSelectorMap = function() {
  this.getSelectorMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.serializeBinaryToWriter
    );
  }
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipelineRun items = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipelineRun>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipelineRun>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipelineRun>} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipelineRun=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipelineRun}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipelineRun, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListLabelingPipelineRunResponse.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selectorMap: (f = msg.getSelectorMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = msg.getSelectorMap();
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelectorMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> selector = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest.prototype.getSelectorMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunRequest.prototype.clearSelectorMap = function() {
  this.getSelectorMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.serializeBinaryToWriter
    );
  }
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun items = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun>} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListRecipeRunResponse.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selectorMap: (f = msg.getSelectorMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = msg.getSelectorMap();
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelectorMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> selector = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest.prototype.getSelectorMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportRequest.prototype.clearSelectorMap = function() {
  this.getSelectorMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.serializeBinaryToWriter
    );
  }
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report items = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report>} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListReportResponse.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selectorMap: (f = msg.getSelectorMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = msg.getSelectorMap();
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelectorMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> selector = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest.prototype.getSelectorMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelRequest.prototype.clearSelectorMap = function() {
  this.getSelectorMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model items = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model>} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelResponse.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selectorMap: (f = msg.getSelectorMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = msg.getSelectorMap();
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelectorMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> selector = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest.prototype.getSelectorMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyRequest.prototype.clearSelectorMap = function() {
  this.getSelectorMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study items = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study>} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListStudyResponse.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selectorMap: (f = msg.getSelectorMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = msg.getSelectorMap();
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelectorMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> selector = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest.prototype.getSelectorMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionRequest.prototype.clearSelectorMap = function() {
  this.getSelectorMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.serializeBinaryToWriter
    );
  }
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction items = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction>} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListPredictionResponse.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selectorMap: (f = msg.getSelectorMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = msg.getSelectorMap();
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelectorMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> selector = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest.prototype.getSelectorMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderRequest.prototype.clearSelectorMap = function() {
  this.getSelectorMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.serializeBinaryToWriter
    );
  }
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder items = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder>} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelAutobuilder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelAutoBuilderResponse.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selectorMap: (f = msg.getSelectorMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = msg.getSelectorMap();
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelectorMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> selector = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest.prototype.getSelectorMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunRequest.prototype.clearSelectorMap = function() {
  this.getSelectorMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.serializeBinaryToWriter
    );
  }
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun items = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun>} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelPipelineRun, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListModelPipelineRunResponse.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selectorMap: (f = msg.getSelectorMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = msg.getSelectorMap();
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelectorMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> selector = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest.prototype.getSelectorMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunRequest.prototype.clearSelectorMap = function() {
  this.getSelectorMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.serializeBinaryToWriter
    );
  }
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun items = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun>} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.NotebookRun, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListNotebookRunResponse.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selectorMap: (f = msg.getSelectorMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 2:
      var value = msg.getSelectorMap();
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelectorMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string namespace = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest.prototype.setNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> selector = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest.prototype.getSelectorMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsRequest.prototype.clearSelectorMap = function() {
  this.getSelectorMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse;
  return proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.serializeBinaryToWriter
    );
  }
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction items = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction>}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction>} value
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse} returns this
*/
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction}
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse} returns this
 */
proto.github.com.metaprov.modeldapi.services.archived.v1.ListCronPredictionsResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


goog.object.extend(exports, proto.github.com.metaprov.modeldapi.services.archived.v1);
