// source: github.com/metaprov/modelaapi/services/data/v1/data.proto
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

var github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb);
var github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb);
var github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb);
var github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb);
var github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb);
var github_com_metaprov_modelaapi_services_common_v1_common_pb = require('../../../../../../github.com/metaprov/modelaapi/services/common/v1/common_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_services_common_v1_common_pb);
var k8s_io_api_core_v1_generated_pb = require('../../../../../../k8s.io/api/core/v1/generated_pb.js');
goog.object.extend(proto, k8s_io_api_core_v1_generated_pb);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse';
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 6:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * map<string, bytes> secret = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFileRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * map<string, bytes> secret = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFeatureRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    content: (f = msg.getContent()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 7:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset content = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.getContent = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.setContent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.hasContent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<string, bytes> secret = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 3:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, bytes> secret = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadAudioRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 5:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, bytes> secret = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadTextCorpusRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    result: (f = msg.getResult()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset result = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.getResult = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * map<string, bytes> secret = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsReadFromStoreResponse.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pipeline: (f = msg.getPipeline()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.deserializeBinaryFromReader);
      msg.setPipeline(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPipeline();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataPipeline pipeline = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataPipeline}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest.prototype.getPipeline = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataPipeline} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataPipeline|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest.prototype.setPipeline = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest.prototype.clearPipeline = function() {
  return this.setPipeline(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineRequest.prototype.hasPipeline = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset result = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse.prototype.getResult = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunDataPipelineResponse.prototype.hasResult = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    recipe: (f = msg.getRecipe()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.toObject(includeInstance, f),
    reciperun: (f = msg.getReciperun()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 7:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinaryFromReader);
      msg.setRecipe(value);
      break;
    case 9:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.deserializeBinaryFromReader);
      msg.setReciperun(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getRecipe();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.serializeBinaryToWriter
    );
  }
  f = message.getReciperun();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<string, bytes> secret = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe recipe = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.getRecipe = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.setRecipe = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.clearRecipe = function() {
  return this.setRecipe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.hasRecipe = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.RecipeRun reciperun = 9;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.RecipeRun}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.getReciperun = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.RecipeRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun, 9));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.RecipeRun|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.setReciperun = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.clearReciperun = function() {
  return this.setReciperun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.hasReciperun = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe result = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse.prototype.getResult = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeResponse.prototype.hasResult = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    recipe: (f = msg.getRecipe()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 7:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinaryFromReader);
      msg.setRecipe(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getRecipe();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<string, bytes> secret = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe recipe = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.getRecipe = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.setRecipe = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.clearRecipe = function() {
  return this.setRecipe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileRequest.prototype.hasRecipe = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView;
      reader.readMessage(value,github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.services.common.v1.TableView result = 1;
 * @return {?proto.github.com.metaprov.modelaapi.services.common.v1.TableView}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse.prototype.getResult = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.common.v1.TableView} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.common.v1.TableView|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateRecipeProfileResponse.prototype.hasResult = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 7:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<string, bytes> secret = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    profile: (f = msg.getProfile()) && github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile;
      reader.readMessage(value,github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.services.common.v1.DatasetProfile profile = 2;
 * @return {?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.getProfile = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.hasProfile = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 9:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model model = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * map<string, bytes> secret = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    forecastsList: jspb.Message.toObjectList(msg.getForecastsList(),
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 9:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 11:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj.deserializeBinaryFromReader);
      msg.addForecasts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getForecastsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model model = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * map<string, bytes> secret = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ForecastObj forecasts = 11;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ForecastObj>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getForecastsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ForecastObj>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj, 11));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ForecastObj>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setForecastsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ForecastObj=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ForecastObj}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.addForecasts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ForecastObj, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearForecastsList = function() {
  return this.setForecastsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    partitionsList: jspb.Message.toObjectList(msg.getPartitionsList(),
    proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.deserializeBinaryFromReader);
      msg.addPartitions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartitionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PartitionValues partitions = 1;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse.prototype.getPartitionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse.prototype.setPartitionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse.prototype.addPartitions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateForecastPartitionFilesResponse.prototype.clearPartitionsList = function() {
  return this.setPartitionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    valuesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues;
  return proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string values = 2;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.prototype.getValuesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.PartitionValues.prototype.clearValuesList = function() {
  return this.setValuesList([]);
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 9:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model model = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * map<string, bytes> secret = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileResponse.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject, includeInstance),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    case 9:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model models = 8;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 8));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.clearModelsList = function() {
  return this.setModelsList([]);
};


/**
 * map<string, bytes> secret = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 7:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<string, bytes> secret = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataValidationResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataValidationResult;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataValidationResult.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataValidationResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataValidationResult result = 1;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataValidationResult>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataValidationResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataValidationResult, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataValidationResult>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataValidationResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataValidationResult}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataValidationResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsValidateDatasetResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    rows: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 6:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRows(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getRows();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * map<string, bytes> secret = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};


/**
 * optional int32 rows = 7;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.getRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.setRows = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 8:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * map<string, bytes> secret = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    rungs: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 7:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRungs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getRungs();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<string, bytes> secret = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};


/**
 * optional int32 rungs = 8;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getRungs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setRungs = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    training: jspb.Message.getFieldWithDefault(msg, 1, 0),
    testing: jspb.Message.getFieldWithDefault(msg, 2, 0),
    validation: jspb.Message.getFieldWithDefault(msg, 3, 0),
    trainingHash: jspb.Message.getFieldWithDefault(msg, 4, ""),
    testingHash: jspb.Message.getFieldWithDefault(msg, 5, ""),
    validationHash: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTraining(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTesting(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValidation(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrainingHash(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTestingHash(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidationHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTraining();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTesting();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getValidation();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTrainingHash();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTestingHash();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getValidationHash();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional int32 training = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.getTraining = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.setTraining = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 testing = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.getTesting = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.setTesting = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 validation = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.getValidation = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.setValidation = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string training_hash = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.getTrainingHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.setTrainingHash = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string testing_hash = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.getTestingHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.setTestingHash = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string validation_hash = 6;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.getValidationHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.setValidationHash = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    columntype: jspb.Message.getFieldWithDefault(msg, 8, ""),
    columnname: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 7:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumntype(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getColumntype();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getColumnname();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<string, bytes> secret = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};


/**
 * optional string columnType = 8;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.getColumntype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.setColumntype = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string columnName = 9;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.getColumnname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileRequest.prototype.setColumnname = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    plot: (f = msg.getPlot()) && github_com_metaprov_modelaapi_services_common_v1_common_pb.Plot.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_services_common_v1_common_pb.Plot;
      reader.readMessage(value,github_com_metaprov_modelaapi_services_common_v1_common_pb.Plot.deserializeBinaryFromReader);
      msg.setPlot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlot();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_services_common_v1_common_pb.Plot.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.services.common.v1.Plot plot = 2;
 * @return {?proto.github.com.metaprov.modelaapi.services.common.v1.Plot}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse.prototype.getPlot = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.common.v1.Plot} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_services_common_v1_common_pb.Plot, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.common.v1.Plot|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse.prototype.setPlot = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse.prototype.clearPlot = function() {
  return this.setPlot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateColumnProfileResponse.prototype.hasPlot = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    quick: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 7:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuick(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getQuick();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<string, bytes> secret = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};


/**
 * optional bool quick = 8;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.getQuick = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileRequest.prototype.setQuick = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    profile: (f = msg.getProfile()) && github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile;
      reader.readMessage(value,github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.services.common.v1.DatasetProfile profile = 1;
 * @return {?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse.prototype.getProfile = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsDatasetProfileResponse.prototype.hasProfile = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 5:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataLocation location = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.getLocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, bytes> secret = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    profile: (f = msg.getProfile()) && github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile;
      reader.readMessage(value,github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.services.common.v1.DatasetProfile profile = 1;
 * @return {?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse.prototype.getProfile = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse.prototype.clearProfile = function() {
  return this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaResponse.prototype.hasProfile = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    flatfile: (f = msg.getFlatfile()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CsvFileSpec.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CsvFileSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CsvFileSpec.deserializeBinaryFromReader);
      msg.setFlatfile(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 5:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getFlatfile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CsvFileSpec.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.CsvFileSpec flatfile = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.CsvFileSpec}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.getFlatfile = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.CsvFileSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.CsvFileSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.CsvFileSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.setFlatfile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.clearFlatfile = function() {
  return this.setFlatfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.hasFlatfile = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataLocation location = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.getLocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, bytes> secret = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableview: (f = msg.getTableview()) && github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView;
      reader.readMessage(value,github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.deserializeBinaryFromReader);
      msg.setTableview(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableview();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.services.common.v1.TableView tableview = 1;
 * @return {?proto.github.com.metaprov.modelaapi.services.common.v1.TableView}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse.prototype.getTableview = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.common.v1.TableView} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.common.v1.TableView|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse.prototype.setTableview = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse.prototype.clearTableview = function() {
  return this.setTableview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewResponse.prototype.hasTableview = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    key: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 3:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, bytes> secret = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewRequest.prototype.setKey = function(value) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableview: (f = msg.getTableview()) && github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView;
      reader.readMessage(value,github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.deserializeBinaryFromReader);
      msg.setTableview(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableview();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.services.common.v1.TableView tableview = 1;
 * @return {?proto.github.com.metaprov.modelaapi.services.common.v1.TableView}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse.prototype.getTableview = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.common.v1.TableView} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.common.v1.TableView|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse.prototype.setTableview = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse.prototype.clearTableview = function() {
  return this.setTableview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetMisclassTableViewResponse.prototype.hasTableview = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    report: (f = msg.getReport()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 8:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 9:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model model = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * map<string, bytes> secret = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report report = 10;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.getReport = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report, 10));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.clearReport = function() {
  return this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.hasReport = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    forecast: (f = msg.getForecast()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    report: (f = msg.getReport()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setForecast(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 8:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 9:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getForecast();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model forecast = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.getForecast = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.setForecast = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.clearForecast = function() {
  return this.setForecast(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.hasForecast = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * map<string, bytes> secret = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report report = 10;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.getReport = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report, 10));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.clearReport = function() {
  return this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.hasReport = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    report: (f = msg.getReport()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 8:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 9:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * map<string, bytes> secret = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report report = 10;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.getReport = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report, 10));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.clearReport = function() {
  return this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.hasReport = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pdf: msg.getPdf_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPdf(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPdf_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes pdf = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse.prototype.getPdf = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes pdf = 1;
 * This is a type-conversion wrapper around `getPdf()`
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse.prototype.getPdf_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPdf()));
};


/**
 * optional bytes pdf = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPdf()`
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse.prototype.getPdf_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPdf()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse.prototype.setPdf = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
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
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    report: (f = msg.getReport()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 7:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<string, bytes> secret = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report report = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.getReport = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.clearReport = function() {
  return this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.hasReport = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    models: (f = msg.getModels()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelList.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    report: (f = msg.getReport()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelList;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelList.deserializeBinaryFromReader);
      msg.setModels(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 9:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 10:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getModels();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelList.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelList models = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelList}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.getModels = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelList} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelList, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelList|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.setModels = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.clearModels = function() {
  return this.setModels(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.hasModels = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * map<string, bytes> secret = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report report = 10;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.getReport = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report, 10));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.clearReport = function() {
  return this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.hasReport = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    budget: jspb.Message.getFieldWithDefault(msg, 6, 0),
    defaulthp: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    algorithm: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBudget(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaulthp(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlgorithm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getBudget();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getDefaulthp();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getAlgorithm();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 budget = 6;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.getBudget = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.setBudget = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool defaultHP = 7;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.getDefaulthp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.setDefaulthp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string algorithm = 8;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.getAlgorithm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.setAlgorithm = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
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
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    model: (f = msg.getModel()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model model = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse.prototype.hasModel = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    budget: jspb.Message.getFieldWithDefault(msg, 6, 0),
    task: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBudget(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getBudget();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getTask();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 budget = 6;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.getBudget = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.setBudget = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string task = 7;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.getTask = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.setTask = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelList: jspb.Message.toObjectList(msg.getModelList(),
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.addModel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model model = 1;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse.prototype.getModelList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse.prototype.setModelList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse.prototype.addModel = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskResponse.prototype.clearModelList = function() {
  return this.setModelList([]);
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
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model model = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.hasModel = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsShutdownResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    predictor: (f = msg.getPredictor()) && github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.deserializeBinaryFromReader);
      msg.setPredictor(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 9:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getPredictor();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model model = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor predictor = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.getPredictor = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.setPredictor = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.clearPredictor = function() {
  return this.setPredictor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.hasPredictor = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * map<string, bytes> secret = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidationResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidationResult;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidationResult.deserializeBinaryFromReader);
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidationResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelValidationResult result = 1;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelValidationResult>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelValidationResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidationResult, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelValidationResult>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelValidationResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelValidationResult}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelValidationResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.ValidateModelResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 3:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, bytes> secret = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    msg: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool status = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsTestConnectionResponse.prototype.setMsg = function(value) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 8:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * map<string, bytes> secret = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 8:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * map<string, bytes> secret = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 2:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, bytes> secret = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    databasesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addDatabases(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabasesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string databases = 1;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse.prototype.getDatabasesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse.prototype.setDatabasesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse.prototype.addDatabases = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse.prototype.clearDatabasesList = function() {
  return this.setDatabasesList([]);
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    databasename: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 2:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabasename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getDatabasename();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, bytes> secret = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};


/**
 * optional string databaseName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.prototype.getDatabasename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesRequest.prototype.setDatabasename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tablesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTables(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTablesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string tables = 1;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse.prototype.getTablesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse.prototype.setTablesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse.prototype.addTables = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTablesResponse.prototype.clearTablesList = function() {
  return this.setTablesList([]);
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    databasename: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sql: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 2:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabasename(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSql(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getDatabasename();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSql();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, bytes> secret = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};


/**
 * optional string databaseName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.prototype.getDatabasename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.prototype.setDatabasename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string sql = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.prototype.getSql = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest.prototype.setSql = function(value) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableview: (f = msg.getTableview()) && github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView;
      reader.readMessage(value,github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.deserializeBinaryFromReader);
      msg.setTableview(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableview();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.services.common.v1.TableView tableview = 1;
 * @return {?proto.github.com.metaprov.modelaapi.services.common.v1.TableView}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse.prototype.getTableview = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.common.v1.TableView} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_services_common_v1_common_pb.TableView, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.common.v1.TableView|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse.prototype.setTableview = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse.prototype.clearTableview = function() {
  return this.setTableview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse.prototype.hasTableview = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    dbconnection: (f = msg.getDbconnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    dbsecretMap: (f = msg.getDbsecretMap()) ? f.toObject(includeInstance, undefined) : [],
    storageconnection: (f = msg.getStorageconnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    storagesecretMap: (f = msg.getStoragesecretMap()) ? f.toObject(includeInstance, undefined) : [],
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    key: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setDbconnection(value);
      break;
    case 6:
      var value = msg.getDbsecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setStorageconnection(value);
      break;
    case 8:
      var value = msg.getStoragesecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 9:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getDbconnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getDbsecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getStorageconnection();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getStoragesecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection dbconnection = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.getDbconnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.setDbconnection = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.clearDbconnection = function() {
  return this.setDbconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.hasDbconnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * map<string, bytes> dbsecret = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.getDbsecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.clearDbsecretMap = function() {
  this.getDbsecretMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection storageconnection = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.getStorageconnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.setStorageconnection = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.clearStorageconnection = function() {
  return this.setStorageconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.hasStorageconnection = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * map<string, bytes> storagesecret = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.getStoragesecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.clearStoragesecretMap = function() {
  this.getStoragesecretMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string key = 10;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSnapshotResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 8:
      var value = msg.getSecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * map<string, bytes> secret = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.getSecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesRequest.prototype.clearSecretMap = function() {
  this.getSecretMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.FeatureEngineeringStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.FeatureEngineeringStatus;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.FeatureEngineeringStatus.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.FeatureEngineeringStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.FeatureEngineeringStatus result = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.FeatureEngineeringStatus}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse.prototype.getResult = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.FeatureEngineeringStatus} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.FeatureEngineeringStatus, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.FeatureEngineeringStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsEngineerFeaturesResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.github.com.metaprov.modelaapi.services.data.v1);
