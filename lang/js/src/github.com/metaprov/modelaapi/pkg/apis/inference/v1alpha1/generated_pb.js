// source: github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated.proto
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
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

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
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec';
}
/**
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec';
}
/**
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition';
}
/**
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus';
}
/**
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord';
}
/**
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus';
}
/**
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition';
}
/**
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.repeatedFields_, null);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate';
}
/**
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.displayName = 'proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition';
}
/**
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
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.repeatedFields_, null);
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



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    nodeport: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    path: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    accesstype: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    rest: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
    apikeysecretref: (f = msg.getApikeysecretref()) && k8s_io_api_core_v1_generated_pb.SecretReference.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNodeport(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesstype(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRest(value);
      break;
    case 6:
      var value = new k8s_io_api_core_v1_generated_pb.SecretReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.SecretReference.deserializeBinaryFromReader);
      msg.setApikeysecretref(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getApikeysecretref();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_api_core_v1_generated_pb.SecretReference.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 port = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.clearPort = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.hasPort = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 nodePort = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.getNodeport = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.setNodeport = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.clearNodeport = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.hasNodeport = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string path = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.setPath = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.clearPath = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.hasPath = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string accessType = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.getAccesstype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.setAccesstype = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.clearAccesstype = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.hasAccesstype = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool rest = 5;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.getRest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.setRest = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.clearRest = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.hasRest = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.api.core.v1.SecretReference apikeySecretRef = 6;
 * @return {?proto.k8s.io.api.core.v1.SecretReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.getApikeysecretref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.SecretReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.SecretReference, 6));
};


/**
 * @param {?proto.k8s.io.api.core.v1.SecretReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.setApikeysecretref = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.clearApikeysecretref = function() {
  return this.setApikeysecretref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.prototype.hasApikeysecretref = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CronPredictionSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CronPredictionStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.hasStatus = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated CronPrediction items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPrediction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    schedule: (f = msg.getSchedule()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.toObject(includeInstance, f),
    template: (f = msg.getTemplate()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate.toObject(includeInstance, f),
    priority: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    paused: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setOwner(value);
      break;
    case 3:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.deserializeBinaryFromReader);
      msg.setSchedule(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate.deserializeBinaryFromReader);
      msg.setTemplate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPriority(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPaused(value);
      break;
    case 7:
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.serializeBinaryToWriter
    );
  }
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
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
  f = message.getNotification();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string versionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.getVersionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.setVersionname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.clearVersionname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.hasVersionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string owner = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule schedule = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.getSchedule = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.setSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.clearSchedule = function() {
  return this.setSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PredictionTemplate template = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.getTemplate = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string priority = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.getPriority = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.setPriority = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.clearPriority = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.hasPriority = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool paused = 6;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.getPaused = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.setPaused = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.clearPaused = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.hasPaused = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec notification = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.getNotification = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.setNotification = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.clearNotification = function() {
  return this.setNotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.hasNotification = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastrun: (f = msg.getLastrun()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus.toObject(includeInstance, f),
    nextrun: (f = msg.getNextrun()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    lastupdated: (f = msg.getLastupdated()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    observedgeneration: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    failurereason: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    failuremessage: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus.deserializeBinaryFromReader);
      msg.setLastrun(value);
      break;
    case 2:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setNextrun(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastupdated(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastrun();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus.serializeBinaryToWriter
    );
  }
  f = message.getNextrun();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getLastupdated();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
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
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.LastRunStatus lastRun = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.LastRunStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.getLastrun = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.LastRunStatus} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.LastRunStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.setLastrun = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.clearLastrun = function() {
  return this.setLastrun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.hasLastrun = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time nextRun = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.getNextrun = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.setNextrun = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.clearNextrun = function() {
  return this.setNextrun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.hasNextrun = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastUpdated = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.getLastupdated = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.setLastupdated = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.clearLastupdated = function() {
  return this.setLastupdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.hasLastupdated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 observedGeneration = 4;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string failureReason = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.getFailurereason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.setFailurereason = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.clearFailurereason = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.hasFailurereason = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string failureMessage = 6;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated CronPredictionCondition conditions = 7;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition, 7));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CurtainSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CurtainStatus status = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.prototype.hasStatus = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Curtain items = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Curtain, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    versionname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    servingsitename: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    datasetname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    wizardsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    question: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    notifiername: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setVersionname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServingsitename(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addWizards(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotifiername(value);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getWizardsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string versionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.getVersionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.setVersionname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.clearVersionname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.hasVersionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string servingsiteName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.getServingsitename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.setServingsitename = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.clearServingsitename = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.hasServingsitename = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string datasetName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.getDatasetname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.setDatasetname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.clearDatasetname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.hasDatasetname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string wizards = 5;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.getWizardsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.setWizardsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.addWizards = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.clearWizardsList = function() {
  return this.setWizardsList([]);
};


/**
 * optional string question = 6;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.getQuestion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.setQuestion = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.clearQuestion = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.hasQuestion = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string notifierName = 7;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.getNotifiername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.setNotifiername = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.clearNotifiername = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.hasNotifiername = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string owner = 8;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    observedgeneration: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    lastupdated: (f = msg.getLastupdated()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setLastupdated(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLastupdated();
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
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 observedGeneration = 1;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastUpdated = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.getLastupdated = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.setLastupdated = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.clearLastupdated = function() {
  return this.setLastupdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.hasLastupdated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated CurtainCondition conditions = 3;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition, 3));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CurtainSpec spec = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
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





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.deserializeBinaryFromReader = function(msg, reader) {
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
    case 7:
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.serializeBinaryToWriter = function(message, writer) {
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
      7,
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 7;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 7));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
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
    description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    modelname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    access: (f = msg.getAccess()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.toObject(includeInstance, f),
    replicas: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    resources: (f = msg.getResources()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.toObject(includeInstance, f),
    productref: (f = msg.getProductref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
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
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelname(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.deserializeBinaryFromReader);
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
    case 12:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setProductref(value);
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
  f = message.getAccess();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.serializeBinaryToWriter
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
  f = message.getProductref();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
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
 * optional string description = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string modelName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.getModelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.setModelname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.clearModelname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.hasModelname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AccessSpec access = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.getAccess = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec|undefined} value
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
 * optional k8s.io.api.core.v1.ObjectReference productRef = 12;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.getProductref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 12));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.setProductref = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.clearProductref = function() {
  return this.setProductref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec.prototype.hasProductref = function() {
  return jspb.Message.getField(this, 12) != null;
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
    lastupdated: (f = msg.getLastupdated()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    deploymentstatus: (f = msg.getDeploymentstatus()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    servicetstatus: (f = msg.getServicetstatus()) && k8s_io_api_core_v1_generated_pb.ServiceStatus.toObject(includeInstance, f),
    failurereason: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    failuremessage: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.toObject, includeInstance)
  };

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
      msg.setLastupdated(value);
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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.deserializeBinaryFromReader);
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
  f = message.getLastupdated();
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
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition.serializeBinaryToWriter
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
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastUpdated = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.getLastupdated = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.setLastupdated = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.clearLastupdated = function() {
  return this.setLastupdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.hasLastupdated = function() {
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
 * repeated DataAppCondition conditions = 7;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition, 7));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus.prototype.clearConditionsList = function() {
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
    hierarchyvaluesMap: (f = msg.getHierarchyvaluesMap()) ? f.toObject(includeInstance, undefined) : [],
    horizon: (f = msg.getHorizon()) && github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.PeriodSpec.toObject(includeInstance, f)
  };

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
    case 1:
      var value = msg.getHierarchyvaluesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 2:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.PeriodSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.PeriodSpec.deserializeBinaryFromReader);
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
  f = message.getHierarchyvaluesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getHorizon();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.PeriodSpec.serializeBinaryToWriter
    );
  }
};


/**
 * map<string, string> hierarchyValues = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.prototype.getHierarchyvaluesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.prototype.clearHierarchyvaluesMap = function() {
  this.getHierarchyvaluesMap().clear();
  return this;};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.PeriodSpec horizon = 2;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.PeriodSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.prototype.getHorizon = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.PeriodSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.PeriodSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.PeriodSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.prototype.setHorizon = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.prototype.clearHorizon = function() {
  return this.setHorizon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.prototype.hasHorizon = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    forwardcurtainref: (f = msg.getForwardcurtainref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    backwardcurtainref: (f = msg.getBackwardcurtainref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setForwardcurtainref(value);
      break;
    case 3:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setBackwardcurtainref(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getForwardcurtainref();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getBackwardcurtainref();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference forwardCurtainRef = 2;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.prototype.getForwardcurtainref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 2));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.prototype.setForwardcurtainref = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.prototype.clearForwardcurtainref = function() {
  return this.setForwardcurtainref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.prototype.hasForwardcurtainref = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference backwardCurtainRef = 3;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.prototype.getBackwardcurtainref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 3));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.prototype.setBackwardcurtainref = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.prototype.clearBackwardcurtainref = function() {
  return this.setBackwardcurtainref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.prototype.hasBackwardcurtainref = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    ref: (f = msg.getRef()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    status: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRef();
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
};


/**
 * optional k8s.io.api.core.v1.ObjectReference ref = 1;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.prototype.getRef = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 1));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.prototype.setRef = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.prototype.hasRef = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.repeatedFields_ = [18,19];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    imagename: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    deploymentref: (f = msg.getDeploymentref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    serviceref: (f = msg.getServiceref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    hparef: (f = msg.getHparef()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    p50: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f,
    p95: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    p99: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f,
    lastpredictiontime: (f = msg.getLastpredictiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    dailypredictionavg: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    lastfailure: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    phase: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
    deployedat: (f = msg.getDeployedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    releasedat: (f = msg.getReleasedat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    datadrift: (f = jspb.Message.getBooleanField(msg, 16)) == null ? undefined : f,
    conceptdrift: (f = jspb.Message.getBooleanField(msg, 17)) == null ? undefined : f,
    lastdailypredictionsList: (f = jspb.Message.getRepeatedField(msg, 18)) == null ? undefined : f,
    objectstatusesList: jspb.Message.toObjectList(msg.getObjectstatusesList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.toObject, includeInstance)
  };

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
      msg.setImagename(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setDeploymentref(value);
      break;
    case 5:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setServiceref(value);
      break;
    case 6:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setHparef(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setP50(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setP95(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setP99(value);
      break;
    case 10:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastpredictiontime(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDailypredictionavg(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastfailure(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhase(value);
      break;
    case 14:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setDeployedat(value);
      break;
    case 15:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setReleasedat(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDatadrift(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConceptdrift(value);
      break;
    case 18:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addLastdailypredictions(values[i]);
      }
      break;
    case 19:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.deserializeBinaryFromReader);
      msg.addObjectstatuses(value);
      break;
    default:
      reader.skipField();
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
  f = message.getDeploymentref();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getServiceref();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getHparef();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
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
  f = message.getLastpredictiontime();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt32(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getDeployedat();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getReleasedat();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBool(
      16,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getLastdailypredictionsList();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      18,
      f
    );
  }
  f = message.getObjectstatusesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.serializeBinaryToWriter
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
 * optional string imageName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getImagename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setImagename = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearImagename = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasImagename = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference deploymentRef = 4;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getDeploymentref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 4));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setDeploymentref = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
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
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference serviceRef = 5;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getServiceref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 5));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setServiceref = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
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
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference hpaRef = 6;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getHparef = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 6));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setHparef = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
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
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double p50 = 7;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getP50 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setP50 = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearP50 = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasP50 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double p95 = 8;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getP95 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setP95 = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearP95 = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasP95 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double p99 = 9;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getP99 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setP99 = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearP99 = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasP99 = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastPredictionTime = 10;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getLastpredictiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 10));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setLastpredictiontime = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearLastpredictiontime = function() {
  return this.setLastpredictiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasLastpredictiontime = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int32 dailyPredictionAvg = 11;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getDailypredictionavg = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setDailypredictionavg = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearDailypredictionavg = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasDailypredictionavg = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string lastFailure = 12;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getLastfailure = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setLastfailure = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearLastfailure = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasLastfailure = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string phase = 13;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setPhase = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearPhase = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasPhase = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time deployedAt = 14;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getDeployedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 14));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setDeployedat = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
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
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time releasedAt = 15;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getReleasedat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 15));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setReleasedat = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearReleasedat = function() {
  return this.setReleasedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasReleasedat = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bool dataDrift = 16;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getDatadrift = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setDatadrift = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearDatadrift = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasDatadrift = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool conceptDrift = 17;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getConceptdrift = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setConceptdrift = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearConceptdrift = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.hasConceptdrift = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * repeated int32 lastDailyPredictions = 18;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getLastdailypredictionsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 18));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setLastdailypredictionsList = function(value) {
  return jspb.Message.setField(this, 18, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.addLastdailypredictions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 18, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearLastdailypredictionsList = function() {
  return this.setLastdailypredictionsList([]);
};


/**
 * repeated KubernetesObjectStatus objectStatuses = 19;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.getObjectstatusesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus, 19));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.setObjectstatusesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.addObjectstatuses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.prototype.clearObjectstatusesList = function() {
  return this.setObjectstatusesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    modelversion: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    liveat: (f = msg.getLiveat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    retiredat: (f = msg.getRetiredat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    avgdailyprediction: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    avglatency: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLiveat(value);
      break;
    case 4:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setRetiredat(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAvgdailyprediction(value);
      break;
    case 6:
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getLiveat();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getRetiredat();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
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
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional string modelName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.getModelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.setModelname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.clearModelname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.hasModelname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string modelVersion = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.getModelversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.setModelversion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.clearModelversion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.hasModelversion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time liveAt = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.getLiveat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.setLiveat = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.clearLiveat = function() {
  return this.setLiveat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.hasLiveat = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time retiredAt = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.getRetiredat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.setRetiredat = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.clearRetiredat = function() {
  return this.setRetiredat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.hasRetiredat = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 avgDailyPrediction = 5;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.getAvgdailyprediction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.setAvgdailyprediction = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.clearAvgdailyprediction = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.hasAvgdailyprediction = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double avgLatency = 6;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.getAvglatency = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.setAvglatency = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.clearAvglatency = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.hasAvglatency = function() {
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
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    serverless: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f
  };

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
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setServerless(value);
      break;
    default:
      reader.skipField();
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
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
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
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    samplepercent: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    schedule: (f = msg.getSchedule()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.toObject(includeInstance, f),
    notifierref: (f = msg.getNotifierref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    validationsList: jspb.Message.toObjectList(msg.getValidationsList(),
    github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidation.toObject, includeInstance),
    outlierdetectionmodelref: (f = msg.getOutlierdetectionmodelref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.deserializeBinaryFromReader);
      msg.setSchedule(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setNotifierref(value);
      break;
    case 5:
      var value = new github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidation.deserializeBinaryFromReader);
      msg.addValidations(value);
      break;
    case 6:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setOutlierdetectionmodelref(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.serializeBinaryToWriter
    );
  }
  f = message.getNotifierref();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getValidationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidation.serializeBinaryToWriter
    );
  }
  f = message.getOutlierdetectionmodelref();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 samplePercent = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.getSamplepercent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.setSamplepercent = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.clearSamplepercent = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.hasSamplepercent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule schedule = 3;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.getSchedule = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule, 3));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.setSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.clearSchedule = function() {
  return this.setSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference notifierRef = 4;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.getNotifierref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 4));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.setNotifierref = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.clearNotifierref = function() {
  return this.setNotifierref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.hasNotifierref = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelValidation validations = 5;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelValidation>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.getValidationsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelValidation>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidation, 5));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelValidation>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.setValidationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelValidation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelValidation}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.addValidations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelValidation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.clearValidationsList = function() {
  return this.setValidationsList([]);
};


/**
 * optional k8s.io.api.core.v1.ObjectReference outlierDetectionModelRef = 6;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.getOutlierdetectionmodelref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 6));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.setOutlierdetectionmodelref = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.clearOutlierdetectionmodelref = function() {
  return this.setOutlierdetectionmodelref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.hasOutlierdetectionmodelref = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    monitorlastattemptat: (f = msg.getMonitorlastattemptat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    monitorlastscore: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    monitorlastlatency: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setMonitorlastattemptat(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMonitorlastscore(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMonitorlastlatency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMonitorlastattemptat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
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
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time monitorLastAttemptAt = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.getMonitorlastattemptat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.setMonitorlastattemptat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.clearMonitorlastattemptat = function() {
  return this.setMonitorlastattemptat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.hasMonitorlastattemptat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double monitorLastScore = 2;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.getMonitorlastscore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.setMonitorlastscore = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.clearMonitorlastscore = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.hasMonitorlastscore = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double monitorLastLatency = 3;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.getMonitorlastlatency = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.setMonitorlastlatency = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.clearMonitorlastlatency = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.hasMonitorlastlatency = function() {
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





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus.prototype.getLastaccessed = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus.prototype.setLastaccessed = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus.prototype.clearLastaccessed = function() {
  return this.setLastaccessed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus.prototype.hasLastaccessed = function() {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
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
    logrequests: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    logresponses: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f
  };

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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLogrequests(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLogresponses(value);
      break;
    default:
      reader.skipField();
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
 * optional bool logRequests = 3;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.getLogrequests = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.setLogrequests = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.clearLogrequests = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.hasLogrequests = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool logResponses = 4;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.getLogresponses = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.setLogresponses = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.clearLogresponses = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.prototype.hasLogresponses = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    versionname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    predictorname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    labeled: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    forecast: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    input: (f = msg.getInput()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataInputSpec.toObject(includeInstance, f),
    output: (f = msg.getOutput()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec.toObject(includeInstance, f),
    testsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    resources: (f = msg.getResources()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.toObject(includeInstance, f),
    activedeadlineseconds: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    priority: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    aborted: (f = jspb.Message.getBooleanField(msg, 13)) == null ? undefined : f,
    ttl: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    forecastinfo: (f = msg.getForecastinfo()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.toObject(includeInstance, f),
    cronpredictorname: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f,
    servingsiteref: (f = msg.getServingsiteref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f)
  };

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
      msg.setVersionname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPredictorname(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLabeled(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForecast(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataInputSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataInputSpec.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 7:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec.deserializeBinaryFromReader);
      msg.setOutput(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addTests(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 10:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.deserializeBinaryFromReader);
      msg.setResources(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setActivedeadlineseconds(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPriority(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAborted(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTtl(value);
      break;
    case 15:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.deserializeBinaryFromReader);
      msg.setForecastinfo(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setCronpredictorname(value);
      break;
    case 17:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setServingsiteref(value);
      break;
    default:
      reader.skipField();
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
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataInputSpec.serializeBinaryToWriter
    );
  }
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec.serializeBinaryToWriter
    );
  }
  f = message.getTestsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt64(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getForecastinfo();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getServingsiteref();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
};


/**
 * optional string versionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getVersionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setVersionname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearVersionname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasVersionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string predictorName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getPredictorname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setPredictorname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearPredictorname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasPredictorname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool labeled = 3;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getLabeled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setLabeled = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearLabeled = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasLabeled = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool forecast = 4;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getForecast = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setForecast = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearForecast = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasForecast = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataInputSpec input = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataInputSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getInput = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataInputSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataInputSpec, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataInputSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
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
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataOutputSpec output = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataOutputSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getOutput = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataOutputSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataOutputSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setOutput = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
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
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string tests = 8;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getTestsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setTestsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.addTests = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearTestsList = function() {
  return this.setTestsList([]);
};


/**
 * optional string owner = 9;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec resources = 10;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getResources = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec, 10));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
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
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int64 activeDeadlineSeconds = 11;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getActivedeadlineseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setActivedeadlineseconds = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearActivedeadlineseconds = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasActivedeadlineseconds = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string priority = 12;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getPriority = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setPriority = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearPriority = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasPriority = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool aborted = 13;
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getAborted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setAborted = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearAborted = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasAborted = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int32 ttl = 14;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setTtl = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearTtl = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasTtl = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ForecastSpec forecastInfo = 15;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getForecastinfo = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec, 15));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setForecastinfo = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearForecastinfo = function() {
  return this.setForecastinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasForecastinfo = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string cronPredictorName = 16;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getCronpredictorname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setCronpredictorname = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearCronpredictorname = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasCronpredictorname = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference servingsiteRef = 17;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getServingsiteref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 17));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setServingsiteref = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
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
  return jspb.Message.getField(this, 17) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.repeatedFields_ = [4,12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    starttime: (f = msg.getStarttime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    endtime: (f = msg.getEndtime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    phase: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.toObject, includeInstance),
    observedgeneration: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    rows: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    triggeredby: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    logs: (f = msg.getLogs()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.toObject(includeInstance, f),
    lastupdated: (f = msg.getLastupdated()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    failurereason: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    failuremessage: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.toObject, includeInstance)
  };

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
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 2:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setEndtime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhase(value);
      break;
    case 4:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRows(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggeredby(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.deserializeBinaryFromReader);
      msg.setLogs(value);
      break;
    case 9:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastupdated(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailurereason(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 12:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.deserializeBinaryFromReader);
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
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getEndtime();
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
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLogs();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.serializeBinaryToWriter
    );
  }
  f = message.getLastupdated();
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
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time startTime = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getStarttime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setStarttime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearStarttime = function() {
  return this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time endTime = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getEndtime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setEndtime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearEndtime = function() {
  return this.setEndtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasEndtime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string phase = 3;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setPhase = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearPhase = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasPhase = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement results = 4;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, 4));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};


/**
 * optional int64 observedGeneration = 5;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 rows = 6;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setRows = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearRows = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasRows = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string triggeredBy = 7;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getTriggeredby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setTriggeredby = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearTriggeredby = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasTriggeredby = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Logs logs = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Logs}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getLogs = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Logs} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Logs|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setLogs = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearLogs = function() {
  return this.setLogs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasLogs = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastUpdated = 9;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getLastupdated = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 9));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setLastupdated = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearLastupdated = function() {
  return this.setLastupdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasLastupdated = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string failureReason = 10;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getFailurereason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setFailurereason = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearFailurereason = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasFailurereason = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string failureMessage = 11;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated PredictionCondition conditions = 12;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition, 12));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCondition, opt_index);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional PredictionSpec spec = 1;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec, 1));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionTemplate.prototype.hasSpec = function() {
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





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition;
  return proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    productref: (f = msg.getProductref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    servingsiteref: (f = msg.getServingsiteref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    template: (f = msg.getTemplate()) && k8s_io_api_core_v1_generated_pb.PodTemplate.toObject(includeInstance, f),
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.toObject, includeInstance),
    progressive: (f = msg.getProgressive()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.toObject(includeInstance, f),
    artifactsfolder: (f = msg.getArtifactsfolder()) && github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f),
    access: (f = msg.getAccess()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.toObject(includeInstance, f),
    replicas: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    autoscaling: (f = msg.getAutoscaling()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.toObject(includeInstance, f),
    owner: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    resources: (f = msg.getResources()) && github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.toObject(includeInstance, f),
    cache: (f = msg.getCache()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.toObject(includeInstance, f),
    store: (f = msg.getStore()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.toObject(includeInstance, f),
    serving: (f = msg.getServing()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.toObject(includeInstance, f),
    task: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    predictionthreshold: (f = jspb.Message.getOptionalFloatingPointField(msg, 20)) == null ? undefined : f,
    monitor: (f = msg.getMonitor()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.toObject(includeInstance, f),
    predictionlogging: (f = msg.getPredictionlogging()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.toObject(includeInstance, f),
    humans: (f = msg.getHumans()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.toObject(includeInstance, f)
  };

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
      msg.setDescription(value);
      break;
    case 3:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setProductref(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setServingsiteref(value);
      break;
    case 5:
      var value = new k8s_io_api_core_v1_generated_pb.PodTemplate;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.PodTemplate.deserializeBinaryFromReader);
      msg.setTemplate(value);
      break;
    case 6:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    case 7:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.deserializeBinaryFromReader);
      msg.setProgressive(value);
      break;
    case 8:
      var value = new github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.deserializeBinaryFromReader);
      msg.setArtifactsfolder(value);
      break;
    case 9:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.deserializeBinaryFromReader);
      msg.setAccess(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReplicas(value);
      break;
    case 11:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.deserializeBinaryFromReader);
      msg.setAutoscaling(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 13:
      var value = new github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec;
      reader.readMessage(value,github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.deserializeBinaryFromReader);
      msg.setResources(value);
      break;
    case 14:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.deserializeBinaryFromReader);
      msg.setCache(value);
      break;
    case 15:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.deserializeBinaryFromReader);
      msg.setStore(value);
      break;
    case 16:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec.deserializeBinaryFromReader);
      msg.setServing(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setTask(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPredictionthreshold(value);
      break;
    case 21:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.deserializeBinaryFromReader);
      msg.setMonitor(value);
      break;
    case 22:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.deserializeBinaryFromReader);
      msg.setPredictionlogging(value);
      break;
    case 23:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.deserializeBinaryFromReader);
      msg.setHumans(value);
      break;
    default:
      reader.skipField();
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
  f = message.getProductref();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getServingsiteref();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      k8s_io_api_core_v1_generated_pb.PodTemplate.serializeBinaryToWriter
    );
  }
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.serializeBinaryToWriter
    );
  }
  f = message.getProgressive();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.serializeBinaryToWriter
    );
  }
  f = message.getArtifactsfolder();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.serializeBinaryToWriter
    );
  }
  f = message.getAccess();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getAutoscaling();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.serializeBinaryToWriter
    );
  }
  f = message.getCache();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.serializeBinaryToWriter
    );
  }
  f = message.getStore();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec.serializeBinaryToWriter
    );
  }
  f = message.getServing();
  if (f != null) {
    writer.writeMessage(
      16,
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
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeDouble(
      20,
      f
    );
  }
  f = message.getMonitor();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec.serializeBinaryToWriter
    );
  }
  f = message.getPredictionlogging();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec.serializeBinaryToWriter
    );
  }
  f = message.getHumans();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec.serializeBinaryToWriter
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
 * optional string description = 2;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference productRef = 3;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getProductref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 3));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setProductref = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
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
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference servingsiteRef = 4;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getServingsiteref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 4));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setServingsiteref = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
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
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional k8s.io.api.core.v1.PodTemplate template = 5;
 * @return {?proto.k8s.io.api.core.v1.PodTemplate}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getTemplate = function() {
  return /** @type{?proto.k8s.io.api.core.v1.PodTemplate} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.PodTemplate, 5));
};


/**
 * @param {?proto.k8s.io.api.core.v1.PodTemplate|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec models = 6;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec, 6));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearModelsList = function() {
  return this.setModelsList([]);
};


/**
 * optional ProgressiveSpec progressive = 7;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getProgressive = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec, 7));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setProgressive = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
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
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataLocation artifactsFolder = 8;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getArtifactsfolder = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation, 8));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataLocation|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setArtifactsfolder = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearArtifactsfolder = function() {
  return this.setArtifactsfolder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasArtifactsfolder = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional AccessSpec access = 9;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getAccess = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec, 9));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AccessSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setAccess = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
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
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 replicas = 10;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getReplicas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setReplicas = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearReplicas = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasReplicas = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional AutoScalingSpec autoScaling = 11;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getAutoscaling = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec, 11));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setAutoscaling = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
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
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string owner = 12;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec resources = 13;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getResources = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec, 13));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
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
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional PredictionCacheSpec cache = 14;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getCache = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec, 14));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setCache = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
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
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional OnlineFeatureStoreSpec store = 15;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getStore = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec, 15));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setStore = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
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
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ModelServingSpec serving = 16;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getServing = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec, 16));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setServing = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
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
  return jspb.Message.getField(this, 16) != null;
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
 * optional double predictionThreshold = 20;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getPredictionthreshold = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 20, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setPredictionthreshold = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearPredictionthreshold = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasPredictionthreshold = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional MonitorSpec monitor = 21;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getMonitor = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec, 21));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MonitorSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setMonitor = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearMonitor = function() {
  return this.setMonitor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasMonitor = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional PredictionLoggingSpec predictionLogging = 22;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getPredictionlogging = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec, 22));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setPredictionlogging = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
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
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional HumanInTheLoopSpec humans = 23;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getHumans = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec, 23));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.HumanInTheLoopSpec|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setHumans = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearHumans = function() {
  return this.setHumans(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasHumans = function() {
  return jspb.Message.getField(this, 23) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.repeatedFields_ = [2,3,12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.toObject, includeInstance),
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.toObject, includeInstance),
    predictorlet: (f = msg.getPredictorlet()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.toObject(includeInstance, f),
    cache: (f = msg.getCache()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus.toObject(includeInstance, f),
    onlinestore: (f = msg.getOnlinestore()) && proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.toObject(includeInstance, f),
    lastupdated: (f = msg.getLastupdated()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    endpoint: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    failurereason: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    failuremessage: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    loadbalancerstatus: (f = msg.getLoadbalancerstatus()) && k8s_io_api_core_v1_generated_pb.LoadBalancerStatus.toObject(includeInstance, f),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.toObject, includeInstance)
  };

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
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.deserializeBinaryFromReader);
      msg.addHistory(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.deserializeBinaryFromReader);
      msg.setPredictorlet(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus.deserializeBinaryFromReader);
      msg.setCache(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.deserializeBinaryFromReader);
      msg.setOnlinestore(value);
      break;
    case 7:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastupdated(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailurereason(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailuremessage(value);
      break;
    case 11:
      var value = new k8s_io_api_core_v1_generated_pb.LoadBalancerStatus;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.LoadBalancerStatus.deserializeBinaryFromReader);
      msg.setLoadbalancerstatus(value);
      break;
    case 12:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.deserializeBinaryFromReader);
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
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord.serializeBinaryToWriter
    );
  }
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.serializeBinaryToWriter
    );
  }
  f = message.getPredictorlet();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.serializeBinaryToWriter
    );
  }
  f = message.getCache();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus.serializeBinaryToWriter
    );
  }
  f = message.getOnlinestore();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus.serializeBinaryToWriter
    );
  }
  f = message.getLastupdated();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
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
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getLoadbalancerstatus();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      k8s_io_api_core_v1_generated_pb.LoadBalancerStatus.serializeBinaryToWriter
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition.serializeBinaryToWriter
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
 * repeated ModelRecord history = 2;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getHistoryList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setHistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.addHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearHistoryList = function() {
  return this.setHistoryList([]);
};


/**
 * repeated ModelDeploymentStatus models = 3;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus, 3));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearModelsList = function() {
  return this.setModelsList([]);
};


/**
 * optional PredictorletStatus predictorlet = 4;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getPredictorlet = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus, 4));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setPredictorlet = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearPredictorlet = function() {
  return this.setPredictorlet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasPredictorlet = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PredictionCacheStatus cache = 5;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getCache = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus, 5));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setCache = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearCache = function() {
  return this.setCache(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasCache = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional OnlineStoreStatus onlineStore = 6;
 * @return {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getOnlinestore = function() {
  return /** @type{?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus, 6));
};


/**
 * @param {?proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setOnlinestore = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearOnlinestore = function() {
  return this.setOnlinestore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasOnlinestore = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastUpdated = 7;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getLastupdated = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 7));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setLastupdated = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearLastupdated = function() {
  return this.setLastupdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasLastupdated = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string endPoint = 8;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setEndpoint = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearEndpoint = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasEndpoint = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string failureReason = 9;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getFailurereason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setFailurereason = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearFailurereason = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasFailurereason = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string failureMessage = 10;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getFailuremessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setFailuremessage = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearFailuremessage = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasFailuremessage = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional k8s.io.api.core.v1.LoadBalancerStatus loadBalancerStatus = 11;
 * @return {?proto.k8s.io.api.core.v1.LoadBalancerStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getLoadbalancerstatus = function() {
  return /** @type{?proto.k8s.io.api.core.v1.LoadBalancerStatus} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.LoadBalancerStatus, 11));
};


/**
 * @param {?proto.k8s.io.api.core.v1.LoadBalancerStatus|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setLoadbalancerstatus = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
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
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated PredictorCondition conditions = 12;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition, 12));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.repeatedFields_ = [9,12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    imagename: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    deploymentref: (f = msg.getDeploymentref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    serviceref: (f = msg.getServiceref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    p50: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    current95: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    current99: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    dailypredictionavg: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    totalpredictions: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    lastdailypredictionsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    lastpredictiontime: (f = msg.getLastpredictiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    lastfailure: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    objectstatusesList: jspb.Message.toObjectList(msg.getObjectstatusesList(),
    proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.toObject, includeInstance)
  };

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
      var value = /** @type {string} */ (reader.readString());
      msg.setImagename(value);
      break;
    case 2:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setDeploymentref(value);
      break;
    case 3:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setServiceref(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setP50(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCurrent95(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCurrent99(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDailypredictionavg(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalpredictions(value);
      break;
    case 9:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addLastdailypredictions(values[i]);
      }
      break;
    case 10:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastpredictiontime(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastfailure(value);
      break;
    case 12:
      var value = new proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus;
      reader.readMessage(value,proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.deserializeBinaryFromReader);
      msg.addObjectstatuses(value);
      break;
    default:
      reader.skipField();
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
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeploymentref();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getServiceref();
  if (f != null) {
    writer.writeMessage(
      3,
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
  f = message.getLastdailypredictionsList();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      9,
      f
    );
  }
  f = message.getLastpredictiontime();
  if (f != null) {
    writer.writeMessage(
      10,
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
  f = message.getObjectstatusesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional string imageName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getImagename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setImagename = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.clearImagename = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.hasImagename = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference deploymentRef = 2;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getDeploymentref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 2));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setDeploymentref = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
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
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference serviceRef = 3;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getServiceref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 3));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setServiceref = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
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
 * optional double current95 = 5;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getCurrent95 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setCurrent95 = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.clearCurrent95 = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.hasCurrent95 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double current99 = 6;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getCurrent99 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setCurrent99 = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.clearCurrent99 = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.hasCurrent99 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 dailyPredictionAvg = 7;
 * @return {number}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getDailypredictionavg = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setDailypredictionavg = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.clearDailypredictionavg = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.hasDailypredictionavg = function() {
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
 * repeated int32 lastDailyPredictions = 9;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getLastdailypredictionsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setLastdailypredictionsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.addLastdailypredictions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.clearLastdailypredictionsList = function() {
  return this.setLastdailypredictionsList([]);
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastPredictionTime = 10;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getLastpredictiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 10));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setLastpredictiontime = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
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
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string lastFailure = 11;
 * @return {string}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getLastfailure = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setLastfailure = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.clearLastfailure = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.hasLastfailure = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated KubernetesObjectStatus objectStatuses = 12;
 * @return {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus>}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.getObjectstatusesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus, 12));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus>} value
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
*/
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.setObjectstatusesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus}
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.addObjectstatuses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus} returns this
 */
proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus.prototype.clearObjectstatusesList = function() {
  return this.setObjectstatusesList([]);
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


goog.object.extend(exports, proto.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1);
