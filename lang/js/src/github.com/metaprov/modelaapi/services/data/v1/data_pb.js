// source: github.com/metaprov/modelaapi/services/data/v1/data.proto
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
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.AskModelResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.CreateReportResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DataSourceResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsExecuteSqlResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsGetDatabasesResponse', null, global);
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
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.DsWriteFileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse', null, global);
/**
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.repeatedFields_, null);
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
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse';
}
/**
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
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse';
}
/**
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
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.repeatedFields_, null);
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
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.repeatedFields_, null);
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
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse';
}
/**
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
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.repeatedFields_, null);
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
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse.displayName = 'proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse';
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
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    storageconnection: (f = msg.getStorageconnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    storagesecretMap: (f = msg.getStoragesecretMap()) ? f.toObject(includeInstance, undefined) : [],
    dbconnection: (f = msg.getDbconnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    dbsecretMap: (f = msg.getDbsecretMap()) ? f.toObject(includeInstance, undefined) : [],
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
      msg.setStorageconnection(value);
      break;
    case 7:
      var value = msg.getStoragesecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setDbconnection(value);
      break;
    case 9:
      var value = msg.getDbsecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 10:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinaryFromReader);
      msg.setRecipe(value);
      break;
    case 11:
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
  f = message.getStorageconnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getStoragesecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getDbconnection();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getDbsecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getRecipe();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.serializeBinaryToWriter
    );
  }
  f = message.getReciperun();
  if (f != null) {
    writer.writeMessage(
      11,
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
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
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
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection storageConnection = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.getStorageconnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.setStorageconnection = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.clearStorageconnection = function() {
  return this.setStorageconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.hasStorageconnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<string, bytes> storageSecret = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.getStoragesecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.clearStoragesecretMap = function() {
  this.getStoragesecretMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection dbConnection = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.getDbconnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.setDbconnection = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.clearDbconnection = function() {
  return this.setDbconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.hasDbconnection = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * map<string, bytes> dbSecret = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.getDbsecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.clearDbsecretMap = function() {
  this.getDbsecretMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe recipe = 10;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.getRecipe = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Recipe, 10));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.setRecipe = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
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
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.RecipeRun reciperun = 11;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.RecipeRun}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.getReciperun = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.RecipeRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun, 11));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.RecipeRun|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsRunRecipeRequest.prototype.setReciperun = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
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
  return jspb.Message.getField(this, 11) != null;
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
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f)
  };

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
    default:
      reader.skipField();
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
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
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
    profile: (f = msg.getProfile()) && github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.toObject(includeInstance, f),
    profilelocation: (f = msg.getProfilelocation()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.toObject(includeInstance, f),
    anomalylocation: (f = msg.getAnomalylocation()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.toObject(includeInstance, f)
  };

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
      var value = new github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile;
      reader.readMessage(value,github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.deserializeBinaryFromReader);
      msg.setProfilelocation(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.deserializeBinaryFromReader);
      msg.setAnomalylocation(value);
      break;
    default:
      reader.skipField();
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
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile.serializeBinaryToWriter
    );
  }
  f = message.getProfilelocation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.serializeBinaryToWriter
    );
  }
  f = message.getAnomalylocation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.services.common.v1.DatasetProfile profile = 1;
 * @return {?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.getProfile = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_services_common_v1_common_pb.DatasetProfile, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.services.common.v1.DatasetProfile|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.setProfile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
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
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation profileLocation = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.getProfilelocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.setProfilelocation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.clearProfilelocation = function() {
  return this.setProfilelocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.hasProfilelocation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation anomalyLocation = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.getAnomalylocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.setAnomalylocation = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.clearAnomalylocation = function() {
  return this.setAnomalylocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateDatasetProfileResponse.prototype.hasAnomalylocation = function() {
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
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f)
  };

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
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    default:
      reader.skipField();
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
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
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
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
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
    profilelocation: (f = msg.getProfilelocation()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.toObject(includeInstance, f)
  };

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
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.deserializeBinaryFromReader);
      msg.setProfilelocation(value);
      break;
    default:
      reader.skipField();
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
  f = message.getProfilelocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation profileLocation = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse.prototype.getProfilelocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse.prototype.setProfilelocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse.prototype.clearProfilelocation = function() {
  return this.setProfilelocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateModelProfileResponse.prototype.hasProfilelocation = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    forecastsList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    dbconnection: (f = msg.getDbconnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    dbsecretMap: (f = msg.getDbsecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

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
      var value = /** @type {string} */ (reader.readString());
      msg.addForecasts(value);
      break;
    case 12:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setDbconnection(value);
      break;
    case 13:
      var value = msg.getDbsecretMap();
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
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getDbconnection();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getDbsecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(13, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
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


/**
 * repeated string forecasts = 11;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.getForecastsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.setForecastsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.addForecasts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.clearForecastsList = function() {
  return this.setForecastsList([]);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection dbConnection = 12;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.getDbconnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 12));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.setDbconnection = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.clearDbconnection = function() {
  return this.setDbconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.hasDbconnection = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * map<string, bytes> dbSecret = 13;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.getDbsecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 13, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsMergeForecastFileRequest.prototype.clearDbsecretMap = function() {
  this.getDbsecretMap().clear();
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
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
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
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    default:
      reader.skipField();
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
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
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
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
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
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
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
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
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
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model models = 7;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 7));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileRequest.prototype.clearModelsList = function() {
  return this.setModelsList([]);
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
    profilelocation: (f = msg.getProfilelocation()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.toObject(includeInstance, f)
  };

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
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.deserializeBinaryFromReader);
      msg.setProfilelocation(value);
      break;
    default:
      reader.skipField();
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
  f = message.getProfilelocation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation profileLocation = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse.prototype.getProfilelocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse.prototype.setProfilelocation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse.prototype.clearProfilelocation = function() {
  return this.setProfilelocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsCreateStudyProfileResponse.prototype.hasProfilelocation = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    histogram: (f = msg.getHistogram()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.toObject(includeInstance, f),
    refhistogram: (f = msg.getRefhistogram()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.toObject(includeInstance, f),
    suite: (f = msg.getSuite()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 9:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.deserializeBinaryFromReader);
      msg.setHistogram(value);
      break;
    case 10:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.deserializeBinaryFromReader);
      msg.setRefhistogram(value);
      break;
    case 11:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.deserializeBinaryFromReader);
      msg.setSuite(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
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
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getHistogram();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.serializeBinaryToWriter
    );
  }
  f = message.getRefhistogram();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram.serializeBinaryToWriter
    );
  }
  f = message.getSuite();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model model = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection connection = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram histogram = 9;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.getHistogram = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram, 9));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.setHistogram = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.clearHistogram = function() {
  return this.setHistogram(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.hasHistogram = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram refHistogram = 10;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.getRefhistogram = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureHistogram, 10));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureHistogram|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.setRefhistogram = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.clearRefhistogram = function() {
  return this.setRefhistogram(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.hasRefhistogram = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuite suite = 11;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuite}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.getSuite = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuite} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite, 11));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuite|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.setSuite = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.clearSuite = function() {
  return this.setSuite(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteRequest.prototype.hasSuite = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuiteResult result = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuiteResult}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse.prototype.getResult = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuiteResult} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuiteResult|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.RunTestSuiteResponse.prototype.hasResult = function() {
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
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    target: (f = msg.getTarget()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f),
    rows: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

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
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    case 5:
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
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.serializeBinaryToWriter
    );
  }
  f = message.getRows();
  if (f !== 0) {
    writer.writeInt32(
      5,
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
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
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
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation target = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.getTarget = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.setTarget = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.clearTarget = function() {
  return this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 rows = 5;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.getRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetRequest.prototype.setRows = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
    target: (f = msg.getTarget()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f)
  };

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
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    default:
      reader.skipField();
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
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation target = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse.prototype.getTarget = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse.prototype.setTarget = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse.prototype.clearTarget = function() {
  return this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGenerateDatasetResponse.prototype.hasTarget = function() {
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
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    trainingdataset: (f = msg.getTrainingdataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    testingdataset: (f = msg.getTestingdataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f)
  };

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
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setTrainingdataset(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setTestingdataset(value);
      break;
    default:
      reader.skipField();
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
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getTrainingdataset();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getTestingdataset();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
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
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
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
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
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
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
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
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
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
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset trainingDataset = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.getTrainingdataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.setTrainingdataset = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.clearTrainingdataset = function() {
  return this.setTrainingdataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.hasTrainingdataset = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset testingDataset = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.getTestingdataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.setTestingdataset = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.clearTestingdataset = function() {
  return this.setTestingdataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetRequest.prototype.hasTestingdataset = function() {
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
    traininghash: jspb.Message.getFieldWithDefault(msg, 4, ""),
    testinghash: jspb.Message.getFieldWithDefault(msg, 5, ""),
    validationhash: jspb.Message.getFieldWithDefault(msg, 6, ""),
    indexfile: jspb.Message.getFieldWithDefault(msg, 7, ""),
    trainlocation: (f = msg.getTrainlocation()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.toObject(includeInstance, f),
    testlocation: (f = msg.getTestlocation()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.toObject(includeInstance, f),
    validationlocation: (f = msg.getValidationlocation()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.toObject(includeInstance, f)
  };

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
      msg.setTraininghash(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTestinghash(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidationhash(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setIndexfile(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.deserializeBinaryFromReader);
      msg.setTrainlocation(value);
      break;
    case 9:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.deserializeBinaryFromReader);
      msg.setTestlocation(value);
      break;
    case 10:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.deserializeBinaryFromReader);
      msg.setValidationlocation(value);
      break;
    default:
      reader.skipField();
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
  f = message.getTraininghash();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTestinghash();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getValidationhash();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIndexfile();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTrainlocation();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.serializeBinaryToWriter
    );
  }
  f = message.getTestlocation();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.serializeBinaryToWriter
    );
  }
  f = message.getValidationlocation();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.serializeBinaryToWriter
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
 * optional string trainingHash = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.getTraininghash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.setTraininghash = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string testingHash = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.getTestinghash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.setTestinghash = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string validationHash = 6;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.getValidationhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.setValidationhash = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string indexFile = 7;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.getIndexfile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.setIndexfile = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation trainLocation = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.getTrainlocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.setTrainlocation = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.clearTrainlocation = function() {
  return this.setTrainlocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.hasTrainlocation = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation testLocation = 9;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.getTestlocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation, 9));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.setTestlocation = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.clearTestlocation = function() {
  return this.setTestlocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.hasTestlocation = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation validationLocation = 10;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.getValidationlocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation, 10));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.setValidationlocation = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.clearValidationlocation = function() {
  return this.setValidationlocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetResponse.prototype.hasValidationlocation = function() {
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
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    rungs: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

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
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 4:
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
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getRungs();
  if (f !== 0) {
    writer.writeInt32(
      4,
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
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
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
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
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
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 rungs = 4;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getRungs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setRungs = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetRequest.prototype.hasDataset = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GroupByDatasetResponse.prototype.setUri = function(value) {
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
    location: (f = msg.getLocation()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    tenant: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

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
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenant(value);
      break;
    default:
      reader.skipField();
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
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation location = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.getLocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
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
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
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
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string tenant = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsInferSchemaRequest.prototype.setTenant = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
    flatfile: (f = msg.getFlatfile()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileFormatSpec.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f),
    tenant: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

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
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileFormatSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileFormatSpec.deserializeBinaryFromReader);
      msg.setFlatfile(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenant(value);
      break;
    default:
      reader.skipField();
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
  f = message.getFlatfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileFormatSpec.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.serializeBinaryToWriter
    );
  }
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FlatFileFormatSpec flatfile = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FlatFileFormatSpec}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.getFlatfile = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FlatFileFormatSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileFormatSpec, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FlatFileFormatSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.setFlatfile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
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
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation location = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.getLocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
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
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string tenant = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsGetTableViewRequest.prototype.setTenant = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
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
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      7,
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
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report report = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.getReport = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateModelReportRequest.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
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
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    forecast: (f = msg.getForecast()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secretMap: (f = msg.getSecretMap()) ? f.toObject(includeInstance, undefined) : [],
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    report: (f = msg.getReport()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject(includeInstance, f),
    group: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    dbconnection: (f = msg.getDbconnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    dbsecretMap: (f = msg.getDbsecretMap()) ? f.toObject(includeInstance, undefined) : []
  };

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
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGroup(value);
      break;
    case 12:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setDbconnection(value);
      break;
    case 13:
      var value = msg.getDbsecretMap();
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
  f = message.getGroup();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getDbconnection();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getDbsecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(13, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
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


/**
 * optional bool group = 11;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.getGroup = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.setGroup = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection dbConnection = 12;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.getDbconnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 12));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.setDbconnection = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.clearDbconnection = function() {
  return this.setDbconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.hasDbconnection = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * map<string, bytes> dbSecret = 13;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.getDbsecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 13, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateForecastReportRequest.prototype.clearDbsecretMap = function() {
  this.getDbsecretMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    reportsList: jspb.Message.toObjectList(msg.getReportsList(),
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject, includeInstance)
  };

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
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinaryFromReader);
      msg.addReports(value);
      break;
    default:
      reader.skipField();
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
  f = message.getReportsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
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
 * repeated github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report reports = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.getReportsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.setReportsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.addReports = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateSummaryReportRequest.prototype.clearReportsList = function() {
  return this.setReportsList([]);
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
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
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
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      5,
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
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report report = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.getReport = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateDatasetReportRequest.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
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
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    models: (f = msg.getModels()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelList.toObject(includeInstance, f),
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
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      7,
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
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report report = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.getReport = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Report, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Report|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateStudyReportRequest.prototype.setReport = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
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
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    budget: jspb.Message.getFieldWithDefault(msg, 6, 0),
    defaulthp: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    algorithm: jspb.Message.getFieldWithDefault(msg, 8, ""),
    algorithmsList: jspb.Message.toObjectList(msg.getAlgorithmsList(),
    github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.toObject, includeInstance)
  };

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
    case 9:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.deserializeBinaryFromReader);
      msg.addAlgorithms(value);
      break;
    default:
      reader.skipField();
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
  f = message.getAlgorithmsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.serializeBinaryToWriter
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


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm algorithms = 9;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.getAlgorithmsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm, 9));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.setAlgorithmsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.addAlgorithms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskModelRequest.prototype.clearAlgorithmsList = function() {
  return this.setAlgorithmsList([]);
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
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
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
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    keysList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addKeys(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string keys = 1;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse.prototype.getKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse.prototype.setKeysList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse.prototype.addKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GetTimeSeriesDatasetKeysResponse.prototype.clearKeysList = function() {
  return this.setKeysList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.repeatedFields_ = [6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    keysList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    algorithmsList: jspb.Message.toObjectList(msg.getAlgorithmsList(),
    github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.addKeys(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.deserializeBinaryFromReader);
      msg.addAlgorithms(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
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
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getAlgorithmsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string keys = 6;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.getKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.setKeysList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.addKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.clearKeysList = function() {
  return this.setKeysList([]);
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm algorithms = 7;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.getAlgorithmsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm, 7));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.setAlgorithmsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.addAlgorithms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelRequest.prototype.clearAlgorithmsList = function() {
  return this.setAlgorithmsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse.prototype.getModelList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse.prototype.setModelList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse.prototype.addModel = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskForecastModelResponse.prototype.clearModelList = function() {
  return this.setModelList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.repeatedFields_ = [6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject, includeInstance),
    algorithmsList: jspb.Message.toObjectList(msg.getAlgorithmsList(),
    github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addModels(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.deserializeBinaryFromReader);
      msg.addAlgorithms(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
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
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getAlgorithmsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model models = 6;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.clearModelsList = function() {
  return this.setModelsList([]);
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm algorithms = 7;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.getAlgorithmsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm, 7));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.setAlgorithmsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.addAlgorithms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleRequest.prototype.clearAlgorithmsList = function() {
  return this.setAlgorithmsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse.prototype.getModelList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse.prototype.setModelList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse.prototype.addModel = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskEnsembleResponse.prototype.clearModelList = function() {
  return this.setModelList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.repeatedFields_ = [6,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    algnamesList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    all: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    algorithmsList: jspb.Message.toObjectList(msg.getAlgorithmsList(),
    github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.addAlgnames(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.deserializeBinaryFromReader);
      msg.addAlgorithms(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
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
  f = message.getAlgnamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getAll();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getAlgorithmsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string algnames = 6;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.getAlgnamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.setAlgnamesList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.addAlgnames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.clearAlgnamesList = function() {
  return this.setAlgnamesList([]);
};


/**
 * optional bool all = 7;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.setAll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm algorithms = 8;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.getAlgorithmsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm, 8));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.setAlgorithmsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.addAlgorithms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineRequest.prototype.clearAlgorithmsList = function() {
  return this.setAlgorithmsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse.prototype.getModelList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse.prototype.setModelList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse.prototype.addModel = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskBaselineResponse.prototype.clearModelList = function() {
  return this.setModelList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    budget: jspb.Message.getFieldWithDefault(msg, 6, 0),
    task: jspb.Message.getFieldWithDefault(msg, 7, ""),
    algorithmsList: jspb.Message.toObjectList(msg.getAlgorithmsList(),
    github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.toObject, includeInstance)
  };

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
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.deserializeBinaryFromReader);
      msg.addAlgorithms(value);
      break;
    default:
      reader.skipField();
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
  f = message.getAlgorithmsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm.serializeBinaryToWriter
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
 * repeated github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm algorithms = 8;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.getAlgorithmsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Algorithm, 8));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.setAlgorithmsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.addAlgorithms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.AskAllModelsForTaskRequest.prototype.clearAlgorithmsList = function() {
  return this.setAlgorithmsList([]);
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
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    failed: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

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
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
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
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFailed(value);
      break;
    default:
      reader.skipField();
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
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
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
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getFailed();
  if (f) {
    writer.writeBool(
      7,
      f
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
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
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
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
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
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
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
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model model = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
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
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool failed = 7;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.getFailed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelRequest.prototype.setFailed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
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
    pruned: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

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
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPruned(value);
      break;
    default:
      reader.skipField();
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
  f = message.getPruned();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool pruned = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse.prototype.getPruned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.TellModelResponse.prototype.setPruned = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f)
  };

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
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    default:
      reader.skipField();
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
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
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
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.DsStudyEndedRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
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
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f)
  };

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
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    default:
      reader.skipField();
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
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
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
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBRequest.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
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
    location: (f = msg.getLocation()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.toObject(includeInstance, f)
  };

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
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
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
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation location = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse.prototype.getLocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveOptimizerDBResponse.prototype.hasLocation = function() {
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
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f)
  };

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
    default:
      reader.skipField();
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
    connection: (f = msg.getConnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f)
  };

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
    default:
      reader.skipField();
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
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f)
  };

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
    default:
      reader.skipField();
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





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    modelclass: (f = msg.getModelclass()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.toObject(includeInstance, f),
    modelclassrun: (f = msg.getModelclassrun()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.toObject(includeInstance, f),
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.toObject, includeInstance),
    groupsList: jspb.Message.toObjectList(msg.getGroupsList(),
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.deserializeBinaryFromReader);
      msg.setModelclass(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.deserializeBinaryFromReader);
      msg.setModelclassrun(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.deserializeBinaryFromReader);
      msg.addEntities(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.deserializeBinaryFromReader);
      msg.addGroups(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getModelclass();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.serializeBinaryToWriter
    );
  }
  f = message.getModelclassrun();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.serializeBinaryToWriter
    );
  }
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.serializeBinaryToWriter
    );
  }
  f = message.getGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass modelClass = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.getModelclass = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.setModelclass = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.clearModelclass = function() {
  return this.setModelclass(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.hasModelclass = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun modelClassRun = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.getModelclassrun = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.setModelclassrun = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.clearModelclassrun = function() {
  return this.setModelclassrun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.hasModelclassrun = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity entities = 4;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity, 4));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup groups = 5;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.getGroupsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup, 5));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.setGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.addGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataRequest.prototype.clearGroupsList = function() {
  return this.setGroupsList([]);
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
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation location = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse.prototype.getLocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenTrainingDataResponse.prototype.hasLocation = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    storageconnection: (f = msg.getStorageconnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    storagebucket: (f = msg.getStoragebucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    storagesecretMap: (f = msg.getStoragesecretMap()) ? f.toObject(includeInstance, undefined) : [],
    dbconnection: (f = msg.getDbconnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    dbsecretMap: (f = msg.getDbsecretMap()) ? f.toObject(includeInstance, undefined) : [],
    model: (f = msg.getModel()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.toObject(includeInstance, f),
    fg: (f = msg.getFg()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setStorageconnection(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setStoragebucket(value);
      break;
    case 3:
      var value = msg.getStoragesecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setDbconnection(value);
      break;
    case 5:
      var value = msg.getDbsecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.deserializeBinaryFromReader);
      msg.setFg(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorageconnection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getStoragebucket();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getStoragesecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getDbconnection();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getDbsecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.serializeBinaryToWriter
    );
  }
  f = message.getFg();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection storageConnection = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.getStorageconnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.setStorageconnection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.clearStorageconnection = function() {
  return this.setStorageconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.hasStorageconnection = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket storageBucket = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.getStoragebucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.setStoragebucket = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.clearStoragebucket = function() {
  return this.setStoragebucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.hasStoragebucket = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, bytes> storageSecret = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.getStoragesecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.clearStoragesecretMap = function() {
  this.getStoragesecretMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection dbConnection = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.getDbconnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.setDbconnection = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.clearDbconnection = function() {
  return this.setDbconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.hasDbconnection = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, bytes> dbSecret = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.getDbsecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.clearDbsecretMap = function() {
  this.getDbsecretMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass model = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup fg = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.getFg = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.setFg = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.clearFg = function() {
  return this.setFg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.hasFg = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation location = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.getLocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreRequest.prototype.hasLocation = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SyncOnlineStoreResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    storageconnection: (f = msg.getStorageconnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    storagebucket: (f = msg.getStoragebucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    storagesecretMap: (f = msg.getStoragesecretMap()) ? f.toObject(includeInstance, undefined) : [],
    dbconnection: (f = msg.getDbconnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    dbsecretMap: (f = msg.getDbsecretMap()) ? f.toObject(includeInstance, undefined) : [],
    model: (f = msg.getModel()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.toObject(includeInstance, f),
    fg: (f = msg.getFg()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setStorageconnection(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setStoragebucket(value);
      break;
    case 3:
      var value = msg.getStoragesecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setDbconnection(value);
      break;
    case 5:
      var value = msg.getDbsecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.deserializeBinaryFromReader);
      msg.setFg(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorageconnection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getStoragebucket();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getStoragesecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getDbconnection();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getDbsecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.serializeBinaryToWriter
    );
  }
  f = message.getFg();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection storageConnection = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.getStorageconnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.setStorageconnection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.clearStorageconnection = function() {
  return this.setStorageconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.hasStorageconnection = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket storageBucket = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.getStoragebucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.setStoragebucket = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.clearStoragebucket = function() {
  return this.setStoragebucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.hasStoragebucket = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, bytes> storageSecret = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.getStoragesecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.clearStoragesecretMap = function() {
  this.getStoragesecretMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection dbConnection = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.getDbconnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.setDbconnection = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.clearDbconnection = function() {
  return this.setDbconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.hasDbconnection = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, bytes> dbSecret = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.getDbsecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.clearDbsecretMap = function() {
  this.getDbsecretMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass model = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup fg = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.getFg = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.setFg = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.clearFg = function() {
  return this.setFg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.hasFg = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation location = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.getLocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetRequest.prototype.hasLocation = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation location = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse.prototype.getLocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.GenOnlineStoreDatasetResponse.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.repeatedFields_ = [8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    storageconnection: (f = msg.getStorageconnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    storagebucket: (f = msg.getStoragebucket()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    storagesecretMap: (f = msg.getStoragesecretMap()) ? f.toObject(includeInstance, undefined) : [],
    dbconnection: (f = msg.getDbconnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    dbsecretMap: (f = msg.getDbsecretMap()) ? f.toObject(includeInstance, undefined) : [],
    modelclass: (f = msg.getModelclass()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.toObject, includeInstance),
    groupsList: jspb.Message.toObjectList(msg.getGroupsList(),
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.toObject, includeInstance),
    prediction: (f = msg.getPrediction()) && github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setStorageconnection(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setStoragebucket(value);
      break;
    case 3:
      var value = msg.getStoragesecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setDbconnection(value);
      break;
    case 5:
      var value = msg.getDbsecretMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.deserializeBinaryFromReader);
      msg.setModelclass(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.deserializeBinaryFromReader);
      msg.addEntities(value);
      break;
    case 9:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.deserializeBinaryFromReader);
      msg.addGroups(value);
      break;
    case 10:
      var value = new github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.deserializeBinaryFromReader);
      msg.setPrediction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorageconnection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getStoragebucket();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getStoragesecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getDbconnection();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getDbsecretMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getModelclass();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity.serializeBinaryToWriter
    );
  }
  f = message.getGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.serializeBinaryToWriter
    );
  }
  f = message.getPrediction();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection storageConnection = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.getStorageconnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.setStorageconnection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.clearStorageconnection = function() {
  return this.setStorageconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.hasStorageconnection = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket storageBucket = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.getStoragebucket = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.setStoragebucket = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.clearStoragebucket = function() {
  return this.setStoragebucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.hasStoragebucket = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, bytes> storageSecret = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.getStoragesecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.clearStoragesecretMap = function() {
  this.getStoragesecretMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection dbConnection = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.getDbconnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.setDbconnection = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.clearDbconnection = function() {
  return this.setDbconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.hasDbconnection = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, bytes> dbSecret = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.getDbsecretMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.clearDbsecretMap = function() {
  this.getDbsecretMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass modelclass = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.getModelclass = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.setModelclass = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.clearModelclass = function() {
  return this.setModelclass(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.hasModelclass = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model model = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity entities = 8;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Entity, 8));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Entity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup groups = 9;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.getGroupsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup, 9));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.setGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.addGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.clearGroupsList = function() {
  return this.setGroupsList([]);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction prediction = 10;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.getPrediction = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction, 10));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.setPrediction = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.clearPrediction = function() {
  return this.setPrediction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictRequest.prototype.hasPrediction = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rows: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRows();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 rows = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse.prototype.getRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.BatchPredictResponse.prototype.setRows = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataproduct: (f = msg.getDataproduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    modelclass: (f = msg.getModelclass()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.toObject(includeInstance, f),
    modelclassrun: (f = msg.getModelclassrun()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.toObject(includeInstance, f),
    dbconnection: (f = msg.getDbconnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setDataproduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.deserializeBinaryFromReader);
      msg.setModelclass(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.deserializeBinaryFromReader);
      msg.setModelclassrun(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setDbconnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataproduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getModelclass();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.serializeBinaryToWriter
    );
  }
  f = message.getModelclassrun();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.serializeBinaryToWriter
    );
  }
  f = message.getDbconnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct dataproduct = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.getDataproduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.setDataproduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.clearDataproduct = function() {
  return this.setDataproduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.hasDataproduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource datasource = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.setDatasource = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.clearDatasource = function() {
  return this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset dataset = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.setDataset = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.clearDataset = function() {
  return this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass modelclass = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.getModelclass = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.setModelclass = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.clearModelclass = function() {
  return this.setModelclass(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.hasModelclass = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun modelclassrun = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.getModelclassrun = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.setModelclassrun = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.clearModelclassrun = function() {
  return this.setModelclassrun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.hasModelclassrun = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection dbConnection = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.getDbconnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.setDbconnection = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.clearDbconnection = function() {
  return this.setDbconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveDatasetRequest.prototype.hasDbconnection = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataproduct: (f = msg.getDataproduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    modelclass: (f = msg.getModelclass()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.toObject(includeInstance, f),
    modelclassrun: (f = msg.getModelclassrun()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    groupsList: jspb.Message.toObjectList(msg.getGroupsList(),
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.toObject, includeInstance),
    dbconnection: (f = msg.getDbconnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setDataproduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.deserializeBinaryFromReader);
      msg.setModelclass(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.deserializeBinaryFromReader);
      msg.setModelclassrun(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.deserializeBinaryFromReader);
      msg.addGroups(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setDbconnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataproduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getModelclass();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.serializeBinaryToWriter
    );
  }
  f = message.getModelclassrun();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup.serializeBinaryToWriter
    );
  }
  f = message.getDbconnection();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct dataproduct = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.getDataproduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.setDataproduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.clearDataproduct = function() {
  return this.setDataproduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.hasDataproduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study study = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Study, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.setStudy = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.clearStudy = function() {
  return this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass modelclass = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.getModelclass = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.setModelclass = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.clearModelclass = function() {
  return this.setModelclass(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.hasModelclass = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun modelclassrun = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.getModelclassrun = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.setModelclassrun = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.clearModelclassrun = function() {
  return this.setModelclassrun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.hasModelclassrun = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model model = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.Model, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup groups = 6;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup>}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.getGroupsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureGroup, 6));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup>} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.setGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.addGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.FeatureGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.clearGroupsList = function() {
  return this.setGroupsList([]);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection dbConnection = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.getDbconnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.setDbconnection = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.clearDbconnection = function() {
  return this.setDbconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveModelRequest.prototype.hasDbconnection = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataproduct: (f = msg.getDataproduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    modelclass: (f = msg.getModelclass()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.toObject(includeInstance, f),
    modelclassrun: (f = msg.getModelclassrun()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.toObject(includeInstance, f),
    predictor: (f = msg.getPredictor()) && github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.toObject(includeInstance, f),
    prediction: (f = msg.getPrediction()) && github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.toObject(includeInstance, f),
    dbconnection: (f = msg.getDbconnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setDataproduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.deserializeBinaryFromReader);
      msg.setModelclass(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.deserializeBinaryFromReader);
      msg.setModelclassrun(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.deserializeBinaryFromReader);
      msg.setPredictor(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.deserializeBinaryFromReader);
      msg.setPrediction(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setDbconnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataproduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getModelclass();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.serializeBinaryToWriter
    );
  }
  f = message.getModelclassrun();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun.serializeBinaryToWriter
    );
  }
  f = message.getPredictor();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.serializeBinaryToWriter
    );
  }
  f = message.getPrediction();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.serializeBinaryToWriter
    );
  }
  f = message.getDbconnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct dataproduct = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.getDataproduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.setDataproduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.clearDataproduct = function() {
  return this.setDataproduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.hasDataproduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass modelclass = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.getModelclass = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.setModelclass = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.clearModelclass = function() {
  return this.setModelclass(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.hasModelclass = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun modelclassrun = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.getModelclassrun = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClassRun, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassRun|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.setModelclassrun = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.clearModelclassrun = function() {
  return this.setModelclassrun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.hasModelclassrun = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor predictor = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.getPredictor = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.setPredictor = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.clearPredictor = function() {
  return this.setPredictor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.hasPredictor = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction prediction = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.getPrediction = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.setPrediction = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.clearPrediction = function() {
  return this.setPrediction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.hasPrediction = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection dbConnection = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.getDbconnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.setDbconnection = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.clearDbconnection = function() {
  return this.setDbconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictionRequest.prototype.hasDbconnection = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataproduct: (f = msg.getDataproduct()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    modelclass: (f = msg.getModelclass()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.toObject(includeInstance, f),
    predictor: (f = msg.getPredictor()) && github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.toObject(includeInstance, f),
    dbconnection: (f = msg.getDbconnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setDataproduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.deserializeBinaryFromReader);
      msg.setModelclass(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.deserializeBinaryFromReader);
      msg.setPredictor(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setDbconnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataproduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getModelclass();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass.serializeBinaryToWriter
    );
  }
  f = message.getPredictor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.serializeBinaryToWriter
    );
  }
  f = message.getDbconnection();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct dataproduct = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.getDataproduct = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.setDataproduct = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.clearDataproduct = function() {
  return this.setDataproduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.hasDataproduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass modelclass = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.getModelclass = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelClass, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.setModelclass = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.clearModelclass = function() {
  return this.setModelclass(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.hasModelclass = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction predictor = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.getPredictor = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.setPredictor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.clearPredictor = function() {
  return this.setPredictor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.hasPredictor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection dbConnection = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.getDbconnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.setDbconnection = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.clearDbconnection = function() {
  return this.setDbconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SavePredictorRequest.prototype.hasDbconnection = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tenant: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dbconnection: (f = msg.getDbconnection()) && github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest;
  return proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenant(value);
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setDbconnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenant();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDbconnection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tenant = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest.prototype.getTenant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest.prototype.setTenant = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection dbConnection = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest.prototype.getDbconnection = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest} returns this
*/
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest.prototype.setDbconnection = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest.prototype.clearDbconnection = function() {
  return this.setDbconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreRequest.prototype.hasDbconnection = function() {
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
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.CreateMetricsStoreResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dbid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse;
  return proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDbid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDbid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 dbid = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse.prototype.getDbid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse} returns this
 */
proto.github.com.metaprov.modelaapi.services.data.v1.SaveResponse.prototype.setDbid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


goog.object.extend(exports, proto.github.com.metaprov.modelaapi.services.data.v1);
