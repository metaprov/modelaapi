// source: github.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1/generated.proto
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
var github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb = require('../../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb);
var github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb = require('../../../../../../../github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated_pb.js');
goog.object.extend(proto, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb);
var k8s_io_api_core_v1_generated_pb = require('../../../../../../../k8s.io/api/core/v1/generated_pb.js');
goog.object.extend(proto, k8s_io_api_core_v1_generated_pb);
var k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb);
var k8s_io_apimachinery_pkg_runtime_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_runtime_generated_pb);
var k8s_io_apimachinery_pkg_runtime_schema_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_runtime_schema_generated_pb);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 minReplicas = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.getMinreplicas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.setMinreplicas = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.clearMinreplicas = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.hasMinreplicas = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 maxReplicas = 3;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.getMaxreplicas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.setMaxreplicas = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.clearMaxreplicas = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.hasMaxreplicas = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 cpuAvgUtilization = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.getCpuavgutilization = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.setCpuavgutilization = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.clearCpuavgutilization = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.hasCpuavgutilization = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 memAvgUtilization = 5;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.getMemavgutilization = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.setMemavgutilization = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.clearMemavgutilization = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.prototype.hasMemavgutilization = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CronPredictionSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CronPredictionStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.prototype.hasStatus = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated CronPrediction items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPrediction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    schedule: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    template: (f = msg.getTemplate()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.toObject(includeInstance, f),
    priority: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    paused: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setSchedule(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.deserializeBinaryFromReader);
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.serializeBinaryToWriter
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
};


