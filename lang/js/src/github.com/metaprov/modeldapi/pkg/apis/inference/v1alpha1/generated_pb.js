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
var k8s_io_api_core_v1_generated_pb = require('../../../../../../../k8s.io/api/core/v1/generated_pb.js');
goog.object.extend(proto, k8s_io_api_core_v1_generated_pb);
var k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb);
var k8s_io_apimachinery_pkg_runtime_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_runtime_generated_pb);
var k8s_io_apimachinery_pkg_runtime_schema_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb.js');
goog.object.extend(proto, k8s_io_apimachinery_pkg_runtime_schema_generated_pb);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus', null, global);
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
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.Prediction', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels', null, global);
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
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus';
}
/**
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec';
}
/**
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
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
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
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec';
}
/**
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels';
}
/**
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
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    notifiername: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionname(value);
      break;
    case 2:
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.serializeBinaryToWriter = function(message, writer) {
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
 * optional string connectionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.prototype.setConnectionname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.prototype.clearConnectionname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.prototype.hasConnectionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string notifierName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.prototype.getNotifiername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.prototype.setNotifiername = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.prototype.clearNotifiername = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.prototype.hasNotifiername = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    databaseconnectionname: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    inputkey: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    scaninterval: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabaseconnectionname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputkey(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScaninterval(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string connectionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.setConnectionname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.clearConnectionname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.hasConnectionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string databaseConnectionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.getDatabaseconnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.setDatabaseconnectionname = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.clearDatabaseconnectionname = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.hasDatabaseconnectionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string inputKey = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.getInputkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.setInputkey = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.clearInputkey = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.hasInputkey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 scanInterval = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.getScaninterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.setScaninterval = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.clearScaninterval = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.prototype.hasScaninterval = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    error: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.serializeBinaryToWriter = function(message, writer) {
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
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.prototype.setError = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.prototype.clearError = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.prototype.hasError = function() {
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
    schedule: (f = msg.getSchedule()) && github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.toObject(includeInstance, f),
    template: (f = msg.getTemplate()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.toObject(includeInstance, f)
  };

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
      var value = new github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.deserializeBinaryFromReader);
      msg.setSchedule(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionTemplate.deserializeBinaryFromReader);
      msg.setTemplate(value);
      break;
    default:
      reader.skipField();
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
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.serializeBinaryToWriter
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
 * optional github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.RunSchedule schedule = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.RunSchedule}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.getSchedule = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.RunSchedule} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.RunSchedule|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.setSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionSpec.prototype.clearSchedule = function() {
  return this.setSchedule(undefined);
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
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    observedgeneration: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setObservedgeneration(value);
      break;
    case 2:
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
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 observedGeneration = 1;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.getObservedgeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.setObservedgeneration = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.clearObservedgeneration = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.hasObservedgeneration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated CronPredictionCondition conditions = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.CronPredictionCondition, opt_index);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    cronexpr: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    treshold: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    notifiername: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    testdataset: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCronexpr(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTreshold(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNotifiername(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTestdataset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeDouble(
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
 * optional string cronExpr = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.getCronexpr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.setCronexpr = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.clearCronexpr = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.hasCronexpr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double treshold = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.getTreshold = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.setTreshold = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.clearTreshold = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.hasTreshold = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string notifierName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.getNotifiername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.setNotifiername = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.clearNotifiername = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.hasNotifiername = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string testDataset = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.getTestdataset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.setTestdataset = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.clearTestdataset = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.prototype.hasTestdataset = function() {
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
    skew: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    drift: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
    sampleprecent: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    samplelabelMap: (f = msg.getSamplelabelMap()) ? f.toObject(includeInstance, undefined) : [],
    schedule: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    notifiername: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
  };

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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkew(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDrift(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSampleprecent(value);
      break;
    case 5:
      var value = msg.getSamplelabelMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchedule(value);
      break;
    case 7:
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
  f = message.getSamplelabelMap(true);
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
 * optional bool skew = 2;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.getSkew = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.setSkew = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.clearSkew = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.hasSkew = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool drift = 3;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.getDrift = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.setDrift = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.clearDrift = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.hasDrift = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 samplePrecent = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.getSampleprecent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.setSampleprecent = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.clearSampleprecent = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.hasSampleprecent = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, string> sampleLabel = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.getSamplelabelMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.clearSamplelabelMap = function() {
  this.getSamplelabelMap().clear();
  return this;};


/**
 * optional string schedule = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.getSchedule = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.setSchedule = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.clearSchedule = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string notifierName = 7;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.getNotifiername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.setNotifiername = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.clearNotifiername = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.prototype.hasNotifiername = function() {
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
    lasttransitiontime: (f = msg.getLasttransitiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    actualdriftMap: (f = msg.getActualdriftMap()) ? f.toObject(includeInstance, undefined) : [],
    actualskewMap: (f = msg.getActualskewMap()) ? f.toObject(includeInstance, undefined) : []
  };

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
      msg.setLasttransitiontime(value);
      break;
    case 2:
      var value = msg.getActualdriftMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readFloat, null, "", 0.0);
         });
      break;
    case 3:
      var value = msg.getActualskewMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readFloat, null, "", 0.0);
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
  f = message.getLasttransitiontime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getActualdriftMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeFloat);
  }
  f = message.getActualskewMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeFloat);
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.getLasttransitiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 1));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.setLasttransitiontime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.clearLasttransitiontime = function() {
  return this.setLasttransitiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.hasLasttransitiontime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, float> actualDrift = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.getActualdriftMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.clearActualdriftMap = function() {
  this.getActualdriftMap().clear();
  return this;};


/**
 * map<string, float> actualSkew = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.getActualskewMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.prototype.clearActualskewMap = function() {
  this.getActualskewMap().clear();
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    path: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    accesstype: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesstype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int32 port = 5;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.prototype.clearPort = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.prototype.hasPort = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string path = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.prototype.setPath = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.prototype.clearPath = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.prototype.hasPath = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string accessType = 7;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.prototype.getAccesstype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.prototype.setAccesstype = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.prototype.clearAccesstype = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.prototype.hasAccesstype = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.toObject = function(includeInstance, msg) {
  var f, obj = {
    online: (f = msg.getOnline()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.toObject(includeInstance, f),
    table: (f = msg.getTable()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.toObject(includeInstance, f),
    bot: (f = msg.getBot()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.toObject(includeInstance, f),
    streaming: (f = msg.getStreaming()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.deserializeBinaryFromReader);
      msg.setOnline(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.deserializeBinaryFromReader);
      msg.setTable(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.deserializeBinaryFromReader);
      msg.setBot(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.deserializeBinaryFromReader);
      msg.setStreaming(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOnline();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec.serializeBinaryToWriter
    );
  }
  f = message.getTable();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.serializeBinaryToWriter
    );
  }
  f = message.getBot();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec.serializeBinaryToWriter
    );
  }
  f = message.getStreaming();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional OnlineChannelSpec online = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.getOnline = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec, 1));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineChannelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.setOnline = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.clearOnline = function() {
  return this.setOnline(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.hasOnline = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TableChannelSpec table = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.getTable = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec, 2));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.setTable = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.clearTable = function() {
  return this.setTable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.hasTable = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BotChannelSpec bot = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.getBot = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec, 3));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BotChannelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.setBot = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.clearBot = function() {
  return this.setBot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.hasBot = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional BucketChannelSpec bucket = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec, 4));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.BucketChannelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.setBucket = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.clearBucket = function() {
  return this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional StreamingChannelSpec streaming = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.getStreaming = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec, 5));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.setStreaming = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.clearStreaming = function() {
  return this.setStreaming(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.prototype.hasStreaming = function() {
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
    output: (f = msg.getOutput()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.toObject(includeInstance, f),
    testsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    workloadclassname: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    activedeadlineseconds: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
  };

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
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.deserializeBinaryFromReader);
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
    default:
      reader.skipField();
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
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation.serializeBinaryToWriter
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
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation output = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionSpec.prototype.getOutput = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataLocation, 6));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataLocation|undefined} value
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
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.repeatedFields_ = [4,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    completiontime: (f = msg.getCompletiontime()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    phase: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.toObject, includeInstance),
    observedgeneration: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
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
      msg.setCompletiontime(value);
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
  f = message.getCompletiontime();
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
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
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
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time completionTime = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getCompletiontime = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 2));
};


/**
 * @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setCompletiontime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.clearCompletiontime = function() {
  return this.setCompletiontime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.hasCompletiontime = function() {
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
 * repeated PredictionCondition conditions = 6;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition, 6));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCondition, opt_index);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    totalpredictions: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    totalrequests: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    totalp95requests: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    medianresponsetime: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    lastdailypredictionsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalpredictions(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalrequests(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalp95requests(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMedianresponsetime(value);
      break;
    case 5:
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
  f = message.getLastdailypredictionsList();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      5,
      f
    );
  }
};


/**
 * optional int32 totalPredictions = 1;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.getTotalpredictions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.setTotalpredictions = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.clearTotalpredictions = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.hasTotalpredictions = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 totalRequests = 2;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.getTotalrequests = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.setTotalrequests = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.clearTotalrequests = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.hasTotalrequests = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 totalP95Requests = 3;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.getTotalp95requests = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.setTotalp95requests = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.clearTotalp95requests = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.hasTotalp95requests = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 medianResponseTime = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.getMedianresponsetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.setMedianresponsetime = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.clearMedianresponsetime = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.hasMedianresponsetime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated int32 lastDailyPredictions = 5;
 * @return {!Array<number>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.getLastdailypredictionsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.setLastdailypredictionsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.prototype.addLastdailypredictions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    description: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    productref: (f = msg.getProductref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    servingsiteref: (f = msg.getServingsiteref()) && k8s_io_api_core_v1_generated_pb.ObjectReference.toObject(includeInstance, f),
    template: (f = msg.getTemplate()) && k8s_io_api_core_v1_generated_pb.PodTemplate.toObject(includeInstance, f),
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.toObject, includeInstance),
    driftcheck: (f = msg.getDriftcheck()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.toObject(includeInstance, f),
    progressive: (f = msg.getProgressive()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.toObject(includeInstance, f),
    artifactsfolder: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    input: (f = msg.getInput()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.toObject(includeInstance, f),
    output: (f = msg.getOutput()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.toObject(includeInstance, f),
    minreplicas: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f,
    autoscale: (f = jspb.Message.getBooleanField(msg, 18)) == null ? undefined : f,
    maxreplicas: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    owner: (f = jspb.Message.getField(msg, 20)) == null ? undefined : f,
    workloadclassname: (f = jspb.Message.getField(msg, 21)) == null ? undefined : f,
    cache: (f = msg.getCache()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.toObject(includeInstance, f),
    store: (f = msg.getStore()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.toObject(includeInstance, f),
    forewardcurtain: (f = jspb.Message.getField(msg, 24)) == null ? undefined : f,
    backwardcurtain: (f = jspb.Message.getField(msg, 25)) == null ? undefined : f,
    type: (f = jspb.Message.getField(msg, 26)) == null ? undefined : f,
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
      msg.setDescription(value);
      break;
    case 2:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setProductref(value);
      break;
    case 3:
      var value = new k8s_io_api_core_v1_generated_pb.ObjectReference;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.ObjectReference.deserializeBinaryFromReader);
      msg.setServingsiteref(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.PodTemplate;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.PodTemplate.deserializeBinaryFromReader);
      msg.setTemplate(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    case 12:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.deserializeBinaryFromReader);
      msg.setDriftcheck(value);
      break;
    case 13:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.deserializeBinaryFromReader);
      msg.setProgressive(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setArtifactsfolder(value);
      break;
    case 15:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 16:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.deserializeBinaryFromReader);
      msg.setOutput(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinreplicas(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutoscale(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxreplicas(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadclassname(value);
      break;
    case 22:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.deserializeBinaryFromReader);
      msg.setCache(value);
      break;
    case 23:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.deserializeBinaryFromReader);
      msg.setStore(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setForewardcurtain(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackwardcurtain(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 27:
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
  f = message.getProductref();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getServingsiteref();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_api_core_v1_generated_pb.ObjectReference.serializeBinaryToWriter
    );
  }
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.PodTemplate.serializeBinaryToWriter
    );
  }
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.serializeBinaryToWriter
    );
  }
  f = message.getDriftcheck();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec.serializeBinaryToWriter
    );
  }
  f = message.getProgressive();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.serializeBinaryToWriter
    );
  }
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBool(
      18,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeInt32(
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
  f = message.getCache();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec.serializeBinaryToWriter
    );
  }
  f = message.getStore();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeString(
      24,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeString(
      25,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getMonitor();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference productRef = 2;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getProductref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 2));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setProductref = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
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
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.api.core.v1.ObjectReference servingsiteRef = 3;
 * @return {?proto.k8s.io.api.core.v1.ObjectReference}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getServingsiteref = function() {
  return /** @type{?proto.k8s.io.api.core.v1.ObjectReference} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.ObjectReference, 3));
};


/**
 * @param {?proto.k8s.io.api.core.v1.ObjectReference|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setServingsiteref = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
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
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.PodTemplate template = 4;
 * @return {?proto.k8s.io.api.core.v1.PodTemplate}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getTemplate = function() {
  return /** @type{?proto.k8s.io.api.core.v1.PodTemplate} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.PodTemplate, 4));
};


/**
 * @param {?proto.k8s.io.api.core.v1.PodTemplate|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
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
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec models = 5;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec, 5));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearModelsList = function() {
  return this.setModelsList([]);
};


/**
 * optional DriftCheckSpec driftCheck = 12;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getDriftcheck = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec, 12));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.DriftCheckSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setDriftcheck = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearDriftcheck = function() {
  return this.setDriftcheck(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasDriftcheck = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ProgressiveSpec progressive = 13;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getProgressive = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec, 13));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ProgressiveSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setProgressive = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
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
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string artifactsFolder = 14;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getArtifactsfolder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setArtifactsfolder = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearArtifactsfolder = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasArtifactsfolder = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional PredictionChannels input = 15;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getInput = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels, 15));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasInput = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional PredictionChannels output = 16;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getOutput = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels, 16));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionChannels|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setOutput = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional int32 minReplicas = 17;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getMinreplicas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setMinreplicas = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearMinreplicas = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasMinreplicas = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool autoscale = 18;
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getAutoscale = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setAutoscale = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearAutoscale = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasAutoscale = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional int32 maxReplicas = 19;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getMaxreplicas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setMaxreplicas = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearMaxreplicas = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasMaxreplicas = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional string owner = 20;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional string workloadClassName = 21;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getWorkloadclassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setWorkloadclassname = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearWorkloadclassname = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasWorkloadclassname = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional PredictionCacheSpec cache = 22;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getCache = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec, 22));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setCache = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
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
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional OnlineFeaturestoreSpec store = 23;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getStore = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec, 23));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.OnlineFeaturestoreSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setStore = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
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
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional string forewardCurtain = 24;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getForewardcurtain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setForewardcurtain = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearForewardcurtain = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasForewardcurtain = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional string backwardCurtain = 25;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getBackwardcurtain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setBackwardcurtain = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearBackwardcurtain = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasBackwardcurtain = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional string type = 26;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setType = function(value) {
  return jspb.Message.setField(this, 26, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.clearType = function() {
  return jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.hasType = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional MonitorSpec monitor = 27;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.getMonitor = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec, 27));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorSpec.prototype.setMonitor = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
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
  return jspb.Message.getField(this, 27) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.repeatedFields_ = [1,2,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
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
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.toObject, includeInstance),
    monitorlastattemptat: (f = msg.getMonitorlastattemptat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Timestamp.toObject(includeInstance, f),
    monitorlastscore: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    monitorlastlatency: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    health: (f = msg.getHealth()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorHealth.toObject(includeInstance, f),
    observedgeneration: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    statusesList: jspb.Message.toObjectList(msg.getStatusesList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.toObject, includeInstance),
    prevmodel: (f = msg.getPrevmodel()) && github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.toObject(includeInstance, f),
    monitorstatus: (f = msg.getMonitorstatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.toObject(includeInstance, f)
  };

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
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
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
    case 8:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.deserializeBinaryFromReader);
      msg.addStatuses(value);
      break;
    case 9:
      var value = new github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.deserializeBinaryFromReader);
      msg.setPrevmodel(value);
      break;
    case 10:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.MonitorStatus.deserializeBinaryFromReader);
      msg.setMonitorstatus(value);
      break;
    default:
      reader.skipField();
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
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition.serializeBinaryToWriter
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
  f = message.getStatusesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus.serializeBinaryToWriter
    );
  }
  f = message.getPrevmodel();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec.serializeBinaryToWriter
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
 * repeated PredictorCondition conditions = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition, 2));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
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
 * repeated ChannelStatus statuses = 8;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getStatusesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus, 8));
};


/**
 * @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus>} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setStatusesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.addStatuses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.ChannelStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearStatusesList = function() {
  return this.setStatusesList([]);
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec prevModel = 9;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.getPrevmodel = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_catalog_v1alpha1_generated_pb.ModelDeploymentSpec, 9));
};


/**
 * @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec|undefined} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
*/
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.setPrevmodel = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.clearPrevmodel = function() {
  return this.setPrevmodel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.PredictorStatus.prototype.hasPrevmodel = function() {
  return jspb.Message.getField(this, 9) != null;
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





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    inputkey: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.serializeBinaryToWriter = function(message, writer) {
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
 * optional string connectionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.prototype.setConnectionname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.prototype.clearConnectionname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.prototype.hasConnectionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string inputKey = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.prototype.getInputkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.prototype.setInputkey = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.prototype.clearInputkey = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.StreamingChannelSpec.prototype.hasInputkey = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionname: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    datasourcename: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    tablename: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    scaninterval: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasourcename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScaninterval(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string connectionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.getConnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.setConnectionname = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.clearConnectionname = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.hasConnectionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string datasourceName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.getDatasourcename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.setDatasourcename = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.clearDatasourcename = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.hasDatasourcename = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string tableName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.setTablename = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.clearTablename = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.hasTablename = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 scanInterval = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.getScaninterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.setScaninterval = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec} returns this
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.clearScaninterval = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1.TableChannelSpec.prototype.hasScaninterval = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.github.com.metaprov.modeldapi.pkg.apis.inference.v1alpha1);
