// source: github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated.proto
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

var github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb = require('../../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb);
var github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb = require('../../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb);
var github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb = require('../../../../../../../github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb);
var k8s_io_api_core_v1_generated_pb = require('../../../../../../../k8s.io/api/core/v1/generated_pb.js');
goog.object.extend(proto, k8s_io_api_core_v1_generated_pb);
var k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb);
var k8s_io_apimachinery_pkg_runtime_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_runtime_generated_pb);
var k8s_io_apimachinery_pkg_runtime_schema_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_runtime_schema_generated_pb);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError';
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    minreplicas: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    maxreplicas: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    cpuavgutilization: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    memavgutilization: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinreplicas(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxreplicas(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCpuavgutilization(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMemavgutilization(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 minReplicas = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.getMinreplicas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.setMinreplicas = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.clearMinreplicas = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.hasMinreplicas = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 maxReplicas = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.getMaxreplicas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.setMaxreplicas = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.clearMaxreplicas = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.hasMaxreplicas = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 cpuAvgUtilization = 4;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.getCpuavgutilization = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.setCpuavgutilization = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.clearCpuavgutilization = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.hasCpuavgutilization = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 memAvgUtilization = 5;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.getMemavgutilization = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.setMemavgutilization = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.clearMemavgutilization = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.prototype.hasMemavgutilization = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    accountref: (f = msg.getAccountref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    confidencelow: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    confidencehigh: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAccountref(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConfidencelow(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConfidencehigh(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAccountref();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference accountRef = 2;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.getAccountref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 2));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.setAccountref = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.clearAccountref = function() {
  return this.setAccountref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.hasAccountref = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double confidenceLow = 4;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.getConfidencelow = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.setConfidencelow = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.clearConfidencelow = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.hasConfidencelow = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double confidenceHigh = 5;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.getConfidencehigh = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.setConfidencehigh = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.clearConfidencehigh = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.prototype.hasConfidencehigh = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    title: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    pagesList: jspb.Message.toObjectList(msg.getPagesList(),
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOwner(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec.deserializeBinaryFromReader);
      msg.addPages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool owner = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.prototype.getOwner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.PageSpec pages = 3;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.PageSpec>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.prototype.getPagesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.PageSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.PageSpec, 3));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.PageSpec>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.prototype.setPagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.PageSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.PageSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.prototype.addPages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.PageSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.prototype.clearPagesList = function() {
  return this.setPagesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DataAppSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DataAppStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated DataApp items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    versionname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    modelclassname: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    modelname: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    access: (f = msg.getAccess()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec.toObject(includeInstance, f),
    replicas: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    resources: (f = msg.getResources()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.toObject(includeInstance, f),
    servingsiteref: (f = msg.getServingsiteref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    custom: (f = msg.getCustom()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setVersionname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelclassname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelname(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec.deserializeBinaryFromReader);
      msg.setAccess(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReplicas(value);
      break;
    case 10:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.deserializeBinaryFromReader);
      msg.setResources(value);
      break;
    case 13:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setServingsiteref(value);
      break;
    case 14:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.deserializeBinaryFromReader);
      msg.setCustom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getAccess();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.serializeBinaryToWriter
    );
  }
  f = message.getServingsiteref();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getCustom();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string versionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.getVersionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.setVersionname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.clearVersionname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.hasVersionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string modelClassName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.getModelclassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.setModelclassname = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.clearModelclassname = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.hasModelclassname = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string modelName = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.getModelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.setModelname = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.clearModelname = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.hasModelname = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.AccessSpec access = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.AccessSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.getAccess = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.AccessSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.AccessSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.setAccess = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.clearAccess = function() {
  return this.setAccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.hasAccess = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 replicas = 7;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.getReplicas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.setReplicas = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.clearReplicas = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.hasReplicas = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec resources = 10;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.getResources = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec, 10));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.hasResources = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference servingsiteRef = 13;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.getServingsiteref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 13));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.setServingsiteref = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.clearServingsiteref = function() {
  return this.setServingsiteref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.hasServingsiteref = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional CustomAppSpec custom = 14;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.getCustom = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec, 14));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.setCustom = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.clearCustom = function() {
  return this.setCustom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.hasCustom = function() {
  return jspb.Message.getField(this, 14) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    observedgeneration: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    updatedat: (f = msg.getUpdatedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    deploymentstatus: (f = msg.getDeploymentstatus()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    servicetstatus: (f = msg.getServicetstatus()) && k8s_io_api_core_v1_generated_pb.ServiceStatus.toObject(includeInstance, f),
    failurereason: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    failuremessage: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setDeploymentstatus(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.ServiceStatus;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ServiceStatus.deserializeBinaryFromReader);
      msg.setServicetstatus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailurereason(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 7:
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDeploymentstatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getServicetstatus();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.ServiceStatus.serializeBinaryToWriter
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
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 observedGeneration = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time updatedAt = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.getUpdatedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference deploymentStatus = 3;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.getDeploymentstatus = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 3));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.setDeploymentstatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.clearDeploymentstatus = function() {
  return this.setDeploymentstatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.hasDeploymentstatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.ServiceStatus servicetStatus = 4;
 * @return {?proto.k8s.io.api.core.v1.ServiceStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.getServicetstatus = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ServiceStatus} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ServiceStatus, 4));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ServiceStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.setServicetstatus = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.clearServicetstatus = function() {
  return this.setServicetstatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.hasServicetstatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string failureReason = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.getFailurereason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.setFailurereason = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.clearFailurereason = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.hasFailurereason = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string failureMessage = 6;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated k8s.io.apimachinery.pkg.apis.meta.v1.Condition conditions = 7;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, 7));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    gendrifttests: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    minpredictions: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    columnsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    driftthresholdsList: jspb.Message.toObjectList(msg.getDriftthresholdsList(),
    github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DriftThreshold.toObject, includeInstance),
    schedule: (f = msg.getSchedule()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.toObject(includeInstance, f),
    outlierdetectionmodelref: (f = msg.getOutlierdetectionmodelref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    maxhistograms: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    periodseconds: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGendrifttests(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinpredictions(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DriftThreshold;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DriftThreshold.deserializeBinaryFromReader);
      msg.addDriftthresholds(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.deserializeBinaryFromReader);
      msg.setSchedule(value);
      break;
    case 8:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setOutlierdetectionmodelref(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxhistograms(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPeriodseconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getDriftthresholdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DriftThreshold.serializeBinaryToWriter
    );
  }
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.serializeBinaryToWriter
    );
  }
  f = message.getOutlierdetectionmodelref();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
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
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool genDriftTests = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.getGendrifttests = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.setGendrifttests = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.clearGendrifttests = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.hasGendrifttests = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 minPredictions = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.getMinpredictions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.setMinpredictions = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.clearMinpredictions = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.hasMinpredictions = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string columns = 4;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.setColumnsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.addColumns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DriftThreshold driftThresholds = 5;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DriftThreshold>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.getDriftthresholdsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DriftThreshold>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DriftThreshold, 5));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DriftThreshold>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.setDriftthresholdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DriftThreshold=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DriftThreshold}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.addDriftthresholds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DriftThreshold, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.clearDriftthresholdsList = function() {
  return this.setDriftthresholdsList([]);
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule schedule = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.getSchedule = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.setSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.clearSchedule = function() {
  return this.setSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference outlierDetectionModelRef = 8;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.getOutlierdetectionmodelref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 8));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.setOutlierdetectionmodelref = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.clearOutlierdetectionmodelref = function() {
  return this.setOutlierdetectionmodelref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.hasOutlierdetectionmodelref = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 maxHistograms = 9;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.getMaxhistograms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.setMaxhistograms = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.clearMaxhistograms = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.hasMaxhistograms = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 periodSeconds = 10;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.getPeriodseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.setPeriodseconds = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.clearPeriodseconds = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.prototype.hasPeriodseconds = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    fastmodelref: (f = msg.getFastmodelref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    slowmodelref: (f = msg.getSlowmodelref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    probalowpct: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    probahighpct: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFastmodelref(value);
      break;
    case 3:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setSlowmodelref(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProbalowpct(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProbahighpct(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getFastmodelref();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getSlowmodelref();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
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
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference fastModelRef = 2;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.getFastmodelref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 2));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.setFastmodelref = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.clearFastmodelref = function() {
  return this.setFastmodelref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.hasFastmodelref = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference slowModelRef = 3;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.getSlowmodelref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 3));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.setSlowmodelref = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.clearSlowmodelref = function() {
  return this.setSlowmodelref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.hasSlowmodelref = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 probaLowPct = 4;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.getProbalowpct = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.setProbalowpct = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.clearProbalowpct = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.hasProbalowpct = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 probaHighPct = 5;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.getProbahighpct = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.setProbahighpct = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.clearProbahighpct = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.prototype.hasProbahighpct = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    tests: (f = msg.getTests()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.toObject(includeInstance, f),
    schedule: (f = msg.getSchedule()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.deserializeBinaryFromReader);
      msg.setTests(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.deserializeBinaryFromReader);
      msg.setSchedule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getTests();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.serializeBinaryToWriter
    );
  }
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuite tests = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuite}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.prototype.getTests = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuite} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuite|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.prototype.setTests = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.prototype.clearTests = function() {
  return this.setTests(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.prototype.hasTests = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule schedule = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.prototype.getSchedule = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.prototype.setSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.prototype.clearSchedule = function() {
  return this.setSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.prototype.hasSchedule = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    hierarchyvaluesMap: (f = msg.getHierarchyvaluesMap()) ? f.toObject(includeInstance, undefined) : [],
    horizon: (f = msg.getHorizon()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.WindowSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getHierarchyvaluesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.WindowSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.WindowSpec.deserializeBinaryFromReader);
      msg.setHorizon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHierarchyvaluesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getHorizon();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.WindowSpec.serializeBinaryToWriter
    );
  }
};


/**
 * map<string, string> hierarchyValues = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.prototype.getHierarchyvaluesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.prototype.clearHierarchyvaluesMap = function() {
  this.getHierarchyvaluesMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.WindowSpec horizon = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.WindowSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.prototype.getHorizon = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.WindowSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.WindowSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.WindowSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.prototype.setHorizon = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.prototype.clearHorizon = function() {
  return this.setHorizon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.prototype.hasHorizon = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    modellocation: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    horizon: (f = msg.getHorizon()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.WindowSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModellocation(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.WindowSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.WindowSpec.deserializeBinaryFromReader);
      msg.setHorizon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getHorizon();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.WindowSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.prototype.setKey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.prototype.clearKey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string modelLocation = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.prototype.getModellocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.prototype.setModellocation = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.prototype.clearModellocation = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.prototype.hasModellocation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.WindowSpec horizon = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.WindowSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.prototype.getHorizon = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.WindowSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.WindowSpec, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.WindowSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.prototype.setHorizon = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.prototype.clearHorizon = function() {
  return this.setHorizon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.prototype.hasHorizon = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    runsMap: (f = msg.getRunsMap()) ? f.toObject(includeInstance, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = msg.getRunsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.deserializeBinaryFromReader, "", new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun());
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRunsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun.serializeBinaryToWriter);
  }
};


/**
 * map<string, ForecastRun> runs = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.prototype.getRunsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.prototype.clearRunsMap = function() {
  this.getRunsMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileuri: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    reporturi: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    forecastlocation: (f = msg.getForecastlocation()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.toObject(includeInstance, f),
    workerresultsList: jspb.Message.toObjectList(msg.getWorkerresultsList(),
    github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileuri(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReporturi(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.deserializeBinaryFromReader);
      msg.setForecastlocation(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult.deserializeBinaryFromReader);
      msg.addWorkerresults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getForecastlocation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.serializeBinaryToWriter
    );
  }
  f = message.getWorkerresultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string profileURI = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.getProfileuri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.setProfileuri = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.clearProfileuri = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.hasProfileuri = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string reportURI = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.getReporturi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.setReporturi = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.clearReporturi = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.hasReporturi = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation forecastLocation = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.getForecastlocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.setForecastlocation = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.clearForecastlocation = function() {
  return this.setForecastlocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.hasForecastlocation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkerRunResult workerResults = 6;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkerRunResult>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.getWorkerresultsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkerRunResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult, 6));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkerRunResult>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.setWorkerresultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkerRunResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkerRunResult}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.addWorkerresults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkerRunResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.prototype.clearWorkerresultsList = function() {
  return this.setWorkerresultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    accountref: (f = msg.getAccountref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    percent: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAccountref(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPercent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAccountref();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference accountRef = 2;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.prototype.getAccountref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 2));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.prototype.setAccountref = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.prototype.clearAccountref = function() {
  return this.setAccountref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.prototype.hasAccountref = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 percent = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.prototype.getPercent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.prototype.setPercent = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.prototype.clearPercent = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.prototype.hasPercent = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    metric: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    historyList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetric(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.addHistory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedDouble(
      2,
      f
    );
  }
};


/**
 * optional string metric = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.prototype.getMetric = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.prototype.setMetric = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.prototype.clearMetric = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.prototype.hasMetric = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated double history = 2;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.prototype.getHistoryList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.prototype.setHistoryList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.prototype.addHistory = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.prototype.clearHistoryList = function() {
  return this.setHistoryList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    modelversion: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    modelrole: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    imagename: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    deployedat: (f = msg.getDeployedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    retiredat: (f = msg.getRetiredat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    failuremessage: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    avgdailyprediction: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    avglatency: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelversion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelrole(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setImagename(value);
      break;
    case 5:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setDeployedat(value);
      break;
    case 6:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setRetiredat(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAvgdailyprediction(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAvglatency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDeployedat();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getRetiredat();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
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
    writer.writeDouble(
      9,
      f
    );
  }
};


/**
 * optional string modelName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.getModelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.setModelname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.clearModelname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.hasModelname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string modelVersion = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.getModelversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.setModelversion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.clearModelversion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.hasModelversion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string modelRole = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.getModelrole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.setModelrole = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.clearModelrole = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.hasModelrole = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string imageName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.getImagename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.setImagename = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.clearImagename = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.hasImagename = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time deployedAt = 5;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.getDeployedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 5));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.setDeployedat = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.clearDeployedat = function() {
  return this.setDeployedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.hasDeployedat = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time retiredAt = 6;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.getRetiredat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 6));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.setRetiredat = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.clearRetiredat = function() {
  return this.setRetiredat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.hasRetiredat = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string failureMessage = 7;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 avgDailyPrediction = 8;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.getAvgdailyprediction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.setAvgdailyprediction = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.clearAvgdailyprediction = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.hasAvgdailyprediction = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double avgLatency = 9;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.getAvglatency = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.setAvglatency = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.clearAvglatency = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.prototype.hasAvglatency = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.repeatedFields_ = [12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    modelversion: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    modelrole: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    imagename: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    deploymentref: (f = msg.getDeploymentref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    serviceref: (f = msg.getServiceref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    hparef: (f = msg.getHparef()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    failuremessage: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    deployedat: (f = msg.getDeployedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    lastfeedbackdatasetref: (f = msg.getLastfeedbackdatasetref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    lastfeedbacktestat: (f = msg.getLastfeedbacktestat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    lastfeedbacktestresultsList: jspb.Message.toObjectList(msg.getLastfeedbacktestresultsList(),
    github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.toObject, includeInstance),
    metricshistoryMap: (f = msg.getMetricshistoryMap()) ? f.toObject(includeInstance, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.toObject) : [],
    avgdailyprediction: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    avglatency: (f = jspb.Message.getOptionalFloatingPointField(msg, 15)) == null ? undefined : f,
    endpoint: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelversion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelrole(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setImagename(value);
      break;
    case 5:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setDeploymentref(value);
      break;
    case 6:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setServiceref(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setHparef(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 9:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setDeployedat(value);
      break;
    case 10:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setLastfeedbackdatasetref(value);
      break;
    case 11:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastfeedbacktestat(value);
      break;
    case 12:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.deserializeBinaryFromReader);
      msg.addLastfeedbacktestresults(value);
      break;
    case 13:
      var value = msg.getMetricshistoryMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.deserializeBinaryFromReader, "", new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory());
         });
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAvgdailyprediction(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAvglatency(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDeploymentref();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getServiceref();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getHparef();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDeployedat();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getLastfeedbackdatasetref();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getLastfeedbacktestat();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getLastfeedbacktestresultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.serializeBinaryToWriter
    );
  }
  f = message.getMetricshistoryMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(13, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory.serializeBinaryToWriter);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeDouble(
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
};


/**
 * optional string modelName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getModelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setModelname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearModelname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasModelname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string modelVersion = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getModelversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setModelversion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearModelversion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasModelversion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string modelRole = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getModelrole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setModelrole = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearModelrole = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasModelrole = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string imageName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getImagename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setImagename = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearImagename = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasImagename = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference deploymentRef = 5;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getDeploymentref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 5));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setDeploymentref = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearDeploymentref = function() {
  return this.setDeploymentref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasDeploymentref = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference serviceRef = 6;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getServiceref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 6));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setServiceref = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearServiceref = function() {
  return this.setServiceref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasServiceref = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference hpaRef = 7;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getHparef = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 7));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setHparef = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearHparef = function() {
  return this.setHparef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasHparef = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string failureMessage = 8;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time deployedAt = 9;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getDeployedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 9));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setDeployedat = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearDeployedat = function() {
  return this.setDeployedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasDeployedat = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference lastFeedbackDatasetRef = 10;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getLastfeedbackdatasetref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 10));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setLastfeedbackdatasetref = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearLastfeedbackdatasetref = function() {
  return this.setLastfeedbackdatasetref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasLastfeedbackdatasetref = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastFeedbackTestAt = 11;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getLastfeedbacktestat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 11));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setLastfeedbacktestat = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearLastfeedbacktestat = function() {
  return this.setLastfeedbacktestat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasLastfeedbacktestat = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement lastFeedbackTestResults = 12;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getLastfeedbacktestresultsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, 12));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setLastfeedbacktestresultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.addLastfeedbacktestresults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearLastfeedbacktestresultsList = function() {
  return this.setLastfeedbacktestresultsList([]);
};


/**
 * map<string, MetricHistory> metricsHistory = 13;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getMetricshistoryMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory>} */ (
      jspb.Message.getMapField(this, 13, opt_noLazyCreate,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearMetricshistoryMap = function() {
  this.getMetricshistoryMap().clear();
  return this;};


/**
 * optional int32 avgDailyPrediction = 14;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getAvgdailyprediction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setAvgdailyprediction = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearAvgdailyprediction = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasAvgdailyprediction = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional double avgLatency = 15;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getAvglatency = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setAvglatency = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearAvglatency = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasAvglatency = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string endpoint = 16;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setEndpoint = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearEndpoint = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasEndpoint = function() {
  return jspb.Message.getField(this, 16) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverless: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    servingtests: (f = msg.getServingtests()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setServerless(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.deserializeBinaryFromReader);
      msg.setServingtests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getServingtests();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool serverless = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.prototype.getServerless = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.prototype.setServerless = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.prototype.clearServerless = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.prototype.hasServerless = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuite servingTests = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuite}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.prototype.getServingtests = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuite} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuite|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.prototype.setServingtests = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.prototype.clearServingtests = function() {
  return this.setServingtests(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.prototype.hasServingtests = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    hostname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setHostname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string hostname = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.prototype.setHostname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.prototype.clearHostname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.prototype.hasHostname = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastaccessed: (f = msg.getLastaccessed()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastaccessed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastaccessed();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastAccessed = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.prototype.getLastaccessed = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.prototype.setLastaccessed = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.prototype.clearLastaccessed = function() {
  return this.setLastaccessed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.prototype.hasLastaccessed = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PredictionSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PredictionStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.prototype.hasStatus = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    inmemory: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    redis: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    connectionref: (f = msg.getConnectionref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInmemory(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRedis(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setConnectionref(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = message.getConnectionref();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool inMemory = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.getInmemory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.setInmemory = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.clearInmemory = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.hasInmemory = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool redis = 3;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.getRedis = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.setRedis = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.clearRedis = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.hasRedis = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference connectionRef = 4;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.getConnectionref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 4));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.setConnectionref = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.clearConnectionref = function() {
  return this.setConnectionref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.hasConnectionref = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Prediction items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    samplepercent: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    rows: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    backupfreqseconds: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    backupconnectionref: (f = msg.getBackupconnectionref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSamplepercent(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRows(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBackupfreqseconds(value);
      break;
    case 5:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setBackupconnectionref(value);
      break;
    case 6:
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = message.getBackupconnectionref();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 samplePercent = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.getSamplepercent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.setSamplepercent = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.clearSamplepercent = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.hasSamplepercent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 rows = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.getRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.setRows = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.clearRows = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.hasRows = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 backupFreqSeconds = 4;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.getBackupfreqseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.setBackupfreqseconds = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.clearBackupfreqseconds = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.hasBackupfreqseconds = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference backupConnectionRef = 5;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.getBackupconnectionref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 5));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.setBackupconnectionref = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.clearBackupconnectionref = function() {
  return this.setBackupconnectionref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.hasBackupconnectionref = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation location = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.getLocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.hasLocation = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PredictionRunSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PredictionRunStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PredictionRun items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRun, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    datasetname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    modelref: (f = msg.getModelref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    timeout: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    pause: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    abort: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDatasetname(value);
      break;
    case 3:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setModelref(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeout(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPause(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAbort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getModelref();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string datasetName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.getDatasetname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.setDatasetname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.clearDatasetname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.hasDatasetname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference modelRef = 3;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.getModelref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 3));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.setModelref = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.clearModelref = function() {
  return this.setModelref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.hasModelref = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 timeout = 4;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.setTimeout = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.clearTimeout = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool pause = 5;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.getPause = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.setPause = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.clearPause = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.hasPause = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool abort = 6;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.getAbort = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.setAbort = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.clearAbort = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunSpec.prototype.hasAbort = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.repeatedFields_ = [14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    observedgeneration: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    manifestlocation: (f = msg.getManifestlocation()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.toObject(includeInstance, f),
    manifestversion: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    runversion: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    rows: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    phase: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    unittestresults: (f = msg.getUnittestresults()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.toObject(includeInstance, f),
    failuremessage: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    logs: (f = msg.getLogs()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.toObject(includeInstance, f),
    forecast: (f = msg.getForecast()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.toObject(includeInstance, f),
    usage: (f = msg.getUsage()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption.toObject(includeInstance, f),
    updatedat: (f = msg.getUpdatedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    completedat: (f = msg.getCompletedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.deserializeBinaryFromReader);
      msg.setManifestlocation(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setManifestversion(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRunversion(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRows(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhase(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.deserializeBinaryFromReader);
      msg.setUnittestresults(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 9:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.deserializeBinaryFromReader);
      msg.setLogs(value);
      break;
    case 10:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.deserializeBinaryFromReader);
      msg.setForecast(value);
      break;
    case 11:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption.deserializeBinaryFromReader);
      msg.setUsage(value);
      break;
    case 12:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setUpdatedat(value);
      break;
    case 13:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setCompletedat(value);
      break;
    case 14:
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getManifestlocation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUnittestresults();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLogs();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.serializeBinaryToWriter
    );
  }
  f = message.getForecast();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus.serializeBinaryToWriter
    );
  }
  f = message.getUsage();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedat();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getCompletedat();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 observedGeneration = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation manifestLocation = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.getManifestlocation = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.FileLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.setManifestlocation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.clearManifestlocation = function() {
  return this.setManifestlocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.hasManifestlocation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 manifestVersion = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.getManifestversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.setManifestversion = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.clearManifestversion = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.hasManifestversion = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 runVersion = 4;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.getRunversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.setRunversion = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.clearRunversion = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.hasRunversion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 rows = 5;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.getRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.setRows = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.clearRows = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.hasRows = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string phase = 6;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.getPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.setPhase = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.clearPhase = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.hasPhase = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuiteResult unitTestResults = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuiteResult}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.getUnittestresults = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuiteResult} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuiteResult|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.setUnittestresults = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.clearUnittestresults = function() {
  return this.setUnittestresults(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.hasUnittestresults = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string failureMessage = 8;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Logs logs = 9;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Logs}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.getLogs = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Logs} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs, 9));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Logs|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.setLogs = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.clearLogs = function() {
  return this.setLogs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.hasLogs = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ForecastStatus forecast = 10;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.getForecast = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus, 10));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.setForecast = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.clearForecast = function() {
  return this.setForecast(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.hasForecast = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceConsumption usage = 11;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceConsumption}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.getUsage = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceConsumption} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceConsumption, 11));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceConsumption|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.setUsage = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.clearUsage = function() {
  return this.setUsage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.hasUsage = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time updatedAt = 12;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.getUpdatedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 12));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time completedAt = 13;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.getCompletedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 13));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.setCompletedat = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.clearCompletedat = function() {
  return this.setCompletedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.hasCompletedat = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated k8s.io.apimachinery.pkg.apis.meta.v1.Condition conditions = 14;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, 14));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionRunStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    run: (f = msg.getRun()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSpec.toObject(includeInstance, f),
    schedule: (f = msg.getSchedule()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.toObject(includeInstance, f),
    servingsiteref: (f = msg.getServingsiteref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    modelref: (f = msg.getModelref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    studyrunref: (f = msg.getStudyrunref()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference.toObject(includeInstance, f),
    input: (f = msg.getInput()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataInputSpec.toObject(includeInstance, f),
    output: (f = msg.getOutput()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec.toObject(includeInstance, f),
    labeled: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
    unittests: (f = msg.getUnittests()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelTestSuite.toObject(includeInstance, f),
    resources: (f = msg.getResources()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.toObject(includeInstance, f),
    forecast: (f = msg.getForecast()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.toObject(includeInstance, f),
    modelclassname: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSpec.deserializeBinaryFromReader);
      msg.setRun(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.deserializeBinaryFromReader);
      msg.setSchedule(value);
      break;
    case 5:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setServingsiteref(value);
      break;
    case 6:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setModelref(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference.deserializeBinaryFromReader);
      msg.setStudyrunref(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataInputSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataInputSpec.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 9:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec.deserializeBinaryFromReader);
      msg.setOutput(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLabeled(value);
      break;
    case 11:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelTestSuite;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelTestSuite.deserializeBinaryFromReader);
      msg.setUnittests(value);
      break;
    case 12:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.deserializeBinaryFromReader);
      msg.setResources(value);
      break;
    case 13:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.deserializeBinaryFromReader);
      msg.setForecast(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelclassname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getRun();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSpec.serializeBinaryToWriter
    );
  }
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.serializeBinaryToWriter
    );
  }
  f = message.getServingsiteref();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getModelref();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getStudyrunref();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference.serializeBinaryToWriter
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataInputSpec.serializeBinaryToWriter
    );
  }
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getUnittests();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelTestSuite.serializeBinaryToWriter
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.serializeBinaryToWriter
    );
  }
  f = message.getForecast();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSpec run = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getRun = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSpec, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setRun = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearRun = function() {
  return this.setRun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasRun = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule schedule = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getSchedule = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearSchedule = function() {
  return this.setSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference servingSiteRef = 5;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getServingsiteref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 5));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setServingsiteref = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearServingsiteref = function() {
  return this.setServingsiteref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasServingsiteref = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference modelRef = 6;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getModelref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 6));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setModelref = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearModelref = function() {
  return this.setModelref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasModelref = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.StudyRunReference studyRunRef = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.StudyRunReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getStudyrunref = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.StudyRunReference} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.StudyRunReference, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.StudyRunReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setStudyrunref = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearStudyrunref = function() {
  return this.setStudyrunref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasStudyrunref = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataInputSpec input = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataInputSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getInput = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataInputSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataInputSpec, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataInputSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasInput = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataOutputSpec output = 9;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataOutputSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getOutput = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataOutputSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec, 9));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataOutputSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setOutput = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool labeled = 10;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getLabeled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setLabeled = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearLabeled = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasLabeled = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelTestSuite unitTests = 11;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelTestSuite}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getUnittests = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelTestSuite} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelTestSuite, 11));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelTestSuite|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setUnittests = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearUnittests = function() {
  return this.setUnittests(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasUnittests = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec resources = 12;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getResources = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec, 12));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasResources = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ForecastPredictionSpec forecast = 13;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getForecast = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec, 13));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setForecast = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearForecast = function() {
  return this.setForecast(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasForecast = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string modelClassName = 14;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getModelclassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setModelclassname = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearModelclassname = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasModelclassname = function() {
  return jspb.Message.getField(this, 14) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.repeatedFields_ = [2,5,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    observedgeneration: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    activeList: jspb.Message.toObjectList(msg.getActiveList(),
    github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunReference.toObject, includeInstance),
    version: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    lastrunversion: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    availablerunversionsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    lastrunat: (f = msg.getLastrunat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    failuremessage: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    schedule: (f = msg.getSchedule()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus.toObject(includeInstance, f),
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunReference;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunReference.deserializeBinaryFromReader);
      msg.addActive(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLastrunversion(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.addAvailablerunversions(value);
      break;
    case 6:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastrunat(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus.deserializeBinaryFromReader);
      msg.setSchedule(value);
      break;
    case 9:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setUpdatedat(value);
      break;
    case 10:
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getActiveList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunReference.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getAvailablerunversionsList();
  if (f.length > 0) {
    writer.writeRepeatedUint32(
      5,
      f
    );
  }
  f = message.getLastrunat();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedat();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 observedGeneration = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunReference active = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunReference>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getActiveList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunReference>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunReference, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunReference>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setActiveList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunReference=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.addActive = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunReference, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearActiveList = function() {
  return this.setActiveList([]);
};


/**
 * optional uint32 version = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 lastRunVersion = 4;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getLastrunversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setLastrunversion = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearLastrunversion = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasLastrunversion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated uint32 availableRunVersions = 5;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getAvailablerunversionsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setAvailablerunversionsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.addAvailablerunversions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearAvailablerunversionsList = function() {
  return this.setAvailablerunversionsList([]);
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastRunAt = 6;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getLastrunat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 6));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setLastrunat = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearLastrunat = function() {
  return this.setLastrunat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasLastrunat = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string failureMessage = 7;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunScheduleStatus schedule = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunScheduleStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getSchedule = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunScheduleStatus} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunScheduleStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearSchedule = function() {
  return this.setSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time updatedAt = 9;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getUpdatedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 9));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated k8s.io.apimachinery.pkg.apis.meta.v1.Condition conditions = 10;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, 10));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PredictorSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PredictorStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Predictor items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    modelclassname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    productref: (f = msg.getProductref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    template: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    servingsiteref: (f = msg.getServingsiteref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.toObject, includeInstance),
    progressive: (f = msg.getProgressive()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.toObject(includeInstance, f),
    access: (f = msg.getAccess()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec.toObject(includeInstance, f),
    replicas: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    autoscaling: (f = msg.getAutoscaling()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.toObject(includeInstance, f),
    owner: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    resources: (f = msg.getResources()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.toObject(includeInstance, f),
    cache: (f = msg.getCache()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.toObject(includeInstance, f),
    store: (f = msg.getStore()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.toObject(includeInstance, f),
    serving: (f = msg.getServing()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.toObject(includeInstance, f),
    task: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    drift: (f = msg.getDrift()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.toObject(includeInstance, f),
    feedback: (f = msg.getFeedback()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.toObject(includeInstance, f),
    notification: (f = msg.getNotification()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.toObject(includeInstance, f),
    predictionlogging: (f = msg.getPredictionlogging()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.toObject(includeInstance, f),
    forwardcurtain: (f = msg.getForwardcurtain()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.toObject(includeInstance, f),
    backwardcurtain: (f = msg.getBackwardcurtain()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.toObject(includeInstance, f),
    fastslow: (f = msg.getFastslow()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelclassname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setProductref(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTemplate(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setServingsiteref(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    case 9:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.deserializeBinaryFromReader);
      msg.setProgressive(value);
      break;
    case 11:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec.deserializeBinaryFromReader);
      msg.setAccess(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReplicas(value);
      break;
    case 13:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.deserializeBinaryFromReader);
      msg.setAutoscaling(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 15:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.deserializeBinaryFromReader);
      msg.setResources(value);
      break;
    case 16:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.deserializeBinaryFromReader);
      msg.setCache(value);
      break;
    case 17:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.deserializeBinaryFromReader);
      msg.setStore(value);
      break;
    case 18:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.deserializeBinaryFromReader);
      msg.setServing(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setTask(value);
      break;
    case 21:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.deserializeBinaryFromReader);
      msg.setDrift(value);
      break;
    case 22:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.deserializeBinaryFromReader);
      msg.setFeedback(value);
      break;
    case 23:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.deserializeBinaryFromReader);
      msg.setNotification(value);
      break;
    case 24:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.deserializeBinaryFromReader);
      msg.setPredictionlogging(value);
      break;
    case 25:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.deserializeBinaryFromReader);
      msg.setForwardcurtain(value);
      break;
    case 26:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.deserializeBinaryFromReader);
      msg.setBackwardcurtain(value);
      break;
    case 27:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.deserializeBinaryFromReader);
      msg.setFastslow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getProductref();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getServingsiteref();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.serializeBinaryToWriter
    );
  }
  f = message.getProgressive();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.serializeBinaryToWriter
    );
  }
  f = message.getAccess();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getAutoscaling();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.serializeBinaryToWriter
    );
  }
  f = message.getCache();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.serializeBinaryToWriter
    );
  }
  f = message.getStore();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.serializeBinaryToWriter
    );
  }
  f = message.getServing();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getDrift();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec.serializeBinaryToWriter
    );
  }
  f = message.getFeedback();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec.serializeBinaryToWriter
    );
  }
  f = message.getNotification();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.serializeBinaryToWriter
    );
  }
  f = message.getPredictionlogging();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.serializeBinaryToWriter
    );
  }
  f = message.getForwardcurtain();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec.serializeBinaryToWriter
    );
  }
  f = message.getBackwardcurtain();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec.serializeBinaryToWriter
    );
  }
  f = message.getFastslow();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string versionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getVersionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setVersionname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearVersionname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasVersionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string modelClassName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getModelclassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setModelclassname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearModelclassname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasModelclassname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference productRef = 4;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getProductref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 4));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setProductref = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearProductref = function() {
  return this.setProductref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasProductref = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool template = 5;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getTemplate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setTemplate = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearTemplate = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference servingSiteRef = 7;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getServingsiteref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 7));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setServingsiteref = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearServingsiteref = function() {
  return this.setServingsiteref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasServingsiteref = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec models = 8;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec, 8));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearModelsList = function() {
  return this.setModelsList([]);
};


/**
 * optional ProgressiveSpec progressive = 9;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getProgressive = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec, 9));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setProgressive = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearProgressive = function() {
  return this.setProgressive(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasProgressive = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.AccessSpec access = 11;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.AccessSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getAccess = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.AccessSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.AccessSpec, 11));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.AccessSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setAccess = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearAccess = function() {
  return this.setAccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasAccess = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 replicas = 12;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getReplicas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setReplicas = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearReplicas = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasReplicas = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional AutoScalingSpec autoScaling = 13;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getAutoscaling = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec, 13));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setAutoscaling = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearAutoscaling = function() {
  return this.setAutoscaling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasAutoscaling = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string owner = 14;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec resources = 15;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getResources = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec, 15));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasResources = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional PredictionCacheSpec cache = 16;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getCache = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec, 16));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setCache = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearCache = function() {
  return this.setCache(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasCache = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional OnlineFeatureStoreSpec store = 17;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getStore = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec, 17));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setStore = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearStore = function() {
  return this.setStore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasStore = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ModelServingSpec serving = 18;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getServing = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec, 18));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setServing = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearServing = function() {
  return this.setServing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasServing = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string task = 19;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getTask = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setTask = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearTask = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasTask = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional DriftDetectionSpec drift = 21;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getDrift = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec, 21));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setDrift = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearDrift = function() {
  return this.setDrift(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasDrift = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional FeedbackTestSpec feedback = 22;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getFeedback = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec, 22));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setFeedback = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearFeedback = function() {
  return this.setFeedback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasFeedback = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec notification = 23;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getNotification = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec, 23));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setNotification = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearNotification = function() {
  return this.setNotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasNotification = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional PredictionLoggingSpec predictionLogging = 24;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getPredictionlogging = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec, 24));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setPredictionlogging = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearPredictionlogging = function() {
  return this.setPredictionlogging(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasPredictionlogging = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional ForwardCurtainSpec forwardCurtain = 25;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getForwardcurtain = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec, 25));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setForwardcurtain = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearForwardcurtain = function() {
  return this.setForwardcurtain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasForwardcurtain = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional BackwardCurtainSpec backwardCurtain = 26;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getBackwardcurtain = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec, 26));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setBackwardcurtain = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearBackwardcurtain = function() {
  return this.setBackwardcurtain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasBackwardcurtain = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional FastSlowModelSpec fastSlow = 27;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getFastslow = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec, 27));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setFastslow = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearFastslow = function() {
  return this.setFastslow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasFastslow = function() {
  return jspb.Message.getField(this, 27) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.repeatedFields_ = [2,4,17];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    observedgeneration: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    historyList: jspb.Message.toObjectList(msg.getHistoryList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.toObject, includeInstance),
    modelstatusList: jspb.Message.toObjectList(msg.getModelstatusList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.toObject, includeInstance),
    predictorletstatus: (f = msg.getPredictorletstatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.toObject(includeInstance, f),
    onlinestorestatus: (f = msg.getOnlinestorestatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.toObject(includeInstance, f),
    updatedat: (f = msg.getUpdatedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    failuremessage: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    loadbalancerstatus: (f = msg.getLoadbalancerstatus()) && k8s_io_api_core_v1_generated_pb.LoadBalancerStatus.toObject(includeInstance, f),
    lastpredictiondataset: (f = msg.getLastpredictiondataset()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    servingtestsresults: (f = msg.getServingtestsresults()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.toObject(includeInstance, f),
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.deserializeBinaryFromReader);
      msg.addHistory(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.deserializeBinaryFromReader);
      msg.addModelstatus(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.deserializeBinaryFromReader);
      msg.setPredictorletstatus(value);
      break;
    case 7:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.deserializeBinaryFromReader);
      msg.setOnlinestorestatus(value);
      break;
    case 8:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setUpdatedat(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 12:
      var value = new k8s_io_api_core_v1_generated_pb.LoadBalancerStatus;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.LoadBalancerStatus.deserializeBinaryFromReader);
      msg.setLoadbalancerstatus(value);
      break;
    case 13:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setLastpredictiondataset(value);
      break;
    case 14:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.deserializeBinaryFromReader);
      msg.setServingtestsresults(value);
      break;
    case 17:
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord.serializeBinaryToWriter
    );
  }
  f = message.getModelstatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.serializeBinaryToWriter
    );
  }
  f = message.getPredictorletstatus();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.serializeBinaryToWriter
    );
  }
  f = message.getOnlinestorestatus();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedat();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getLoadbalancerstatus();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      k8s_io_api_core_v1_generated_pb.LoadBalancerStatus.serializeBinaryToWriter
    );
  }
  f = message.getLastpredictiondataset();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getServingtestsresults();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.serializeBinaryToWriter
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 observedGeneration = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ModelDeploymentRecord history = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getHistoryList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setHistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.addHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearHistoryList = function() {
  return this.setHistoryList([]);
};


/**
 * repeated ModelDeploymentStatus modelStatus = 4;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getModelstatusList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus, 4));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setModelstatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.addModelstatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearModelstatusList = function() {
  return this.setModelstatusList([]);
};


/**
 * optional PredictorletStatus predictorletStatus = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getPredictorletstatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setPredictorletstatus = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearPredictorletstatus = function() {
  return this.setPredictorletstatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasPredictorletstatus = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional OnlineStoreStatus onlineStoreStatus = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getOnlinestorestatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setOnlinestorestatus = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearOnlinestorestatus = function() {
  return this.setOnlinestorestatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasOnlinestorestatus = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time updatedAt = 8;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getUpdatedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 8));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string failureMessage = 11;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional k8s.io.api.core.v1.LoadBalancerStatus loadBalancerStatus = 12;
 * @return {?proto.k8s.io.api.core.v1.LoadBalancerStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getLoadbalancerstatus = function() {
  return /** @type{?proto.k8s.io.api.core.v1.LoadBalancerStatus} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.LoadBalancerStatus, 12));
};


/**
 * @param {?proto.k8s.io.api.core.v1.LoadBalancerStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setLoadbalancerstatus = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearLoadbalancerstatus = function() {
  return this.setLoadbalancerstatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasLoadbalancerstatus = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference lastPredictionDataset = 13;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getLastpredictiondataset = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 13));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setLastpredictiondataset = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearLastpredictiondataset = function() {
  return this.setLastpredictiondataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasLastpredictiondataset = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuiteResult servingTestsResults = 14;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuiteResult}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getServingtestsresults = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuiteResult} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult, 14));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuiteResult|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setServingtestsresults = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearServingtestsresults = function() {
  return this.setServingtestsresults(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasServingtestsresults = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * repeated k8s.io.apimachinery.pkg.apis.meta.v1.Condition conditions = 17;
 * @return {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, 17));
};


/**
 * @param {!Array<!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.k8s.io.apimachinery.pkg.apis.meta.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    deploymentref: (f = msg.getDeploymentref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    serviceref: (f = msg.getServiceref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    deployedat: (f = msg.getDeployedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    p50: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    p95: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    p99: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    avgdailyprediction: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    totalpredictions: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    lastpredictiontime: (f = msg.getLastpredictiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    failuremessage: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setDeploymentref(value);
      break;
    case 2:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setServiceref(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setDeployedat(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setP50(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setP95(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setP99(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAvgdailyprediction(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalpredictions(value);
      break;
    case 9:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastpredictiontime(value);
      break;
    case 10:
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeploymentref();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getServiceref();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getDeployedat();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
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
  f = message.getLastpredictiontime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional k8s.io.api.core.v1.ObjectReference deploymentRef = 1;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getDeploymentref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 1));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setDeploymentref = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.clearDeploymentref = function() {
  return this.setDeploymentref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.hasDeploymentref = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference serviceRef = 2;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getServiceref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 2));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setServiceref = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.clearServiceref = function() {
  return this.setServiceref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.hasServiceref = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time deployedAt = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getDeployedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setDeployedat = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.clearDeployedat = function() {
  return this.setDeployedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.hasDeployedat = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double p50 = 4;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getP50 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setP50 = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.clearP50 = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.hasP50 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double p95 = 5;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getP95 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setP95 = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.clearP95 = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.hasP95 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double p99 = 6;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getP99 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setP99 = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.clearP99 = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.hasP99 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 avgDailyPrediction = 7;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getAvgdailyprediction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setAvgdailyprediction = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.clearAvgdailyprediction = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.hasAvgdailyprediction = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 totalPredictions = 8;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getTotalpredictions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setTotalpredictions = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.clearTotalpredictions = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.hasTotalpredictions = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastPredictionTime = 9;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getLastpredictiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 9));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setLastpredictiontime = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.clearLastpredictiontime = function() {
  return this.setLastpredictiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.hasLastpredictiontime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string failureMessage = 10;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    warmup: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    trafficincrement: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    canarymetricsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWarmup(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTrafficincrement(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addCanarymetrics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCanarymetricsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional int32 warmup = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.getWarmup = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.setWarmup = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.clearWarmup = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.hasWarmup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 trafficIncrement = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.getTrafficincrement = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.setTrafficincrement = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.clearTrafficincrement = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.hasTrafficincrement = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string canaryMetrics = 3;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.getCanarymetricsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.setCanarymetricsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.addCanarymetrics = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.clearCanarymetricsList = function() {
  return this.setCanarymetricsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.toObject = function(includeInstance, msg) {
  var f, obj = {
    column: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    metric: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    min: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    max: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    actual: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetric(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMax(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setActual(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional string column = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.getColumn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.setColumn = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.clearColumn = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.hasColumn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string metric = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.getMetric = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.setMetric = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.clearMetric = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.hasMetric = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double min = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.setMin = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.clearMin = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.hasMin = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double max = 4;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.setMax = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.clearMax = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.hasMax = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double actual = 5;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.getActual = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.setActual = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.clearActual = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError.prototype.hasActual = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1);