/**
 * optional string versionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.getVersionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.setVersionname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.clearVersionname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.hasVersionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string owner = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string schedule = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.getSchedule = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.setSchedule = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.clearSchedule = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PredictionTemplate template = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.getTemplate = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate, 4));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string priority = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.getPriority = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.setPriority = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.clearPriority = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.hasPriority = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool paused = 6;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.getPaused = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.setPaused = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.clearPaused = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.hasPaused = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastrun: (f = msg.getLastrun()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    lastupdated: (f = msg.getLastupdated()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    observedgeneration: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastrun(value);
      break;
    case 2:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastupdated(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastrun();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
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
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastRun = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.getLastrun = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.setLastrun = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.clearLastrun = function() {
  return this.setLastrun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.hasLastrun = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastUpdated = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.getLastupdated = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.setLastupdated = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.clearLastupdated = function() {
  return this.setLastupdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.hasLastupdated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 observedGeneration = 3;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated CronPredictionCondition conditions = 4;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition, 4));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CurtainSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CurtainStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.prototype.hasStatus = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Curtain items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Curtain, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainList.prototype.clearItemsList = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    versionname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    servingsitename: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    datasetname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string versionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.getVersionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.setVersionname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.clearVersionname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.hasVersionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string servingsiteName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.getServingsitename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.setServingsitename = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.clearServingsitename = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.hasServingsitename = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string datasetName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.getDatasetname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.setDatasetname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.clearDatasetname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.hasDatasetname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string question = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.getQuestion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.setQuestion = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.clearQuestion = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.hasQuestion = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string notifierName = 7;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.getNotifiername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.setNotifiername = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.clearNotifiername = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.hasNotifiername = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string owner = 8;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    observedgeneration: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 observedGeneration = 1;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated CurtainCondition conditions = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CurtainSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CurtainTemplateSpec.prototype.hasSpec = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.getModelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.setModelname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.clearModelname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.hasModelname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string modelVersion = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.getModelversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.setModelversion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.clearModelversion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.hasModelversion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time liveAt = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.getLiveat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.setLiveat = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.clearLiveat = function() {
  return this.setLiveat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.hasLiveat = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time retiredAt = 4;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.getRetiredat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 4));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.setRetiredat = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.clearRetiredat = function() {
  return this.setRetiredat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.hasRetiredat = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 avgDailyPrediction = 5;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.getAvgdailyprediction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.setAvgdailyprediction = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.clearAvgdailyprediction = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.hasAvgdailyprediction = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double avgLatency = 6;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.getAvglatency = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.setAvglatency = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.clearAvglatency = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.prototype.hasAvglatency = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    sampleprecent: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    schedule: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    notifiername: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    validationsList: jspb.Message.toObjectList(msg.getValidationsList(),
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSampleprecent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchedule(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotifiername(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidation;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidation.deserializeBinaryFromReader);
      msg.addValidations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getValidationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidation.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 samplePrecent = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.getSampleprecent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.setSampleprecent = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.clearSampleprecent = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.hasSampleprecent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string schedule = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.getSchedule = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.setSchedule = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.clearSchedule = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string notifierName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.getNotifiername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.setNotifiername = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.clearNotifiername = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.hasNotifiername = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelValidation validations = 5;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelValidation>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.getValidationsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelValidation>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidation, 5));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelValidation>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.setValidationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelValidation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelValidation}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.addValidations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelValidation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.clearValidationsList = function() {
  return this.setValidationsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastprediction: (f = msg.getLastprediction()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    validationresultsList: jspb.Message.toObjectList(msg.getValidationresultsList(),
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidationResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastprediction(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidationResult;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidationResult.deserializeBinaryFromReader);
      msg.addValidationresults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastprediction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getValidationresultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidationResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastPrediction = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.getLastprediction = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.setLastprediction = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.clearLastprediction = function() {
  return this.setLastprediction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.hasLastprediction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelValidationResult validationResults = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelValidationResult>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.getValidationresultsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelValidationResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelValidationResult, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelValidationResult>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.setValidationresultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelValidationResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelValidationResult}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.addValidationresults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelValidationResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.clearValidationresultsList = function() {
  return this.setValidationresultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    active: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    servicename: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setServicename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.serializeBinaryToWriter = function(message, writer) {
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
 * optional bool active = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.prototype.setActive = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.prototype.clearActive = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.prototype.hasActive = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string serviceName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.prototype.getServicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.prototype.setServicename = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.prototype.clearServicename = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.prototype.hasServicename = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PredictionSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PredictionStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.prototype.hasStatus = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    active: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    servicename: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setServicename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.serializeBinaryToWriter = function(message, writer) {
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
 * optional bool active = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.setActive = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.clearActive = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.hasActive = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string serviceName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.getServicename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.setServicename = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.clearServicename = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.prototype.hasServicename = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Prediction items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    predictorname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    labeled: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    datasetname: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    input: (f = msg.getInput()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f),
    output: (f = msg.getOutput()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec.toObject(includeInstance, f),
    testsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    workloadclassname: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    activedeadlineseconds: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    includefeatures: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f,
    xai: (f = jspb.Message.getBooleanField(msg, 12)) == null ? undefined : f,
    priority: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetname(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec.deserializeBinaryFromReader);
      msg.setOutput(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addTests(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadclassname(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setActivedeadlineseconds(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludefeatures(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setXai(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setPriority(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.serializeBinaryToWriter
    );
  }
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec.serializeBinaryToWriter
    );
  }
  f = message.getTestsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt64(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBool(
      12,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * optional string versionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getVersionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setVersionname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearVersionname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasVersionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string predictorName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getPredictorname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setPredictorname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearPredictorname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasPredictorname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool labeled = 3;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getLabeled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setLabeled = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearLabeled = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasLabeled = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string datasetName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getDatasetname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setDatasetname = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearDatasetname = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasDatasetname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation input = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getInput = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation, 5));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasInput = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataOutputSpec output = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataOutputSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getOutput = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataOutputSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataOutputSpec, 6));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataOutputSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setOutput = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string tests = 7;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getTestsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setTestsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.addTests = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearTestsList = function() {
  return this.setTestsList([]);
};


/**
 * optional string owner = 8;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string workloadClassName = 9;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getWorkloadclassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setWorkloadclassname = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearWorkloadclassname = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasWorkloadclassname = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 activeDeadlineSeconds = 10;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getActivedeadlineseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setActivedeadlineseconds = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearActivedeadlineseconds = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasActivedeadlineseconds = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool includeFeatures = 11;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getIncludefeatures = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setIncludefeatures = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearIncludefeatures = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasIncludefeatures = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool xai = 12;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getXai = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setXai = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearXai = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasXai = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string priority = 15;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getPriority = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.setPriority = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.clearPriority = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.hasPriority = function() {
  return jspb.Message.getField(this, 15) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.repeatedFields_ = [4,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    starttime: (f = msg.getStarttime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    endtime: (f = msg.getEndtime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    phase: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.toObject, includeInstance),
    observedgeneration: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    rows: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.deserializeBinaryFromReader);
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.serializeBinaryToWriter = function(message, writer) {
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
      github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.serializeBinaryToWriter
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
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time startTime = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getStarttime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setStarttime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearStarttime = function() {
  return this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time endTime = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getEndtime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setEndtime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearEndtime = function() {
  return this.setEndtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasEndtime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string phase = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setPhase = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearPhase = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasPhase = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Measurement results = 4;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Measurement>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Measurement>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, 4));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Measurement>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Measurement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Measurement}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Measurement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};


/**
 * optional int64 observedGeneration = 5;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 rows = 6;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setRows = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearRows = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasRows = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated PredictionCondition conditions = 7;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition, 7));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearConditionsList = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional PredictionSpec spec = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.prototype.hasSpec = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PredictorSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.prototype.setSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.prototype.clearSpec = function() {
  return this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PredictorStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.prototype.hasStatus = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    datadrift: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    conceptdrift: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    totalpredictions: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    avg: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    totalp95requests: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    medianresponsetime: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    lastdailypredictionsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setService(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDatadrift(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConceptdrift(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalpredictions(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAvg(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalp95requests(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMedianresponsetime(value);
      break;
    case 8:
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getLastdailypredictionsList();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      8,
      f
    );
  }
};


/**
 * optional bool service = 1;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.getService = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.setService = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.clearService = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.hasService = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool dataDrift = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.getDatadrift = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.setDatadrift = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.clearDatadrift = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.hasDatadrift = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool conceptDrift = 3;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.getConceptdrift = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.setConceptdrift = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.clearConceptdrift = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.hasConceptdrift = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 totalPredictions = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.getTotalpredictions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.setTotalpredictions = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.clearTotalpredictions = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.hasTotalpredictions = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 avg = 5;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.getAvg = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.setAvg = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.clearAvg = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.hasAvg = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 totalP95Requests = 6;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.getTotalp95requests = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.setTotalp95requests = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.clearTotalp95requests = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.hasTotalp95requests = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 medianResponseTime = 7;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.getMedianresponsetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.setMedianresponsetime = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.clearMedianresponsetime = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.hasMedianresponsetime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated int32 lastDailyPredictions = 8;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.getLastdailypredictionsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.setLastdailypredictionsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.addLastdailypredictions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.clearLastdailypredictionsList = function() {
  return this.setLastdailypredictionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.serializeBinaryToWriter = function(message, writer) {
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Predictor items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Predictor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    description: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    productref: (f = msg.getProductref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    servingsiteref: (f = msg.getServingsiteref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    template: (f = msg.getTemplate()) && k8s_io_api_core_v1_generated_pb.PodTemplate.toObject(includeInstance, f),
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.toObject, includeInstance),
    progressive: (f = msg.getProgressive()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.toObject(includeInstance, f),
    artifactsfolder: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    port: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    path: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    accesstype: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    replicas: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    autoscaling: (f = msg.getAutoscaling()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.toObject(includeInstance, f),
    owner: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    workloadclassname: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
    cache: (f = msg.getCache()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.toObject(includeInstance, f),
    store: (f = msg.getStore()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.toObject(includeInstance, f),
    forewardcurtain: (f = jspb.Message.getField(msg, 18)) == null ? undefined : f,
    backwardcurtain: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    type: (f = jspb.Message.getField(msg, 20)) == null ? undefined : f,
    task: (f = jspb.Message.getField(msg, 21)) == null ? undefined : f,
    predictiontreshold: (f = jspb.Message.getOptionalFloatingPointField(msg, 22)) == null ? undefined : f,
    monitor: (f = msg.getMonitor()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    case 7:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.deserializeBinaryFromReader);
      msg.setProgressive(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setArtifactsfolder(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesstype(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReplicas(value);
      break;
    case 13:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.deserializeBinaryFromReader);
      msg.setAutoscaling(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadclassname(value);
      break;
    case 16:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.deserializeBinaryFromReader);
      msg.setCache(value);
      break;
    case 17:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.deserializeBinaryFromReader);
      msg.setStore(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setForewardcurtain(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackwardcurtain(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setTask(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPredictiontreshold(value);
      break;
    case 23:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.deserializeBinaryFromReader);
      msg.setMonitor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.serializeBinaryToWriter = function(message, writer) {
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
      github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.serializeBinaryToWriter
    );
  }
  f = message.getProgressive();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getCache();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.serializeBinaryToWriter
    );
  }
  f = message.getStore();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeString(
      18,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeString(
      19,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeString(
      20,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeString(
      21,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeDouble(
      22,
      f
    );
  }
  f = message.getMonitor();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string versionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getVersionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setVersionname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearVersionname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasVersionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference productRef = 3;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getProductref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 3));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setProductref = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearProductref = function() {
  return this.setProductref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasProductref = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference servingsiteRef = 4;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getServingsiteref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 4));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setServingsiteref = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearServingsiteref = function() {
  return this.setServingsiteref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasServingsiteref = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional k8s.io.api.core.v1.PodTemplate template = 5;
 * @return {?proto.k8s.io.api.core.v1.PodTemplate}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getTemplate = function() {
  return /** @type{?proto.k8s.io.api.core.v1.PodTemplate} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.PodTemplate, 5));
};


/**
 * @param {?proto.k8s.io.api.core.v1.PodTemplate|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec models = 6;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec, 6));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearModelsList = function() {
  return this.setModelsList([]);
};


/**
 * optional ProgressiveSpec progressive = 7;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getProgressive = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec, 7));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setProgressive = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearProgressive = function() {
  return this.setProgressive(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasProgressive = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string artifactsFolder = 8;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getArtifactsfolder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setArtifactsfolder = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearArtifactsfolder = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasArtifactsfolder = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 port = 9;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearPort = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasPort = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string path = 10;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setPath = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearPath = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasPath = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string accessType = 11;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getAccesstype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setAccesstype = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearAccesstype = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasAccesstype = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 replicas = 12;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getReplicas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setReplicas = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearReplicas = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasReplicas = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional AutoScaling autoScaling = 13;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getAutoscaling = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling, 13));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.AutoScaling|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setAutoscaling = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearAutoscaling = function() {
  return this.setAutoscaling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasAutoscaling = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string owner = 14;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string workloadClassName = 15;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getWorkloadclassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setWorkloadclassname = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearWorkloadclassname = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasWorkloadclassname = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional PredictionCacheSpec cache = 16;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getCache = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec, 16));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setCache = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearCache = function() {
  return this.setCache(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasCache = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional OnlineFeaturestoreSpec store = 17;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getStore = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec, 17));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setStore = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearStore = function() {
  return this.setStore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasStore = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string forewardCurtain = 18;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getForewardcurtain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setForewardcurtain = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearForewardcurtain = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasForewardcurtain = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string backwardCurtain = 19;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getBackwardcurtain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setBackwardcurtain = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearBackwardcurtain = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasBackwardcurtain = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional string type = 20;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setType = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearType = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasType = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional string task = 21;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getTask = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setTask = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearTask = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasTask = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional double predictionTreshold = 22;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getPredictiontreshold = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 22, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setPredictiontreshold = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearPredictiontreshold = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasPredictiontreshold = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional MonitorSpec monitor = 23;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getMonitor = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec, 23));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setMonitor = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearMonitor = function() {
  return this.setMonitor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasMonitor = function() {
  return jspb.Message.getField(this, 23) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.repeatedFields_ = [1,9,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelstatusList: jspb.Message.toObjectList(msg.getModelstatusList(),
    github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentStatus.toObject, includeInstance),
    monitorlastattemptat: (f = msg.getMonitorlastattemptat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Timestamp.toObject(includeInstance, f),
    monitorlastscore: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    monitorlastlatency: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    health: (f = msg.getHealth()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.toObject(includeInstance, f),
    observedgeneration: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    historyList: jspb.Message.toObjectList(msg.getHistoryList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.toObject, includeInstance),
    monitorstatus: (f = msg.getMonitorstatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.toObject(includeInstance, f),
    lastupdated: (f = msg.getLastupdated()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    targetcolumn: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    positivelabel: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
    negativelabel: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentStatus;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentStatus.deserializeBinaryFromReader);
      msg.addModelstatus(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Timestamp;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Timestamp.deserializeBinaryFromReader);
      msg.setMonitorlastattemptat(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMonitorlastscore(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMonitorlastlatency(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.deserializeBinaryFromReader);
      msg.setHealth(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 9:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.deserializeBinaryFromReader);
      msg.addHistory(value);
      break;
    case 10:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.deserializeBinaryFromReader);
      msg.setMonitorstatus(value);
      break;
    case 11:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setLastupdated(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetcolumn(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setPositivelabel(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setNegativelabel(value);
      break;
    case 15:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelstatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentStatus.serializeBinaryToWriter
    );
  }
  f = message.getMonitorlastattemptat();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Timestamp.serializeBinaryToWriter
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
  f = message.getHealth();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord.serializeBinaryToWriter
    );
  }
  f = message.getMonitorstatus();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.serializeBinaryToWriter
    );
  }
  f = message.getLastupdated();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
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
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentStatus modelStatus = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentStatus>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getModelstatusList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentStatus, 1));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentStatus>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setModelstatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.addModelstatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearModelstatusList = function() {
  return this.setModelstatusList([]);
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp monitorLastAttemptAt = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getMonitorlastattemptat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Timestamp, 3));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Timestamp|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setMonitorlastattemptat = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearMonitorlastattemptat = function() {
  return this.setMonitorlastattemptat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasMonitorlastattemptat = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double monitorLastScore = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getMonitorlastscore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setMonitorlastscore = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearMonitorlastscore = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasMonitorlastscore = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double monitorLastLatency = 5;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getMonitorlastlatency = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setMonitorlastlatency = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearMonitorlastlatency = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasMonitorlastlatency = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PredictorHealth health = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getHealth = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth, 6));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setHealth = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearHealth = function() {
  return this.setHealth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasHealth = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 observedGeneration = 7;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated ModelRecord history = 9;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getHistoryList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord, 9));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setHistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.addHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ModelRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearHistoryList = function() {
  return this.setHistoryList([]);
};


/**
 * optional MonitorStatus monitorStatus = 10;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getMonitorstatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus, 10));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setMonitorstatus = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearMonitorstatus = function() {
  return this.setMonitorstatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasMonitorstatus = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastUpdated = 11;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getLastupdated = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 11));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setLastupdated = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearLastupdated = function() {
  return this.setLastupdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasLastupdated = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string targetColumn = 12;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getTargetcolumn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setTargetcolumn = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearTargetcolumn = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasTargetcolumn = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string positiveLabel = 13;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getPositivelabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setPositivelabel = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearPositivelabel = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasPositivelabel = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string negativeLabel = 14;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getNegativelabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setNegativelabel = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearNegativelabel = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasNegativelabel = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * repeated PredictorCondition conditions = 15;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition, 15));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.getWarmup = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.setWarmup = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.clearWarmup = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.hasWarmup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 trafficIncrement = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.getTrafficincrement = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.setTrafficincrement = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.clearTrafficincrement = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.hasTrafficincrement = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string canaryMetrics = 3;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.getCanarymetricsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.setCanarymetricsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.addCanarymetrics = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.prototype.clearCanarymetricsList = function() {
  return this.setCanarymetricsList([]);
};


goog.object.extend(exports, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1);
